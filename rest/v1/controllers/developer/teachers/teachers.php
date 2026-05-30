<?php

//require header.php to allow access to the API from other origins and to set the content type to JSON
require_once "../../../core/header.php";

//require needed functions
require_once "../../../core/functions.php";

//require the model classes to allow us to use the functions in the model classes
require_once "../../../models/developer/teachers/Teachers.php";

//get payload from frontend
$body = file_get_contents("php://input");
$data = json_decode($body, true);

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
    //PUT == UPDATE  A RECORD
    if ($_SERVER['REQUEST_METHOD'] == "PUT") {
        $result = require 'update.php';
        sendResponse($result);
        exit;
    }
    //DELETE == DELETE  A RECORD
    if ($_SERVER['REQUEST_METHOD'] == "DELETE") {
        $result = require 'delete.php';
        sendResponse($result);
        exit;
    }
}

//this is to prevent white page
http_response_code(200);
checkAccess();
