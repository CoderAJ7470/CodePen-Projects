var inputString = "";

/* Updates the calculator's display when a button on the calculator is clicked.
The operation's inputs are kept track of using the inputString variable */
function updateString(value)
{
   inputString += value;
   document.forms[0].display.value = inputString;
}