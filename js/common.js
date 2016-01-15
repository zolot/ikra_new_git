$(document).ready(function() {

    //Всплывающее окно формы
    $('.popup').magnificPopup({
        mainClass: 'mfp-move-from-top',
        removalDelay: 300,
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 1000, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
            removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
                beforeOpen: function() {
                    // just a hack that adds mfp-anim class to markup 
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                    this.content.addClass('mfp-removing');
                }, 
                beforeClose: function() {
                        this.content.addClass('mfp-removing');
                    }
                },
                closeOnContentClick: true,
                midClick: true,
                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function(openerElement) {
                // openerElement is the element on which popup was initialized, in this case its <a> tag
                // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
    });

	//Слайдер стоимости
    $('.fishes-slider').owlCarousel({
        loop:true,
        nav:false,
        items: 1,
        animateOut: 'fadeOut',
        smartSpeed: 300
    });

    //Слайдер сертификатов
    $('.certificates-slider').owlCarousel({
        loop:false,
        nav:false,
        items: 3,
        margin: 30,
        autoWidth:true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        smartSpeed: 500
    });

    //Слайдер схемы работы
    $('.bxslider-scheme').bxSlider({
		pagerCustom: '#bx-pager-scheme',
		mode: 'fade',
		prevText: '<i class="fa fa-angle-left"></i>',
		nextText: '<i class="fa fa-angle-right"></i>'
	});

    $('.ephone').mask('+7 (999) 999-99-99');

    $('form').submit(function(e) {
            e.preventDefault();
            var $form = $(this);
            if (check_form($form)) {
                return false;
            }

            $.ajax({
                url: $form.attr('action'), 
                type: $form.attr('method'),
                data: $form.serialize(),

                success: function(data) {
                    var url = 'thank.html';
                    window.location = url;

                    $form.find("input[type=text], input[type=email], textarea").val(""); // очищаем форму
                },

                error: function(data) {
                    alert('Извините, данные не были переданы');
                }
            });
        });

        function check_form(form){
            var error = false;
            $(form).find('input, textarea').each(function(){
                if ($(this).val().length <= 1) {
                    $(this).addClass('error');
                    error = true;
                } else {
                    $(this).removeClass('error');
                }
            });

            var name = $(form).find('[name=name]');
            var phone = $(form).find("[name=phone]");
            var email = $(form).find("[name=email]");
            var city = $(form).find("[name=city]");

            if (name.val().length < 3) {
                name.addClass('error');
                error = true;
            }
            if (phone.val().length < 11) {
                phone.addClass('error');
                error = true;
            }
            return error;
        }

});