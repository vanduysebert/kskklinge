<?php
//Guaranteed slashes
    function addPostSlashes($string) {
        if ((get_magic_quotes_gpc()==1) || (get_magic_quotes_runtime()==1)) {
            return $string;
        }
        else{
            return addslashes($string);
        }
    }

//Guaranteed no slashes
    function stripPostSlashes($string) {
        if ((get_magic_quotes_gpc()==1) || (get_magic_quotes_runtime()==1)) {
            return stripslashes($string);
        }
        else{
            return $string;
        }
    }

?>
