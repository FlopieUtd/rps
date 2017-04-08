var computerChoice;
var userChoice;

// GET COMPUTER CHOICE

var getComputerChoice = function () {
	var randomNumber = Math.round(Math.random()*2)
	if (randomNumber === 0) {
			computerChoice = "rock";
		} else if (randomNumber === 1) {
			computerChoice = "paper";
		} else {
			computerChoice = "scissors";
		}
	}

getComputerChoice();

// GET USER CHOICE

var pickRock = function () {
	userChoice = "rock";
	$(".paper").css("display", "none");
	$(".scissors").css("display", "none");
	decideOutcome();
};

var pickPaper = function () {
	userChoice = "paper";
	$(".rock").css("display", "none");
	$(".scissors").css("display", "none");
	decideOutcome();
};

var pickScissors = function () {
	userChoice = "scissors";
	$(".rock").css("display", "none");
	$(".paper").css("display", "none");
	decideOutcome();
};

// DECIDE OUTCOME

var decideOutcome = function () {
	setTimeout(function(){ 
		$(".title").text("outcome:"); 
	}, 1000);
	setTimeout(function(){ 
		$(".vs").css("display", "inline-block"); 
	}, 2000);
	setTimeout(function(){ 
		$(".computerchoice").addClass("option"); 
		$(".computerchoice").text(computerChoice);
	}, 3000);
	setTimeout(function(){ 
		$(".outcome").css("visibility", "visible");
		if (userChoice === computerChoice) {
			$(".outcome").text("it's a tie!");
		} else if (userChoice === "rock" && computerChoice === "paper") {
			$(".outcome").text("you lose!");
		} else if (userChoice === "rock" && computerChoice === "scissors") {
			$(".outcome").text("you win!");
		} else if (userChoice == "paper" && computerChoice === "rock") {
			$(".outcome").text("you win!");
		} else if (userChoice === "paper" && computerChoice === "scissors") {
			$(".outcome").text("you lose!");
		} else if (userChoice === "scissors" && computerChoice === "rock") {
			$(".outcome").text("you lose!");
		} else if (userChoice === "scissors" && computerChoice === "paper") {
			$(".outcome").text("you win!");	
		}
	}, 4000);
	setTimeout(function(){ 
		location.reload();
	}, 6000);
	
}



