<?php

require_once "../../../core/header.php"; // allows you to access API
require_once "../../../core/functions.php"; // will used for all the function (create,read,update, archive, restore and delete)
require_once "../../../models/developer/teachers/Teacher.php"; // to use all the class in the teacher - models

$body = file_get_contents("php://input"); //network
$data = json_decode($body, true); // data you inserted

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {

    //CREATE
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $result = require 'create.php';
        sendResponse($result);
        exit;
    }
}
