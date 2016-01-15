<?php
    if (array_key_exists('name', $_POST)) {

       $to = 'kondratev@iceberg8.ru';

       $subject = 'Заполнена контактная форма с '.$_SERVER['HTTP_REFERER'];

       $subject = "=?utf-8?b?". base64_encode($subject) ."?=";

       $message = "Имя: ".$_POST['name']."\nГород: ".$_POST['city']."\nТелефон: ".$_POST['phone']."\nE-mail: ".$_POST['email'];

       $headers = 'Content-type: text/plain; charset="utf-8"';
       $headers .= "MIME-Version: 1.0\r\n";
       $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
       mail($to, $subject, $message, $headers);
    }
?>