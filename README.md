# simple-form-validator
#This is a simple Jquery class for validating a html form before submitting.
To use this library you would need: 
1. Jquery library 
2. Html form with name and id attributes provided
3. For each required field and class required ie class="required" 
4. Then to display erro message add a span with the id="error_{put name of the required filed}"
5. Then add a submit button. 
6. And the following code at the end.
$("#validate").submit(function(){
	return $(this).simple_form_validator();
});

