/* Default values for all settings (break and session length, and clock minutes/seconds) */
var defaultBreakLength = 5;
var defaultSessionLength = 25;
var defaultMinutes = 25;
var defaultSeconds = 0;
var secondsResetValue = 59;
var breakFlag = 0;
var timeout = 0;

document.getElementById("breakButtonMinus").disabled = true;
document.getElementById("breakButtonMinus").style.color = "grey";
document.getElementById("breakButtonPlus").disabled = true;
document.getElementById("breakButtonPlus").style.color = "grey";

var breakLengthMinutes = document.getElementById("breakMinutes").value;
var clockMinutes = document.getElementById("minutes").value;
var clockSeconds = document.getElementById("seconds").value;
var secondsCountedDown;
var ding = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1321144/Airplane-ding-sound.mp3");

function startTimer()
{	
	if(breakFlag == 0)
	{
		updateSessionMessage(1);
	}
	else
	{
		updateSessionMessage(2);
	}

	toggleLengthButtons();
	
  	secondsCountedDown = setInterval("countdown()", 1000);
}

function stopTimer()
{
	updateSessionMessage(5);
	clearInterval(secondsCountedDown);
}

/* Manages the countdown of the session timer */
function countdown()
{	
  if(clockSeconds == -1)
  {
    clockSeconds = secondsResetValue;
	clockMinutes--;
	updateMinutes();
  }
	
	updateSeconds();

	if(clockMinutes == 0 &&	clockSeconds == 0 && breakFlag == 0)
	{
		breakFlag = 1; /* Take a break; session is over */
		ding.play();

		updateSessionMessage(2);

		toggleLengthButtons();

		clockMinutes = breakLengthMinutes;
	}

	if(clockMinutes == 0 &&	clockSeconds == 0 && breakFlag == 1)
	{
		breakFlag = 0; /* Break is over; new session begins */
		ding.play();

		updateSessionMessage(1);

		toggleLengthButtons();

		clockMinutes = defaultSessionLength;
	}
	
	clockSeconds--;
	
} /* End of countdown function */

/* Increments the session length minutes by one minute
	 for each click of the "+" button; also changes the
	 minutes on the clock with the same value */
function incrementSessionMinutes()
{
	updateSessionMessage(3);
	
	clearInterval(secondsCountedDown);
	
	clockSeconds = defaultSeconds;
	updateSeconds();
	
	clockMinutes = ++document.getElementById("sessionMinutes").value;
	updateMinutes();
} /* End of incrementSessionMinutes function */

/* Decrements the session length minutes by one minute
	 for each click of the "-" button; also changes the
	 minutes on the clock with the same value */
function decrementSessionMinutes()
{
	updateSessionMessage(3);
	
	clearInterval(secondsCountedDown);
	
	clockSeconds = defaultSeconds;
	updateSeconds();
	
	clockMinutes = --document.getElementById("sessionMinutes").value;
	updateMinutes();
	
	if(clockMinutes == 0)
	{
		clockMinutes = 1;
		document.getElementById("sessionMinutes").value = clockMinutes;
		updateMinutes();
	}
} /* End of decrementSessionMinutes function */

function incrementBreakMinutes()
{
	updateSessionMessage(4);
	
	clearInterval(secondsCountedDown);
	
	clockSeconds = defaultSeconds;
	updateSeconds();
	
	clockMinutes = ++document.getElementById("breakMinutes").value;
	updateMinutes();
} /* End of incrementBreakMinutes function */

function decrementBreakMinutes()
{
	updateSessionMessage(4);
	
	clearInterval(secondsCountedDown);
	
	clockSeconds = defaultSeconds;
	updateSeconds();
	
	clockMinutes = --document.getElementById("breakMinutes").value;
	updateMinutes();
	
	if(clockMinutes == 0)
	{
		clockMinutes = 1;
		document.getElementById("breakMinutes").value =	clockMinutes;
		updateMinutes();
	}
} /* End of decrementMinutes function */

function updateSeconds()
{
	document.getElementById("seconds").value = clockSeconds;
}

function updateMinutes()
{
	document.getElementById("minutes").value = clockMinutes;
}

/* Updates the message displayed according to what the
	 user or the clock is currently doing */
function updateSessionMessage(messageCode)
{
	switch(messageCode)
	{
		case 0:
			document.getElementById("sessionMessage").innerHTML = "Start your session:";
			break;
		case 1:
			document.getElementById("sessionMessage").innerHTML = "New session in progress:";
			break;
		case 2:
			document.getElementById("sessionMessage").innerHTML = "Break in progress:";
			break;
		case 3:
			document.getElementById("sessionMessage").innerHTML = "Changing session length:";
			break;
		case 4:
			document.getElementById("sessionMessage").innerHTML = "Changing break time:";
			break;
		case 5:
			document.getElementById("sessionMessage").innerHTML = "Clock paused";
	}
} /* End of updateSessionMessage code */

/* Toggles the active status of the break and session length 
	 buttons and changes their color to grey if they are disabled */
function toggleLengthButtons()
{
	if(breakFlag == 0)
	{
		document.getElementById("breakButtonMinus").disabled = true;
		document.getElementById("breakButtonMinus").style.color = "grey";
		
		document.getElementById("breakButtonPlus").disabled = true;
		document.getElementById("breakButtonPlus").style.color = "grey";
		
		document.getElementById("sessionButtonMinus").disabled = false;
		document.getElementById("sessionButtonMinus").style.color = "white";
		
		document.getElementById("sessionButtonPlus").disabled = false;
		document.getElementById("sessionButtonPlus").style.color = "white";
	}
	else
	{
		document.getElementById("breakButtonMinus").disabled = false;
		document.getElementById("breakButtonMinus").style.color = "white";
		
		document.getElementById("breakButtonPlus").disabled = false;
		document.getElementById("breakButtonPlus").style.color = "white";
		
		document.getElementById("sessionButtonMinus").disabled = true;
		document.getElementById("sessionButtonMinus").style.color = "grey";
		
		document.getElementById("sessionButtonPlus").disabled = true;
		document.getElementById("sessionButtonPlus").style.color = "grey";
	}
} /* End of toggleLengthButtons function */
