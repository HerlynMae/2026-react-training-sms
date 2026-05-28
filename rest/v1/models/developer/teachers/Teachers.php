<?php

class Teachers
{
    //this are the columns that came from our database - table
    public $teachers_aid;
    public $teachers_is_active;
    public $teachers_first_name;
    public $teachers_middle_name;
    public $teachers_last_name;
    public $teachers_subject;
    public $teachers_email;
    public $teachers_created;
    public $teachers_updated;

    //this will be used to connect the databse
    public $connection;

    //this will be used when inserting the data
    public $lastInsertedId;

    //will call the table that we created
    public $tblTeachers;

    //it will perform the setup tasks - connecting to database
    public function __construct($db)
    {
        $this->connection = $db; //this is our database
        $this->tblTeachers = "sms_teachers";
    }

    //PDOException is an error raised by PHP Data Objects (PDO) when database operations fail
    public function create()
    {
        try {
            //.= concatenate string
            $sql = "insert into";
            $sql .= "{$this->tblTeachers} ";
            $sql .= "( teachers_is_active,";
            $sql .= "teachers_first_name,";
            $sql .= "teachers_middle_name,";
            $sql .= "teachers_last_name,";
            $sql .= "teachers_subject,";
            $sql .= "teachers_email,";
            $sql .= "teachers_created,";
            $sql .= "teachers_updated ) values ( ";
            $sql .= ":teachers_is_active,";
            $sql .= ":teachers_first_name,";
            $sql .= ":teachers_middle_name,";
            $sql .= ":teachers_last_name,";
            $sql .= ":teachers_subject,";
            $sql .= ":teachers_email,";
            $sql .= ":teachers_created,";
            $sql .= ":teachers_updated )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                'teachers_is_active' => $this->teachers_is_active,
                'teachers_first_name' => $this->teachers_first_name,
                'teachers_middle_name' => $this->teachers_middle_name,
                'teachers_last_name' => $this->teachers_last_name,
                'teachers_subject' => $this->teachers_subject,
                'teachers_email' => $this->teachers_email,
                'teachers_created' => $this->teachers_created,
                'teachers_updated' => $this->teachers_updated,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertedId();
        } catch (PDOException $e) {
            // returnHandleError($e); //for troubleshooting
            $query = false;
        }
        return $query;
    }
}
