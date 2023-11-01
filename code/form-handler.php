<?php
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $name = $_POST["name"];
//     $phone = $_POST["phone"];
//     $email = $_POST["email"];
//     $team = $_POST["team"];
//     $tariff = $_POST["tariff"];
    
//     // Встановіть адресу, на яку ви хочете отримувати заявки
//     $to = "ira97brig@gmail.com";
    
//     // Встановіть тему листа
//     $subject = "Нова заявка з форми";
    
//     // Створіть тіло листа
//     $message = "Ім'я: " . $name . "\n";
//     $message .= "Телефон: " . $phone . "\n";
//     $message .= "Email: " . $email . "\n";
//     $message .= "Розмір команди: " . $team . "\n";
//     $message .= "Тарифний план: " . $tariff . "\n";
    
//     // Налаштування заголовків листа
//     $headers = 'Content-Type: text/plain; charset=UTF-8' . "\r\n".
//     "From: " . $email . "\r\n";
//     $headers .= "Reply-To: " . $email . "\r\n" . 
//     'X-Mailer: PHP/' . phpversion();
    
//     // Надіслати лист
//     mail($to, $subject, $message, $headers);
//     echo "Лист успішно надіслано" . $to . $subject . $message . $headers;
// } else {
//       http_response_code(400);
//     echo "Помилка при надсиланні листа";
// }
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $team = $_POST["team"];
    $tariff = $_POST["tariff"];

    // Встановіть адресу, на яку ви хочете отримувати заявки
    $to = "";

    // Встановіть тему листа
    $subject = "Нова заявка з форми";

    // Створіть тіло листа
    $message = "Ім'я: " . $name . "\n";
    $message .= "Телефон: " . $phone . "\n";
    $message .= "Email: " . $email . "\n";
    $message .= "Розмір команди: " . $team . "\n";
    $message .= "Тарифний план: " . $tariff . "\n";

       // Налаштування заголовків листа
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n";
$headers .= "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();

    // Надіслати лист
    mail($to, $subject, $message);
    
    // Відправка повідомлення в телеграм
    $telegramToken = "";
    // $chatId = "";
    $chatId = ""; 
    $telegramMessage = "Ім'я: " . $name . "\n"
                     . "Телефон: " . $phone . "\n"
                     . "Email: " . $email . "\n"
                     . "Розмір команди: " . $team . "\n"
                     . "Тарифний план: " . $tariff;
    
    $telegramApiUrl = "https://api.telegram.org/bot" . $telegramToken . "/sendMessage";
    $telegramApiParams = [
        "chat_id" => $chatId,
        "text" => $telegramMessage
    ];
    
    $telegramApiOptions = [
        "http" => [
            "method" => "POST",
            "header" => "Content-Type: application/x-www-form-urlencoded\r\n",
            "content" => http_build_query($telegramApiParams),
            "ignore_errors" => true
        ]
    ];
    
    $telegramApiContext = stream_context_create($telegramApiOptions);
    $telegramApiResponse = file_get_contents($telegramApiUrl, false, $telegramApiContext);
    
    if ($telegramApiResponse === false) {
        echo "Помилка при надсиланні повідомлення в телеграм";
    } else {
        echo "Лист успішно надіслано та повідомлення відправлено в телеграм";
    }
} else {
    http_response_code(400);
    echo "Помилка при надсиланні листа";
}
?>
