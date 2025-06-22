<?php
// PHP прокси для API запросов
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Обработка preflight запросов
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Получаем путь запроса
$request_uri = $_SERVER['REQUEST_URI'];
$api_path = '/api/';

// Проверяем, что это API запрос
if (strpos($request_uri, $api_path) === false) {
    http_response_code(404);
    echo json_encode(['error' => 'API endpoint not found']);
    exit();
}

// Убираем /api/ из пути
$api_endpoint = substr($request_uri, strpos($request_uri, $api_path) + strlen($api_path));

// URL API сервера (локальный)
$api_url = 'http://localhost:3001/api/' . $api_endpoint;

// Получаем метод запроса
$method = $_SERVER['REQUEST_METHOD'];

// Получаем заголовки
$headers = [];
foreach (getallheaders() as $name => $value) {
    if (strtolower($name) !== 'host') {
        $headers[] = "$name: $value";
    }
}

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
$content_type = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);

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
if ($content_type) {
    header('Content-Type: ' . $content_type);
}

// Возвращаем ответ
echo $response;
?> 