$.fn.validate_html_form = function() {
    
	var theform = $(this).attr('id');
	var returnval=0;
	$('#'+theform+' .required').each(function(index, element) {
		var val;
		if(element.type=='select-one')
		{
			val = element.value;
			//console.log(val);
		}
		else if(element.type=='radio')
		{
			if(!$('input[name='+element.name+']').is(":checked"))
			{
				val = 0;
			}
		}
		else
		{
        	val = $(this).val();
		}
		if(val=='' || val==0)
		{
			$(this).css('border','1px solid red');
			$('#error_'+element.name).text("* Required").css('color','red');
			returnval++; 
		}
		else
		{
			if(element.type=='password')
			{
				if(val.length<6 && $(this).hasClass('pass_length'))
				{
					$(this).css('border','1px solid red');
					$('#error_'+element.name).text("*Password length should be greater than 6").css('color','red');
					returnval++;
				}
				else
				{
					$(this).css('border','1px solid #ddd');			
					$('#error_'+element.name).text("");
				}
			}
			else
			{
				$(this).css('border','1px solid #ddd');			
				$('#error_'+element.name).text("");
			}
		}
    });
	
	$('#'+theform+' .email').each(function(index, element) {
		var x= element.value;
		if(x!='')
		{
			var atpos=x.indexOf("@");
			var dotpos=x.lastIndexOf(".");
			if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
			{
				$(this).css('border','1px solid red');
				 $('#error_'+element.name).text("Invalid e-mail").css('color','red');
				 returnval++;
			}
			else
			{
				$(this).css('border','1px solid #ddd');			
				$('#error_'+element.name).text("");			
			}
		}
		else
		{
			if($(this).hasClass('required'))
			{
			}
			else
			{
				$(this).css('border','1px solid #ddd');			
				$('#error_'+element.name).text("");	
			}
		}
	});
	
	$('#'+theform+' .equals').each(function(index, element) {
		var x= element.value;
		var y = $('#'+theform+' .'+element.name).val();
		if(x!='')
		{
			if(x!=y)
			{
				$(this).css('border','1px solid red');
				$('#error_'+element.name).text("*Password not the same").css('color','red');
				returnval++; 
			}
			else
			{
				$(this).css('border','1px solid #ddd');			
				$('#error_'+element.name).text("");
			}
		}
	});
	if(returnval!=0){
		$("#validation-error").text("* Provide all required fields ").css('color','red','right','13px');		 
		return false;
	}else{
		return true;
	}



};
