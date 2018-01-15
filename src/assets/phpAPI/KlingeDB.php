<?php 
	class KlingeDB {
		private $dbHandler;
		private $host;
		private $user;
		private $pass;
		private $dbname;
		
		public function __construct() {
			$this->host = 'localhost';
			$this->user = 'kskkling';
			$this->pass = '42Klinge11';
			$this->dbname = 'kskkling_KSKKlinge';
		}
                
                
	
        public function connect(){
            $this->dbHandler = mysql_connect($this->host, $this->user, $this->pass) or die ("Unable to connect to the server");
            mysql_select_db($this->dbname) or die ("No database available");
        }

        public function disconnect() {
            @mysqli_close($this->dbHandler);
            $this->dbHandler = null;
        }
		
	public function checkInput($value) {
            if(!$this->dbHandler) $this->connect();
            if (get_magic_quotes_gpc())
              {
              $value = stripslashes($value);
              }

            if (!is_numeric($value))
              {
              $value = "`" . mysql_real_escape_string($value) . "`";
              }
              $this->disconnect();
            return $value;
		}
		
	public function executeQuery($query) {
            if(!$this->dbHandler) $this->connect();
            $query = (string) $query;
            $result =  mysql_query($query) or trigger_error( mysql_error() );
            
            $this->disconnect();
            return $result;
        }
		
	}