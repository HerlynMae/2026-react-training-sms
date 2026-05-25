<?php

class Response
{
    private $_success;
    private $_data;
    private $_statusCode;
    private $_toCache = false;
    private $_responseData = [];

    //only set the var in the response class
    public function setSuccess($success)
    {
        $this->_success = $success;
    }

    //only set the data in the response class
    public function setData($data)
    {
        $this->_data = $data;
    }


    // only set the status code in the response class
    public function setStatusCode($statusCode)
    {
        $this->_statusCode = $statusCode;
    }

    // only set the to cache in the response class
    public function toCache($toCache)
    {
        $this->_toCache = $toCache;
    }

    //this function send the response to the ui frontend client 
    public function send()
    {
        header("Content-Type:application/json;");

        //if the to cache is true, then the response will be cached for 60 seconds, otherwise it will not be cached.
        if ($this->_toCache == true) {
            header("Cache-Control: max-age=60");
        } else {
            header("Cache-Control: no-cache, no-store");
        }
        //the response data is set to the data that is set in the response class, and then it is encoded to json format and sent to the ui frontend client.
        $this->_responseData = $this->_data;

        echo json_encode($this->_responseData);
    }
}
