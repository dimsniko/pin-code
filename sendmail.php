<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/var/www/u1672905/data/www/pin-code.pro/PHPMailer/src/Exception.php';
require '/var/www/u1672905/data/www/pin-code.pro/PHPMailer/src/PHPMailer.php';
require '/var/www/u1672905/data/www/pin-code.pro/PHPMailer/src/SMTP.php';

// Создаем письмо
$mail = new PHPMailer();
$mail->isSMTP();                   // Отправка через SMTP
$mail->Host   = 'mail.pin-code.pro';  // Адрес SMTP сервера
$mail->SMTPAuth   = true;          // Enable SMTP authentication
$mail->Username   = 'site@pin-code.pro';       // ваше имя пользователя (без домена и @)
$mail->Password   = 'Derparol1#';    // ваш пароль
$mail->SMTPSecure = 'ssl';         // шифрование ssl
$mail->Port   = 465;               // порт подключения
$mail->SMTPDebug = 3;
$mail->CharSet = 'UTF-8';
// Отключение проверки сертификата
// $mail->SMTPOptions = array(
//   'ssl' => array(
//       'verify_peer' => false,
//       'verify_peer_name' => false,
//       'allow_self_signed' => true
//   )
// );

$mail->setFrom('site@pin-code.pro', 'C сайта');    // от кого
$mail->addAddress('site@pin-code.pro', 'ВСЕМ'); // кому

$mail->Subject = 'Форма обратной связи';

// Тело письма
$body = '<h1>Заявка</h1>';

if(trim(!empty($_POST['name']))) {
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))) {
    $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['message']))) {
    $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
}
$mail->msgHTML($body);
$mail->AltBody = strip_tags($body); // Альтернативный текст для клиентов, которые не поддерживают HTML

// Отправляем
if ($mail->send()) {
  echo json_encode(['message' => 'Письмо отправлено!']);
} else {
  echo json_encode(['message' => 'Ошибка: ' . $mail->ErrorInfo]);
}



// $mail = new PHPMailer(true);
// $mail->CharSet = 'UTF-8';
// $mail->setLanguage('ru', 'phpmailer/language/');
// $mail->IsHTML(true);

// // От кого письмо
// $mail->setFrom('site@pin-code.pro', 'С Сайта');
// // Кому отправить
// $mail->addAddress('site@pin-code.pro');
// // Тема письма
// $mail->Subject = 'Форма обратной связи';

// 

// // Отправляем
// if (!$mail->send()) {
//     $message = 'Ошибка';
// } else {
//     $message = 'Данные отправлены';
// }

// $response = ['message' => $message];

// header('Content-type: application/json');
// echo json_encode($response);


?>