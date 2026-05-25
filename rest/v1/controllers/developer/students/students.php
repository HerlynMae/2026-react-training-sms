<?php

//require header.php to allow access to the API from other origins and to set the content type to JSON
require_once "../viter-sms/rest/v1/core/header.php";

//require needed functions
require_once "../viter-sms/rest/v1/core/functions.php";

//require the model classes to allow us to use the functions in the model classes
require_once "../viter-sms/rest/v1/models/developer/students/Students.php";

//get payload from frontend
$body = file_get_contents("php://input");
$data = json_decode($body, true);

//POST == CREATE  A RECORD
if($_SERVER['REQUEST_METHOD'] == "POST") {
    $result = require 'create.php';
    sendResponse($result);
    exit;
}
