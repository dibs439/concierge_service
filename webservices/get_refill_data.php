<?php
#################################################################################
## Developed by Prologic Web Services                                   		##
## http://www.prologicsoft.com                                          		##
#################################################################################

/**
 * @category NyteLyfe Web Application
 * @package nytelyfe
 * @author Dibyendu Mitra Roy <info@prologicsoft.com>
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @link http://www.prologicsoft.com/
 */

/**
 * Begin Document
 
 * 
*/


require_once("bootstrap.php");
require_once(LIB_DIR . "inc.php");

if($project_vars['msg']['development'] == "sandbox")
	error_reporting(1);
else
	error_reporting(0);


if(isset($_REQUEST)) {
	
	$ret = array();
	
	
	
	$ret["error_code"] = "S4300"; // Initialize
	
	if(!isset($_REQUEST["tail_id"]) || $_REQUEST["tail_id"] == "")
	{
		$ret["error_code"] = "S4301"; // Pump id not found	
	}

	
	
	
	// Duplicate username check
	if($ret["error_code"] == "S4300")
	{
		$conditions_field_values = array('tail_id' =>  mysql_real_escape_string($_REQUEST["tail_id"]));
		$refills = get_record("refills", "*", $conditions_field_values) ;
		
		//print_r($refills);
		if(!isset($refills['id']))
		{
			$ret["error_code"] = "S4302"; 		// No record found.
		}
		else
		{
			$ret['refills'] = $refills;
			
		}
	}
	
} 
else 
{
	$ret["error_code"] = "S4002"; // Invalid request parameter string.
}

echo json_encode($ret);

include_once("logging.php");

include_once(LIB_DIR . "close.php");
?>