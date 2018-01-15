<?php

require_once 'KlingeDB.php';
include_once 'slashes.php';
$db = new KlingeDB();

$method = $_SERVER['REQUEST_METHOD'];
$pathRequest = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$bodyRequest = json_decode(file_get_contents('php://input'),true);

if($method == 'GET') {
  
} elseif ($method == 'POST') {

} elseif ($method == 'PUT') {

} elseif ($method == 'DELETE') {

}

    public function getModule($name) {
        $module = "";
        $modbody = 'modbody';
        $table = 'modules';
        $this->db->checkInput($modbody);
        $this->db->checkInput($table);
        $sqlCommand = "SELECT $modbody FROM $table WHERE `name` =  '".$name."'  LIMIT 0,1";
        $query = $this->db->executeQuery($sqlCommand);
        while ($row = mysql_fetch_array($query)) {
        $module = $row["modbody"];
        }
        mysql_free_result($query);
        return $module;

     }
?>
