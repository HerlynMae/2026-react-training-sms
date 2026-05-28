<?php

//require header.php to allow access to the API from other origins and to set the content type to JSON
require_once "../../../core/header.php";

//require needed functions
require_once "../../../core/functions.php";

//require the model classes to allow us to use the functions in the model classes
require_once "../../../models/developer/students/Students.php";

$conn = null;
$conn = checkDbConnection();

//get payload from frontend
$body = file_get_contents("php://input");
$data = json_decode($body, true);

$val = new Students($conn);

//HTTP AUTHORIZATION is the first layer of security in our web application. 
// It is used to check if the request is coming from an authorized source. 
// If the request is not coming from an authorized source, it will return an error response to the frontend client. 
// If the request is coming from an authorized source, it will execute the code inside the if statement. 
// This is used to prevent unauthorized access to our API endpoints.

// isset() is used to check if the HTTP_AUTHORIZATION header is set in the request.
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    if (array_key_exists('id', $_GET)) {
        $val->students_aid = $_GET['id'];
        $val->students_is_active = trim($data['isActive']);
        $val->students_updated = date('Y-m-d H:i:s');

        // validation
        checkId($val->students_aid);

        $query = checkActive($val);
        http_response_code(200);
        returnSuccess($val, 'Students Active', $query);
    }
}

//this is to prevent white page
http_response_code(200);
checkAccess();
