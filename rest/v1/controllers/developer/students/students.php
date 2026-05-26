<?php

//require header.php to allow access to the API from other origins and to set the content type to JSON
require_once "../../../core/header.php";

//require needed functions
require_once "../../../core/functions.php";

//require the model classes to allow us to use the functions in the model classes
require_once "../../../models/developer/students/Students.php";

//get payload from frontend
$body = file_get_contents("php://input");
$data = json_decode($body, true);

//HTTP AUTHORIZATION is the first layer of security in our web application. 
// It is used to check if the request is coming from an authorized source. 
// If the request is not coming from an authorized source, it will return an error response to the frontend client. 
// If the request is coming from an authorized source, it will execute the code inside the if statement. 
// This is used to prevent unauthorized access to our API endpoints.

// isset() is used to check if the HTTP_AUTHORIZATION header is set in the request.
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    //POST == CREATE  A RECORD
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $result = require 'create.php';
        sendResponse($result);
        exit;
    }
    //GET == RETRIEVE  A RECORD
    if ($_SERVER['REQUEST_METHOD'] == "GET") {
        $result = require 'read.php';
        sendResponse($result);
        exit;
    }
}

//this is to prevent white page
http_response_code(200);
checkAccess();
