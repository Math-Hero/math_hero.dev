(function () {

		
	var lives = 3; //User starts with 3 lives


	//This function specifies how the timer runs and feeds in the mathProblem function to run every second
	function startTimer(duration, display) { 
	    var timer = duration, minutes, seconds;
	    setInterval(function () {
	        minutes = parseInt(timer / 60, 10);
	        seconds = parseInt(timer % 60, 10);

	        minutes = minutes < 10 ? "0" + minutes : minutes;
	        seconds = seconds < 10 ? "0" + seconds : seconds;

	        display.textContent = minutes + ":" + seconds;

	        if (--timer < 0) {
	            timer = duration;
	        } mathProblem();
	    }, 1000);
	    return timer;
	}

	//This function specifies the timer start time and feeds it into the html 
	function gameTimer() {
		console.log("Game Timer started"); 
	    var fiveMinutes = 60 * 5,
	        display = document.querySelector('#time');
	    startTimer(fiveMinutes, display);
	    console.log(startTimer);

	};


	//This function randomizes a number between 1 and 100 in order to randomly invoke a pop-up
	function mathProblem(){
		console.log("Math function started");
		var counter = Math.floor((Math.random() * 100) + 1);//Randomizes the number
		console.log(counter);
		if (counter % 7 == 0){ //Evaluates whether the number is divisible by 4
			var question = prompt("What is 2 + 2?");//Just a placeholder for the pop up modal with math question
			var answer = 4;
			console.log("Counter worked");
			if (question != answer){
				alert("Wrong!");
				lives--; //If answer is wrong, Player is deducted a life
				mathProblem();
			} else {
				mathProblem();
			}
		} 
		
	}

	
			

	$(document).ready(function(){
		gameTimer(); //Starts the timer and counter functions			
	

	});
})();