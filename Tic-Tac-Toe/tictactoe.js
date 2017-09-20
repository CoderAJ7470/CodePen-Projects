let checkBoxX = "";
let checkBoxO = "";
let playerSymbol = "";
let computerSymbol = "";
let playerCellColor = "";
let computerCellColor = "";
let playerSlotNumber = "";
let computerSlotNumber = "";
let playerScore = 0;
let computerScore = 0;
let playerCell = "";

$("#playerScore").html("Your score: " + playerScore);
$("#computerScore").html("&nbsp;Computer score: " + computerScore);

let staticArray = ["#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight", "#nine"];

let slotArray = ["#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight", "#nine"];

$(function(){
  
  checkBoxX = $("#checkBoxX");
  checkBoxX.change(function(event){
    let boxX = event.target;
    if(boxX.checked){
      playerSymbol = "X";
      computerSymbol = "O";
      checkBoxX.attr("disabled", true);
      $("#checkBoxO").attr("disabled", true);
      runGame();
    }
  });
  
  checkBoxO = $("#checkBoxO");
  checkBoxO.change(function(event){
    let boxO = event.target;
    if(boxO.checked){
      playerSymbol = "O";
      computerSymbol = "X";
      checkBoxO.attr("disabled", true);
      $("#checkBoxX").attr("disabled", true);
      runGame();
    }
  });
  
  function runGame()
  {
    setCellColor();
    $("table").on("click", "td", function(){
      playerCell = $(this).attr('id');
      $("#" + playerCell).html(playerSymbol);
      $("#" + playerCell).css("color", playerCellColor);
      $("#" + playerCell).prop("disabled", true);
      slotArray.splice(slotArray.indexOf("#" + playerCell), 1);
      if(thisIsAWinOrDraw()){
        resetSlotArray();
        setTimeout(resetGameBoard, 1000);
        $("#playerScore").html("Your score: " + playerScore);
        return;
      }
      var randomNum = Math.floor(Math.random() * slotArray.length);
      computerSlotNumber = slotArray[randomNum];
      $(computerSlotNumber).html(computerSymbol);
      $(computerSlotNumber).css("color", computerCellColor);
      $(computerSlotNumber).prop("disabled", true);
      slotArray.splice(slotArray.indexOf(computerSlotNumber), 1);
      if(thisIsAWinOrDraw()){
        resetSlotArray();
        setTimeout(resetGameBoard, 1000);
        $("#computerScore").html(" Computer score: " + computerScore);
        return;
      }
    });
  }
  
  function setCellColor()
  {
    if(playerSymbol == "X"){
      playerCellColor = "#00FF00";
      computerCellColor = "red";
    }
    else{
      playerCellColor = "red";
      computerCellColor = "#00FF00";
    } 
  }
  
  function thisIsAWinOrDraw()
  {
    var one = $("#one").html();
    var two = $("#two").html();
    var three = $("#three").html();
    var four = $("#four").html();
    var five = $("#five").html();
    var six = $("#six").html();
    var seven = $("#seven").html();
    var eight = $("#eight").html();
    var nine = $("#nine").html();
    
    if(one === playerSymbol && two === playerSymbol && three === playerSymbol){
      playerScore++;
      return true;
    }
    else if(four === playerSymbol && five === playerSymbol && six === playerSymbol){
      playerScore++;
      return true;
    }
    else if(seven === playerSymbol && eight === playerSymbol && nine === playerSymbol){
      playerScore++;
      return true;
    }
    else if(one === playerSymbol && four === playerSymbol && seven === playerSymbol){
      playerScore++;
      return true;
    }
    else if(two === playerSymbol && five === playerSymbol && eight === playerSymbol){
      playerScore++;
      return true;
    }
    else if(three === playerSymbol && six === playerSymbol && nine === playerSymbol){
      playerScore++;
      return true;
    }
    else if(one === playerSymbol && five === playerSymbol && nine === playerSymbol){
      playerScore++;
      return true;
    }
    else if(three === playerSymbol && five === playerSymbol && seven === playerSymbol){
      playerScore++;
      return true;
    }
    else if(one === computerSymbol && two === computerSymbol && three === computerSymbol){
      computerScore++;
      return true;
    }
    else if(four === computerSymbol && five === computerSymbol && six === computerSymbol){
      computerScore++;
      return true;
    }
    else if(seven === computerSymbol && eight === computerSymbol && nine === computerSymbol){
      computerScore++;
      return true;
    }
    else if(one === computerSymbol && four === computerSymbol && seven === computerSymbol){
      computerScore++;
      return true;
    }
    else if(two === computerSymbol && five === computerSymbol && eight === computerSymbol){
      computerScore++;
      return true;
    }
    else if(three === computerSymbol && six === computerSymbol && nine === computerSymbol){
      computerScore++;
      return true;
    }
    else if(one === computerSymbol && five === computerSymbol && nine === computerSymbol){
      computerScore++;
      return true;
    }
    else if(three === computerSymbol && five === computerSymbol && seven === computerSymbol){
      computerScore++;
      return true;
    }
    
    if($("#one").html() && $("#two").html() && $("#three").html() &&
       $("#four").html() && $("#five").html() && $("#six").html() &&
       $("#seven").html() && $("#eight").html() && $("#nine").html()){
       return true;
    }
  } // End of thisIsAWin
  
  function resetGameBoard()
  {
    for(var index = 0; index < staticArray.length; index++){
      $(staticArray[index]).empty();
      $(staticArray[index]).prop("disabled", false);
    }
  }
  
  function resetSlotArray()
  {
    slotArray = ["#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight", "#nine"];
  }
  
});