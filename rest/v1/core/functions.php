<?php

require_once "Database.php";
require_once "Response.php";

// this function is used for using the database connection and response class in the controllers.

//checkDbConnection() - this function is used to check the database connection and return a response to the ui frontend client. 
function checkDbConnection()
{
    try {
        $conn = Database::connectDb();
        return $conn;
    } catch (Throwable $e) {
        returnHandleError("Database connection failed");
    }
}

function checkQuery($query, $msg)
{
    //if there's a ! before the $query it means that if the $query is false it will return the error message
    if (!$query) returnHandleError($msg);
}

// object is the file in models folder, and method is the function in the file that we want to call.
function checkCreate($object)
{
    $query = $object->create();
    checkQuery($query, "There's a problem processing your request. (create)");
    return $query;
}

// object is the file in models folder, and method is the function in the file that we want to call.
function checkReadAll($object)
{
    $query = $object->readAll();
    checkQuery($query, "There's a problem processing your request. (readAll)");
    return $query;
}

function checkReadById($object)
{
    $query = $object->readById();
    checkQuery($query, "There's a problem processing your request. (readById)");
    return $query;
}

function checkUpdate($object)
{
    $query = $object->update();
    checkQuery($query, "There's a problem processing your request. (update)");
    return $query;
}

function checkDelete($object)
{
    $query = $object->delete();
    checkQuery($query, "There's a problem processing your request. (delete)");
    return $query;
}

//this function will return success if the updates in the database is successful
function returnSuccess($object, $name, $query, $data = null)
{
    $response = new Response();
    $returnData = [];
    $returnData['data'] = $data;
    $returnData['count'] = $query->rowCount();
    $returnData["{$name} ID"] = $object->lastInsertedId;
    $returnData['success'] = true;
    $returnData['server_date'] = date('Y-m-d');
    $response->setData($returnData);
    $response->send();
    exit();
}

//this function is used to retrieve all the data
function getResultData($query)
{
    $data = $query->fetchAll(PDO::FETCH_ASSOC);
    return $data;
}

//this function is used to retrieve the data from models
function getQueriedData($query)
{
    $response = new Response();
    $returnData = [];
    $returnData['data'] = getResultData($query);
    $returnData['count'] = $query->rowCount();
    $returnData['success'] = true;
    $returnData['server_date'] = date('Y-m-d');
    $response->setData($returnData);
    $response->send();
    exit();
}

//this function creates a reusable error message
function returnHandleError(
    $msg,
    $error_message = "Something went wrong",
    $error_description = '',
    $error_code = 'invalid_request_error'
) {
    $response = new Response();
    $error = [];
    $response->setSuccess(false);
    $error['count'] = 0;
    $error['success'] = false;
    $error['message'] = $msg;
    $error['error_message'] = $error_message;
    $error['error_description'] = $error_description;
    $error['error_code'] = $error_code;
    $response->setData($error);
    $response->send();
    exit();
}

function sendResponse($result)
{
    $response = new Response();
    $response->setSuccess(true);
    $response->setStatusCode(200);
    $response->setData($result);
    $response->send();
}

function checkAccess()
{
    returnHandleError("Forbidden access", "Invalid request", "", "401");
}

function checkEndpoint()
{
    returnHandleError("Endpoint not found", "Invalid endpoint", "", "404");
}

function checkId($id)
{
    if (!$id || !is_numeric($id))
        returnHandleError("Invalid ID", "Invalid Request", "", "402");
}

//exit; - means to stop the execution of the script after sending the response to the frontend client. 
// return - if this is declare in the function it will stop reading 
// the code and the function will send the data
// return $result;
