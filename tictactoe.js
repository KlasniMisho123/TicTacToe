$(".first-player").on("click",function(){
  var playerX = prompt("Enter X Player Name: ");
  $(".first-player").html("<h3>" + playerX + "</h3>");
})

$(".second-player").on("click",function(){
  var playerO = prompt("Enter O Player Name: ");
  $(".second-player").html("<h3>" + playerO + "</h3>");
})

var xWins = 0;
var draws = 0;
var oWins = 0;
var isXTurn = true;
var victory = null; 

handleClick();

function handleClick() {
  var moves = 0;

  $(".ttt-square").on("click", function () {
    if (!victory) {
      if (isXTurn) {
        $(this).removeClass("o-class")
        $(this).html("X");
        $(this).addClass("x-class");
        checkAnswer($(this).text());
      } else {
        $(this).removeClass("x-class")
        $(this).html("O");
        $(this).addClass("o-class");
        checkAnswer($(this).text());
      }
      isXTurn = !isXTurn;

      moves++;

      if (moves === 9 && !victory) {
        handleDraw();
      }
    }
  });
}

function handleDraw() {
  draws++;
  $(".player-draw").html(draws);
  $(".result-text").html("<h3>It's a Draw!</h3>");
  $(".ttt-square").off("click");
}


function checkVictory(array) {
  if (array[0] == array[1] && array[1] == array[2]) {
    victory = array[0];
    console.log("Victory: " + victory);
    if (victory == "X") {
      xWins ++
      $(".first-player-win").html(xWins)
      $(".result-text").html("<h3>"+playerX + " Wins!</h3>")
    } 
    else if(victory == "O") {
      oWins ++
      $(".second-player-win").html(oWins)
      $(".result-text").html("<h3>"+playerO + " Wins!</h3")
    }
  }
}

function checkDiagonalVictory() {
  if ($(".11").text() == $(".22").text() && $(".22").text() == $(".33").text() && $(".22").text() !== "") {
    victory = $(".22").text();
    handleVictory();
  }

  if ($(".13").text() == $(".22").text() && $(".22").text() == $(".31").text() && $(".22").text() !== "") {
    victory = $(".22").text();
    handleVictory();
  }
}

function handleVictory() {
  if (victory == "X") {
    xWins++;
    $(".first-player-win").html(xWins);
    $(".result-text").html("<h3>" + playerX + " Wins!</h3>");
  } else if (victory == "O") {
    oWins++;
    $(".second-player-win").html(oWins);
    $(".result-text").html("<h3>" + playerO + " Wins!</h3");
  }

  $(".ttt-square").off("click");
}



function checkAnswer(text) {
  var array1 = [];
  var array2 = [];
  var array3 = [];
  var array1C = [];
  var array2C = [];
  var array3C = [];

  for (var i = 1; i <= 3; i++) {
    array1.push($(".1" + i).text());
    array2.push($(".2" + i).text());
    array3.push($(".3" + i).text());
    array1C.push($("." + i + "1").text());
    array2C.push($("." + i + "2").text());
    array3C.push($("." + i + "3").text());
  }

  checkVictory(array1);
  checkVictory(array2);
  checkVictory(array3);
  checkVictory(array1C);
  checkVictory(array2C);
  checkVictory(array3C);

  checkDiagonalVictory();
}

$(".play-again-btn").on("click", function () {
  victory = null;

  var array1 = [];
  var array2 = [];
  var array3 = [];
  var array1C = [];
  var array2C = [];
  var array3C = [];

  for (var i = 1; i <= 3; i++) {
    $(".1" + i).text("1" + i);
    $(".2" + i).text("2" + i);
    $(".3" + i).text("3" + i);
    $(".1" + i).removeClass("x-class o-class");
    $(".2" + i).removeClass("x-class o-class");
    $(".3" + i).removeClass("x-class o-class");
  }

  $(".ttt-square").off("click");

  handleClick();
});

$(".reset-btn").on("click", function () {
  var xWins = "--";
  var draws = "--";
  var oWins = "--"; 
  $(".stat-grid").html("--")
});


