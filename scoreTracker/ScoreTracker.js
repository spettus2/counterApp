//increment score with buttons
//start by selecting the buttons(pulling them into our js by their id's)
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
//select the input box in html
var inputNum = document.querySelector("input");
//change the p element to show target score
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

//Action for pplayer ones counter
p1Button.addEventListener("click", function(){
//	check if the game is over
	if(!gameOver){
		p1Score++;
	if(p1Score === winningScore){
		//change color for the winner
		p1Display.classList.add("winner");
	gameOver = true;	
	}
//		change the html text upon user click
		p1Display.textContent = p1Score;
		}
	
	
});

//action for player 2 counter
p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
	
	
});

//action for the reset button
resetButton.addEventListener("click", function(){
reset();
	
});

//function to reset everything
function reset(){
//	set both scores back to 0

	p1Score = 0;
	p2Score = 0;
//	reset the html display scores
	p1Display.textContent = 0;
	p2Display.textContent =0;
//	reset the class winner
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	//set gameOver back to false
	gameOver = false;
}
	

//change event listener to listen for the changed number in html inout box
inputNum.addEventListener("change", function(){

	winningScoreDisplay.textContent = this.value;
	//	****have to make sure the new value is a Number and not a string (ex:Number.)*****
//	change the winning score in the backend
	winningScore = Number(this.value);
	reset();
	
	
});