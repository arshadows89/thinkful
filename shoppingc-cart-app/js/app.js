//$(".textbox box".).val( text )
//use val so it can see the value in textbox
// when enter is pressed take the value and put it into list
// delete what was written in the textbox

//add the $(document).ready
// which means java wont work till page is fully loaded and ready
$(document).ready(function() {
	//if delete button is clicked
	//$('input:checkbox:checked').val();
	//got value from checkboxed boxs... we want to delete those

	$('.textbox > input')
	//keyup(function() {       //so the on enter function
		var value = $ ( this ).val();
		$( "put it in this location ").text( value );
		})
}