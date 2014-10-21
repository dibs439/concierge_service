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


if(isset($_POST)) {
	
	$ret = array();
	
	
	
	$ret["error_code"] = "S4300"; // Initialize
	
	if(!isset($_POST["tail_id"]) || $_POST["tail_id"] == "")
	{
		$ret["error_code"] = "S4301"; // Tail Id not found	
	}

	else if(!isset($_POST["ac_type"]) || $_POST["ac_type"] == "")
	{
		$ret["error_code"] = "S4302"; // AC Type not found	
	}

	else if(!isset($_POST["arrival_time"]) || $_POST["arrival_time"] == "")
	{
		$ret["error_code"] = "S4303"; // Arrival Time not found	
	}

	else if(!isset($_POST["departure_time"]) || $_POST["departure_time"] == "")
	{
		$ret["error_code"] = "S4304"; // Departure Time Id not found	
	}
	

	else if(!isset($_POST["total_gallons"]) || $_POST["total_gallons"] == "")
	{
		$ret["error_code"] = "S4305"; // Total Gallons not found	
	}
	
	else if(!isset($_POST["fuel_type"]) || $_POST["fuel_type"] == "")
	{
		$ret["error_code"] = "S4306"; // Fuel Type not found	
	}

	// Duplicate username check
	if($ret["error_code"] == "S4300")
	{
		
		$update_field_values = array(
			'tail_id' 					=> mysql_real_escape_string($_POST["tail_id"]),
			
			'ac_type' 					=> mysql_real_escape_string($_POST["ac_type"]),
			'arrival_time' 				=> mysql_real_escape_string($_POST["arrival_time"]),
			'arrived' 					=> mysql_real_escape_string($_POST["arrived"]),
			'departure_time' 			=> mysql_real_escape_string($_POST["departure_time"]),
			'departed' 					=> mysql_real_escape_string($_POST["departed"]),
			'fuel_type' 				=> mysql_real_escape_string($_POST["fuel_type"]),
			'fuel_status' 				=> mysql_real_escape_string($_POST["fuel_status"]),
			'total_gallons' 			=> mysql_real_escape_string($_POST["total_gallons"]),
			'fuel_instructions' 		=> mysql_real_escape_string($_POST["fuel_instructions"]),
			'oil_status' 				=> mysql_real_escape_string($_POST["oil_status"]),
			'oil_type' 					=> mysql_real_escape_string($_POST["oil_type"]),
			'oil_grade' 				=> mysql_real_escape_string($_POST["oil_grade"]),
			'engine_1' 					=> mysql_real_escape_string($_POST["engine_1"]),
			'qty_1' 					=> mysql_real_escape_string($_POST["qty_1"]),
			'engine_2' 					=> mysql_real_escape_string($_POST["engine_2"]),
			'qty_2' 					=> mysql_real_escape_string($_POST["qty_2"]),
			'oil_instructions' 			=> mysql_real_escape_string($_POST["oil_instructions"]),
			'customer_name' 			=> mysql_real_escape_string($_POST["customer_name"]),
			'employee_no' 				=> mysql_real_escape_string($_POST["employee_no"]),
			'parking' 					=> mysql_real_escape_string($_POST["parking"]),
			'hanger' 					=> mysql_real_escape_string($_POST["hanger"]),
			'landing' 					=> mysql_real_escape_string($_POST["landing"]),
			'facility' 					=> mysql_real_escape_string($_POST["facility"]),
			'vehicle' 					=> mysql_real_escape_string($_POST["vehicle"]),
			'gpu' 						=> mysql_real_escape_string($_POST["gpu"]),
			'catering' 					=> mysql_real_escape_string($_POST["catering"]),
			'lav' 						=> mysql_real_escape_string($_POST["lav"]),
			'h2o' 						=> mysql_real_escape_string($_POST["h2o"]),
			'parking_status' 			=> mysql_real_escape_string($_POST["parking_status"]),
			'hanger_status' 			=> mysql_real_escape_string($_POST["hanger_status"]),
			'landing_status' 			=> mysql_real_escape_string($_POST["landing_status"]),
			'facility_status' 			=> mysql_real_escape_string($_POST["facility_status"]),
			'vehicle_status' 			=> mysql_real_escape_string($_POST["vehicle_status"]),
			'gpu_status' 				=> mysql_real_escape_string($_POST["gpu_status"]),
			'catering_status' 			=> mysql_real_escape_string($_POST["catering_status"]),
			'lav_status' 				=> mysql_real_escape_string($_POST["lav_status"]),
			'h2o_status' 				=> mysql_real_escape_string($_POST["h2o_status"]),
			'lav_srvc_by' 				=> mysql_real_escape_string($_POST["lav_srvc_by"]),
			'h2o_srvc_by' 				=> mysql_real_escape_string($_POST["h2o_srvc_by"]),
			'notes' 					=> mysql_real_escape_string($_POST["notes"])
		);
		
		
		
		
		
		$conditions_field_values = array("tail_id" => mysql_real_escape_string($_POST["tail_id"]));
		
		$refill = get_record("refills", "id", $conditions_field_values);
		
		if(isset($refill['id']) && $refill['id'] <> "")
			$v = update_record("refills", $update_field_values, $conditions_field_values);
		else
			$v = insert("refills", $update_field_values, false);
		
		if($v == 1)
			$ret["error_code"] = "S4300"; 		// Fuel data successfully added.
		else		
			$ret["error_code"] = "S4313"; 		// Refill data not added.
	
	}
	
} 
else 
{
	$ret["error_code"] = "S40002"; // Invalid request parameter string.
}

echo $ret["error_code"];

include_once("logging.php");

include_once(LIB_DIR . "close.php");
?>