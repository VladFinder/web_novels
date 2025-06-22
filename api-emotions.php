<?php
// API прокси для эмоций
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Обработка preflight запросов
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// URL API сервера
$api_url = 'http://localhost:3001/api/emotions';

// Получаем метод запроса
$method = $_SERVER['REQUEST_METHOD'];

// Получаем заголовки
$headers = [
    'Content-Type: application/json'
];

// Получаем тело запроса
$body = file_get_contents('php://input');

// Инициализируем cURL
$ch = curl_init();

// Настраиваем cURL
curl_setopt($ch, CURLOPT_URL, $api_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

// Добавляем тело запроса для POST/PUT
if ($method === 'POST' || $method === 'PUT') {
    curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
}

// Добавляем query параметры для GET
if ($method === 'GET' && !empty($_GET)) {
    $query_string = http_build_query($_GET);
    curl_setopt($ch, CURLOPT_URL, $api_url . '?' . $query_string);
}

// Выполняем запрос
$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

// Проверяем ошибки
if (curl_errno($ch)) {
    http_response_code(500);
    echo json_encode(['error' => 'API server error: ' . curl_error($ch)]);
    curl_close($ch);
    exit();
}

curl_close($ch);

// Устанавливаем код ответа
http_response_code($http_code);

// Устанавливаем Content-Type
header('Content-Type: application/json');

// Возвращаем ответ
echo $response;
?> 