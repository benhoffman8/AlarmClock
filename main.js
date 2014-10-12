

$(document).ready(function(){
	$( "#submit" ).on("click", reactToClick);

	function reactToClick(){

		console.log( "You submitted!" );

		var userAnswer = $('#time').val()

		console.log(userAnswer)

		setTimeout(function() {
		
			console.log("alarm bitches")


		}, userAnswer);

		var currentTime = userAnswer

		setInterval(function() {

			currentTime = currentTime - 1000;

			console.log(currentTime)

		}, 1000);
	}
});