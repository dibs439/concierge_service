	$(document).ready(function(){
	
	  
		$("#tail_id").focusout(function(){
		var tail_id = $("#tail_id").val();
		//alert(tail_id)
		if(tail_id != "")
		{
			var dataString = 'tail_id='+ tail_id
			
			//alert(dataString)
			
			// AJAX Code To Retrieve Data from database.
			$.ajax({
			type: "GET",
			url: "../webservices/get_refill_data.php",
			data: dataString,
			cache: false,
			success: function(result){
			//alert(result);
			
			var obj = jQuery.parseJSON(result);
			//alert(obj.error_code)
			if(obj.error_code == "S4300")
			{
				$( "#ac_type" ).val(obj.refills.ac_type);
				//alert(obj.refills.arrival_time)
				
				if(obj.refills.arrival_time != null && obj.refills.arrival_time != '' && obj.refills.arrival_time != '0000-00-00 00:00:00')
					$( "#arrival_time" ).val(db2cal(obj.refills.arrival_time));
				
				
				if(obj.refills.arrived == 1)
					$('#arrived').prop('checked', true).checkboxradio('refresh');
				
				if(obj.refills.departure_time != null && obj.refills.departure_time != '' && obj.refills.departure_time != '0000-00-00 00:00:00')
					$( "#departure_time" ).val(db2cal(obj.refills.departure_time));
				
				if(obj.refills.departed == 1)
					$('#departed').prop('checked', true).checkboxradio('refresh');
				
				$( "#fuel_type" ).val(obj.refills.fuel_type).selectmenu('refresh',true);
				
				if(obj.refills.fuel_status == 'progress')
					$('#fuel_status1').prop('checked', true).checkboxradio('refresh');
				else if(obj.refills.fuel_status == 'completed')
					$('#fuel_status2').prop('checked', true).checkboxradio('refresh');
					
				$( "#fuel_status" ).val(obj.refills.fuel_status);
				$( "#total_gallons" ).val(obj.refills.total_gallons);
				$( "#fuel_instructions" ).val(obj.refills.fuel_instructions);
				
				if(obj.refills.oil_status == 'requested')
					$('#oil_status1').prop('checked', true).checkboxradio('refresh');
				else if(obj.refills.oil_status == 'progress')
					$('#oil_status2').prop('checked', true).checkboxradio('refresh');
				else if(obj.refills.oil_status == 'completed')
					$('#oil_status3').prop('checked', true).checkboxradio('refresh');
				
				$( "#oil_type" ).val(obj.refills.oil_type).selectmenu('refresh',true);
				$( "#oil_grade" ).val(obj.refills.oil_grade).selectmenu('refresh',true);
				$( "#engine_1" ).val(obj.refills.engine_1);
				$( "#qty_1" ).val(obj.refills.qty_1);
				$( "#engine_2" ).val(obj.refills.engine_2);
				$( "#qty_2" ).val(obj.refills.qty_2);
				$( "#oil_instructions" ).val(obj.refills.oil_instructions);
				$( "#customer_name" ).val(obj.refills.customer_name);
				$( "#employee_no" ).val(obj.refills.employee_no);
				
				if(obj.refills.parking == '1')
					$('#parkingb').prop('checked', true).checkboxradio('refresh');
				
				if(obj.refills.hanger == '1')
					$('#hangerb').prop('checked', true).checkboxradio('refresh');
				
				if(obj.refills.landing == '1')
					$('#landingb').prop('checked', true).checkboxradio('refresh');
				
				if(obj.refills.facility == '1')
					$('#facilityb').prop('checked', true).checkboxradio('refresh');
				
				if(obj.refills.vehicle == '1')
					$('#vehicleb').prop('checked', true).checkboxradio('refresh');
				
				if(obj.refills.gpu == '1')
					$('#gpub').prop('checked', true).checkboxradio('refresh');
				
				if(obj.refills.catering == '1')
					$('#cateringb').prop('checked', true).checkboxradio('refresh');
				
				if(obj.refills.lav == '1')
					$('#lavb').prop('checked', true).checkboxradio('refresh');
				
				if(obj.refills.h2o == '1')
					$('#h2ob').prop('checked', true).checkboxradio('refresh');
				
				
					
				
				if(obj.refills.parking_status == 'progress')
					$('#parking1').prop('checked', true).checkboxradio('refresh');
				else if(obj.refills.parking == 'completed')
					$('#parking2').prop('checked', true).checkboxradio('refresh');
				
				if(obj.refills.hanger_status == 'progress')
					$('#hanger1').prop('checked', true).checkboxradio('refresh');
				else if(obj.refills.parking_status == 'completed')
					$('#hanger2').prop('checked', true).checkboxradio('refresh');
					
				if(obj.refills.landing_status == 'progress')
					$('#landing1').prop('checked', true).checkboxradio('refresh');
				else if(obj.refills.landing_status == 'completed')
					$('#landing2').prop('checked', true).checkboxradio('refresh');
					
				if(obj.refills.facility_status == 'progress')
					$('#facility1').prop('checked', true).checkboxradio('refresh');
				else if(obj.refills.facility_status == 'completed')
					$('#facility2').prop('checked', true).checkboxradio('refresh');
					
				if(obj.refills.vehicle_status == 'progress')
					$('#vehicle1').prop('checked', true).checkboxradio('refresh');
				else if(obj.refills.vehicle_status == 'completed')
					$('#vehicle2').prop('checked', true).checkboxradio('refresh');
					
				if(obj.refills.gpu_status == 'progress')
					$('#gpu1').prop('checked', true).checkboxradio('refresh');
				else if(obj.refills.gpu_status == 'completed')
					$('#gpu2').prop('checked', true).checkboxradio('refresh');
					
				if(obj.refills.catering_status == 'progress')
					$('#catering1').prop('checked', true).checkboxradio('refresh');
				else if(obj.refills.catering_status == 'completed')
					$('#catering2').prop('checked', true).checkboxradio('refresh');
					
				if(obj.refills.lav_status == 'progress')
					$('#lav1').prop('checked', true).checkboxradio('refresh');
				else if(obj.refills.lav_status == 'completed')
					$('#lav2').prop('checked', true).checkboxradio('refresh');
				
	
				if(obj.refills.h2o_status == 'progress')
					$('#h2o1').prop('checked', true).checkboxradio('refresh');				
				else if(obj.refills.h2o_status == 'completed')
					$('#h2o2').prop('checked', true).checkboxradio('refresh');
				
				
				if(obj.refills.security == '1')
					$('#security').prop('checked', true).checkboxradio('refresh');
				
				$( "#lav_srvc_by" ).val(obj.refills.lav_srvc_by);
				$( "#h2o_srvc_by" ).val(obj.refills.h2o_srvc_by);
				
				$( "#notes" ).val(obj.refills.notes);

			}
			
		}
		});
		
		}
	});
	

	
  

	$("form").submit(function(){
		
		var fuel_status, oil_status;
		var parking, hanger, landing, facility, vehicle, gpu, lav, catering, h2o;
		var parking_status, hanger_status, landing_status, facility_status, vehicle_status, gpu_status, catering_status, lav_status,  h2o_status ;
		var qty_1, qty_2;
		var arrived, departed, arrival_datetime, departure_datetime;
	
		var tail_id 			= $('#tail_id').val();
		var ac_type 			= $('#ac_type').val();
		var arrival_time 		= $('#arrival_time').val();
		if($( "#arrived" ).attr("checked") == 'checked')	
			arrived 			= $('#arrived').val();
		else
			arrived 			= 0;
			
			
		var departure_time 		= $('#departure_time').val();
		
		if($( "#departed" ).attr("checked") == 'checked')
			departed 			= $('#departed').val();
		else
			departed 			= 0;
		var fuel_type 			= $('#fuel_type').val();
		
		//alert(fuel_status)
		var total_gallons 			= $('#total_gallons').val();
		var fuel_instructions 		= $('#fuel_instructions').val();
		var oil_status 				= $( "input[name='oil_status']" ).val();
		var oil_type 				= $('#oil_type').val();
		var oil_grade 				= $('#oil_grade').val();
		var fuel_instructions 		= $('#fuel_instructions').val();
		//alert(oil_status)
		
		
		var engine_1 				= $('#engine_1').val();
		var engine_2 				= $('#engine_2').val();
		var oil_instructions 		= $('#oil_instructions').val();
		var customer_name 			= $('#customer_name').val();
		var employee_no 			= $('#employee_no').val();
		var lav_srvc_by 				= $('#lav_srvc_by').val();
		var h2o_srvc_by 				= $('#h2o_srvc_by').val();
		var notes 						= $('#notes').val();
		
			
		
		
		if(arrival_time != '')						
			arrival_datetime = cal2db(arrival_time);
		
		if(departure_time != '')						
			departure_datetime = cal2db(departure_time);
		
		//alert(arrival_datetime + " " + departure_time)
		
		
		if($( "input[name$='fuel_status']" ).attr("checked") == 'checked')		
			fuel_status = $( "input[name$='fuel_status']" ).val()		
		else
			fuel_status = null;
		
		if($( "input[name$='oil_status']" ).attr("checked") == 'checked')		
			oil_status = $( "input[name$='oil_status']" ).val()		
		else
			oil_status = null;			
		
		
		if($('#qty_1').val() == '')
			qty_1 					= 0;
		else
			qty_1 					= $('#qty_1').val();
		
		if($('#qty_2').val() == '')
			qty_2 					= 0;
		else
			qty_2 					= $('#qty_2').val();

			
		if($( "#parkingb" ).attr("checked") == 'checked')
			parking 				= 1;
		else
			parking 				= 0;
		
		
		if($( "#hangerb" ).attr("checked") == 'checked')
			hanger 				= 1;
		else
			hanger 				= 0;
		
		
		if($( "#landingb" ).attr("checked") == 'checked')
			landing 				= 1;
		else
			landing 				= 0;
		
		if($( "#facilityb" ).attr("checked") == 'checked')
			facility 				= 1;
		else
			facility 				= 0;
		
		if($( "#vehicleb" ).attr("checked") == 'checked')
			vehicle 				= 1;
		else
			vehicle 				= 0;
		
		if($( "#gpub" ).attr("checked") == 'checked')
			gpu 				= 1;
		else
			gpu 				= 0;
		
		if($( "#cateringb" ).attr("checked") == 'checked')
			catering 				= 1;
		else
			catering 				= 0;
		
		if($( "#lavb" ).attr("checked") == 'checked')
			lav 				= 1;
		else
			lav 				= 0;
		
		if($( "#h2ob" ).attr("checked") == 'checked')
			h2o 				= 1;
		else
			h2o 				= 0;
		
		
		if($( "input[name$='parkingc']" ).attr("checked") == 'checked')		
			parking_status = $( "input[name$='parkingc']" ).val()		
		else
			parking_status = null;
		
		if($( "input[name$='hangerc']" ).attr("checked") == 'checked')		
			hanger_status = $( "input[name$='hangerc']" ).val()		
		else
			hanger_status = null;
			
		if($( "input[name$='landingc']" ).attr("checked") == 'checked')		
			landing_status = $( "input[name$='landingc']" ).val()		
		else
			landing_status = null;
			
		if($( "input[name$='facilityc']" ).attr("checked") == 'checked')		
			facility_status = $( "input[name$='facilityc']" ).val()		
		else
			facility_status = null;
			
		if($( "input[name$='vehiclec']" ).attr("checked") == 'checked')		
			vehicle_status = $( "input[name$='vehiclec']" ).val()		
		else
			vehicle_status = null;
			
		if($( "input[name$='gpuc']" ).attr("checked") == 'checked')		
			gpu_status = $( "input[name$='gpuc']" ).val()		
		else
			gpu_status = null;
			
		if($( "input[name$='cateringc']" ).attr("checked") == 'checked')		
			catering_status = $( "input[name$='cateringc']" ).val()		
		else
			catering_status = null;
			
		if($( "input[name$='lavc']" ).attr("checked") == 'checked')		
			lav_status = $( "input[name$='lavc']" ).val()		
		else
			lav_status = null;
		
		//alert(h2o_status)
		if($( "input[name$='h2oc']" ).attr("checked") == 'checked')		
			h2o_status = $( "input[name$='h2oc']" ).val()		
		else
			h2o_status = null;
		
	
	// Returns successful data submission message when the entered information is stored in database.
	var dataString = 'tail_id='+ tail_id + '&ac_type='+ ac_type + '&arrival_time='+ arrival_datetime + '&arrived='+ arrived + '&departure_time='+ departure_datetime + '&departed='+ departed + '&fuel_type='+ fuel_type + '&fuel_status='+ fuel_status + '&total_gallons='+ total_gallons + '&fuel_instructions='+ fuel_instructions + '&engine_1='+ engine_1 + '&qty_1='+ qty_1 + '&engine_2='+ engine_2 + '&qty_2='+ qty_2 + '&oil_status='+ oil_status + '&oil_type='+ oil_type + '&oil_grade='+ oil_grade + '&oil_instructions='+ oil_instructions + '&customer_name='+ customer_name + '&employee_no='+ employee_no + '&parking='+ parking + '&hanger='+ hanger + '&landing='+ landing + '&facility='+ facility + '&vehicle='+ vehicle + '&gpu='+ gpu + '&catering='+ catering + '&catering='+ catering + '&lav='+ lav + '&h2o='+ h2o + '&parking_status='+ parking_status + '&hanger_status='+ hanger_status + '&landing_status='+ landing_status + '&facility_status='+ facility_status + '&vehicle_status='+ vehicle_status + '&gpu_status='+ gpu_status + '&catering_status='+ catering_status + '&lav_status='+ lav_status + '&h2o_status='+ h2o_status + '&lav_srvc_by='+ lav_srvc_by + '&h2o_srvc_by='+ h2o_srvc_by + '&notes='+ notes;
	//alert(dataString)
	if(tail_id==''|| ac_type==' '|| arrival_time=='' || departure_time=='')
	{
		alert("Please fill all mandatory fields.");
	}
	else
	{
		// AJAX Code To Submit Form.
		$.ajax({
		type: "POST",
		url: "../webservices/update_refill_data.php",
		data: dataString,
		cache: false,
		success: function(result){
		//alert(result)
		if(result == "S4300")
		{
			$(location).attr('href', 'thanks.html');
		}
		else
		{
			alert('Sorry, we are unable to save information. Please report to system admin.');
		}
		}
		});
	}

	
	return false;
	
		
	
   
  });


	$('input:radio').change(function () {
		var value = $( this ).val();
		var name = $( this ).attr('name');
		//alert(name +" = "+ value)
		$( "input[name$='"+name+"']" ).val(value);
		
	});
	
	
	$('input:checkbox').change(function () {
		var value = $( this ).val();
		var id = $( this ).attr('id');
		//alert(id +" = "+ value)
		//$( "input[name$='"+name+"']" ).val(value);
		
	});
	
	
  

	$('#arrival_time').datetimepicker({
	
	formatTime:'H:i',
	formatDate:'m.d.Y',
	step:5
	
	
	});

	$('#departure_time').datetimepicker({
		formatTime:'H:i',
		formatDate:'d.m.Y',
		step:5
		
	});
	
	$('#oil_status_deselect').click(function () {
		//alert('al')
		$("input[name$='oil_status']").prop('checked', false).checkboxradio('refresh');;
	});
});




function cal2db(datetime)
{
	var datepart = datetime.substring(0,10)
	var timepart = datetime.substring(11,16)
	
	var dteSplit = datepart.split("/");
	var yr = dteSplit[2]; //special yr format, take last 2 digits
	var month = dteSplit[0];
	var day = dteSplit[1];
	
	var datetime2 = yr + "-" + month + "-" + day + " " + timepart + ":00";
	return datetime2;
	
}

function db2cal(datetime)
{
	var datepart = datetime.substring(0,10)
	var timepart = datetime.substring(11,16)
	
	var dteSplit = datepart.split("-");
	var yr = dteSplit[0]; //special yr format, take last 2 digits
	var month = dteSplit[1];
	var day = dteSplit[2];
	
	var datetime2 = month + "/" + day + "/" + yr +  " " + timepart;
	return datetime2;
	
}