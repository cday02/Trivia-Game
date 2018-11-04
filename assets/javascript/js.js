// Creating Objects, storing certain variables
var player = {
    isPlaying: false,
    isWaiting: false,
    numberCorrect: 0,
    numberIncorrect: 0,
    wins: 0,
    losses: 0
  }
  
  // Setting up an empty array for questions, the current question, and the status of the game (timer)
  var questionsArray = [];
  var currentQuestion;
  var gameStatus = [];
  
  // timer variables.  timer = variable for javascript timer.  time = variables for actual time.
  var questionTimer;
  var summaryTimer;
  var timeQuestion = 10000;
  var timeSummary = 10000;
  var time = 0;
  var counter;
  
  
  var timeProgress = {
    start: function(){
      counter = setInterval(timeProgress.count,1000);
    },
    stop: function(){
      clearInterval(counter);
      time = 0;
    },
    count: function(){
      time++;
      console.log(time);
    }
  }
  
  $(document).ready(function(){ 
  });
  
  function initialization(){
    player.isPlaying = !player.isPlaying;
    gameStatus = [];
    player.numberCorrect = 0;
    player.numberIncorrect = 0;
    questionsArray = createQuestionArray();
  }
  
  function createQuestionArray(){
    function questionObject(question, answers, correctAnswer, userAnswer, answerExplanation, picture, isCorrect, isTimeUp){
      this.question = question;
      this.answers = answers;
      this.correctAnswer = this.answers[correctAnswer];
      this.userAnswer = this.answers[userAnswer];
      this.answerExplanation = answerExplanation;
      this.picture = picture;
      this.isCorrect = isCorrect;
      this.isTimeUp = isTimeUp;
    }
  
    var question0 = new questionObject(
      /*question:*/ "What is the name of Mario's brother?",
      /*answers:*/ ["Wario", "Luigi", "Waluigi", "Bowser",, null],
      /*correctAnswer:*/ 1,
      /*userAnswer:*/ 4,
      /*answerExplanation:*/ "Mario's brother is named Luigi, who appears along side him in multiple Nintendo games.",
      /*picture:*/ "assets/images/luigi.jpg",
      /*isCorrect:*/ false,
      /*isTimeUp:*/ false);
      
    var question1 = new questionObject(
      /*question:*/ "What is the name of the hero that rescues Zelda?",
      /*answers:*/ ["Ganondorf", "Sonic", "Link", "Mario", null],
      /*correctAnswer:*/ 2,
      /*userAnswer:*/ 4,
      /*answerExplanation:*/ "The name of the hero that rescues Princess Zelda, in the Legend of Zelda franchise, is Link.",
      /*picture:*/ "assets/images/link.jpg",
      /*isCorrect:*/ false,
      /*isTimeUp:*/ false);
  
    var question2 = new questionObject(
      /*question:*/ "'What is the name of Sonic's sidekick?",
      /*answers:*/ ["Knuckles", "Yoshi", "Kirby", "Tails", null],
      /*correctAnswer:*/ 3,
      /*userAnswer:*/ 4,
      /*answerExplanation:*/ "The name of Sonic's Sidekick, in the Sonic series, is Tails.",
      /*picture:*/ "assets/images/tails.jpg",
      /*isCorrect:*/ false,
      /*isTimeUp:*/ false);
  
    var question3 = new questionObject(
      /*question:*/ "What is the name of the series that features E. Honda, Dhalsim, and Chun Li.?",
      /*answers:*/ ["Tekken", "Marvel vs. Capcom", "Soul Caliber", "Street Fighter", null],
      /*correctAnswer:*/ 3,
      /*userAnswer:*/ 4,
      /*answerExplanation:*/ "The name of the series that features E. Honda, Dhalsim, and Chun Li. is Street Fighter",
      /*picture:*/ "assets/images/streetfighter.jpg",
      /*isCorrect:*/ false,
      /*isTimeUp:*/ false);
  
    var question4 = new questionObject(
      /*question:*/ "What is the gaming console created by Microsoft called?",
      /*answers:*/ ["Playstation", "Switch", "Gamecube", "XBOX", null],
      /*correctAnswer:*/ 3,
      /*userAnswer:*/ 4,
      /*answerExplanation:*/ "The name of the game console created by Microsoft is called the XBOX.",
      /*picture:*/ "assets/images/xbox.jpg",
      /*isCorrect:*/ false,
      /*isTimeUp:*/ false);
  
    var question5 = new questionObject(
      /*question:*/ "Black Ops is the sub-title of which game franchise?",
      /*answers:*/ ["Halo", "Counter-Strike", "007", "Call of Duty", null],
      /*correctAnswer:*/ 3,
      /*userAnswer:*/ 4,
      /*answerExplanation:*/ "Black ops is the sub-title of the game series Call of Duty.",
      /*picture:*/ "assets/images/blackops.png",
      /*isCorrect:*/ false,
      /*isTimeUp:*/ false);
  
    var question6 = new questionObject(
      /*question:*/ "The Covenant is a factional military alien race in this game.?",
      /*answers:*/ ["Metal Gear Solid", "Call of Duty", "Destiny", "Halo", null],
      /*correctAnswer:*/ 3,
      /*userAnswer:*/ 4,
      /*answerExplanation:*/ "The Covenant is a factional military alien race in the Halo game series.",
      /*picture:*/ "assets/images/halo.jpg",
      /*isCorrect:*/ false,
      /*isTimeUp:*/ false);
  
    var question7 = new questionObject(
      /*question:*/ "What is the name of the classic puzzle game with a russian theme and music?",
      /*answers:*/ ["Tetris", "Block out", "Dig Dug", "Space Invaders", null],
      /*correctAnswer:*/ 0,
      /*userAnswer:*/ 4,
      /*answerExplanation:*/ "Tetris is a classic puzzle game that usually features a Russian theme and music",
      /*picture:*/ "assets/images/tetris.jpg",
      /*isCorrect:*/ false,
      /*isTimeUp:*/ false);
  
    var question8 = new questionObject(
      /*question:*/ "What is the name of the game series that is also known as Pocket Monsters in Japan?",
      /*answers:*/ ["Digimon", "Pokemon", "Gundam", "Fifa 2000", null],
      /*correctAnswer:*/ 1,
      /*userAnswer:*/ 4,
      /*answerExplanation:*/ "Pokemon is also known as Pocket Monsters in Japan.",
      /*picture:*/ "assets/images/pokemon.jpg",
      /*isCorrect:*/ false,
      /*isTimeUp:*/ false);
  
    var question9 = new questionObject(
      /*question:*/ "What is the name of the FPS (First person shooter) created by Blizzard that features characters such as Zarya, Soldier: 76 and Bastion.?",
      /*answers:*/ ["Overwatch", "Counter-Strike", "Diablo", "Destiny", null],
      /*correctAnswer:*/ 0,
      /*userAnswer:*/ 4,
      /*answerExplanation:*/ "Overwatch is the name of Blizzard's FPS title, which features many heroes, including Zarya, Solider: 76, and Bastion .",
      /*picture:*/ "assets/images/overwatch.jpg",
      /*isCorrect:*/ false,
      /*isTimeUp:*/ false);
      
  
    return questionsArray = [question0, question1, question2, question3, question4, question5, question6, question7, question8, question9];
    // return questionsArray = [question0];
  }
  
  function startQuestionTimer(){
    timeProgress.stop();
    questionTimer = setTimeout(questionTimeRanOut,timeQuestion);
    timeProgress.start(); 
  }
  
  function startSummaryTimer(){
    timeProgress.stop();
    player.isWaiting = !player.isWaiting;
    if (questionsArray.length > 0){
     summaryTimer = setTimeout(setQuestionAnswers,timeSummary);
    }
    else{
      summaryTimer = setTimeout(endGame,timeSummary);
    }
    timeProgress.start();
  }
  
  function stopQuestionTimer(){
    clearTimeout(questionTimer);
  }
  
  function stopSummaryTimer(){
    clearTimeout(summaryTimer);
  }
  
  function questionTimeRanOut(){
    
    currentQuestion.isTimeUp = !currentQuestion.isTimeUp;
    console.log("time ran out!" + currentQuestion.isTimeUp + currentQuestion.userAnswer)
    setUserSelection();
  }
  
  function setQuestionAnswers(){
    removeQuestionAnswers();
    if (player.isWaiting){
      player.isWaiting = !player.isWaiting;
    }
    selectRandomQuestion();
    displayQuestion();
    displayAnswers();
    startQuestionTimer();
  }
  
  
  function selectRandomQuestion(){
    var randomIndex = Math.floor(Math.random()*questionsArray.length);
    currentQuestion = questionsArray[randomIndex];
  
    // remove question from array.  
    questionsArray.splice(randomIndex,1);
  }
  
  
  function displayQuestion(){
  var mainQuestionColumn = $("<div></div>");
    mainQuestionColumn.attr({
      class: "col-md-12",
      id: "questionColumn"
    });
  
    var questionRowDiv = $("<div></div>");
    questionRowDiv.attr({
      class:"row",
      id:"individualQuestionRow"
    });
  
    var firstColumnDiv = $("<div></div>");
    firstColumnDiv.attr({
      class: "col-md-3 question"
    });
  
    var questionColumnDiv = $("<div></div>");
    questionColumnDiv.attr({
      class: "col-md-6 question",
      id: "individualQuestionColumn"
    });
  
    var questionText = $("<h2></h2>");
    questionText.text(currentQuestion.question);
  
    questionText.appendTo(questionColumnDiv);
    firstColumnDiv.appendTo(questionRowDiv);
    questionColumnDiv.appendTo(questionRowDiv);
    questionRowDiv.appendTo(mainQuestionColumn);
    mainQuestionColumn.appendTo("#questionRow");
  }
  
  function displayAnswers(){
    var mainAnswersColumn = $("<div></div>");
    mainAnswersColumn.attr({
      class: "col-md-12",
      id: "answersColumn"
    });
  
    for (i = 0; i < currentQuestion.answers.length - 1; i++){
      var answersRowDiv = $("<div></div>");
      answersRowDiv.attr({
        class: "row",
        id: "answerRow" + i
      })
  
      var firstColumnDiv = $("<div></div>");
      firstColumnDiv.attr({
        class: "col-md-3",
        id: "firstColumn" + i
      });
  
      var secondColumnDiv = $("<div></div>");
      secondColumnDiv.attr({
        class: "col-md-3",
        id: "secondColumn" + i
      });
      
      var answersColumnDiv = $("<div></div>");
      answersColumnDiv.attr({
        class: "col-md-6 answers",
        id: "answer" + i
      });
      var answersText = $("<h2></h2>"); 
      // answersText.text(currentQuestion.answers[i]);
  
      var answerButton = $("<button></button>");
      answerButton.attr({
        class: "answersButtons",
        id: "answerButton" + i
      })
      answerButton.text(currentQuestion.answers[i]);
  
      // answersText.appendTo(answersColumnDiv);
      answerButton.appendTo(answersColumnDiv);
      firstColumnDiv.appendTo(answersRowDiv);
      answersColumnDiv.appendTo(answersRowDiv);
      secondColumnDiv.appendTo(answersRowDiv);
      answersRowDiv.appendTo(mainAnswersColumn);
      mainAnswersColumn.appendTo("#answersRow");
    };
  
    $('html, body').animate({
        scrollTop: $("#answerButton3").offset().top
  }, 2000);
  }
  
  function userSelection(i){
    currentQuestion.userAnswer = currentQuestion.answers[i];
  }
  
  function checkAnswer(){
    if (currentQuestion.correctAnswer == currentQuestion.userAnswer){
      currentQuestion.isCorrect = !currentQuestion.isCorrect;
      player.numberCorrect++;
    }
    else{
      player.numberIncorrect++;
    }
    console.log(currentQuestion);
  }
  
  function collectGameStatus(){
    gameStatus.push(currentQuestion);
    console.table(gameStatus);
  }
  
  function setUserSelection(){
    checkAnswer();
    collectGameStatus();
    stopQuestionTimer();
    summarizeQuesiton();
    displaySummaryQuestion();
    startSummaryTimer(); 
  }
  
  function summarizeQuesiton(){
    if (currentQuestion.isCorrect){
      $(".modal-title").text("Good Job! You answered correctly!");
    } 
    else if(!currentQuestion.isCorrect && !currentQuestion.isTimeUp){
      $(".modal-title").text("Wrong answer... The correct answer is:")
    }
    else if(currentQuestion.isTimeUp){
      $(".modal-title").text("Time's Up!")
    }
    $("#correctAnswer").text(currentQuestion.correctAnswer);
    $(".picture").attr("src",currentQuestion.picture);
    $("#answerExplanation").text(currentQuestion.answerExplanation);
  }
  
  function displaySummaryQuestion(){
    $("#myModal").modal("show");  
    // $("#startGameButton").show();
  
  }
  
  function displayFinalSummary(){
    $("#startGameButton").show();
    $("#pressStartText").show();
    var summaryColumn = $("<div></div>");
    summaryColumn.addClass("col-md-12");
    summaryColumn.attr("id", "summaryColumn");
  
    var questionsCorrectRow = $("<div></div>");
    questionsCorrectRow.addClass("col-md-12");
    questionsCorrectRow.attr("id", "questionsCorrectRow");
  
    var questionsCorrectColumn = $("<div></div>");
    questionsCorrectColumn.addClass("col-md-12");
    questionsCorrectColumn.attr("id", "questionsCorrect");
    questionsCorrectText = $("<h2></h2>");
  
    questionsCorrectText.text("Number of questions correct: " + player.numberCorrect);
  
    questionsCorrectText.appendTo(questionsCorrectColumn);
    questionsCorrectColumn.appendTo(questionsCorrectRow);
    questionsCorrectRow.appendTo(summaryColumn);
  
    var questionsIncorrectRow = $("<div></div>");
    questionsIncorrectRow.addClass("col-md-12");
    questionsIncorrectRow.attr("id", "questionsIncorrectRow");
  
    var questionsIncorrectColumn = $("<div></div>");
    questionsIncorrectColumn.addClass("col-md-12");
    questionsIncorrectColumn.attr("id", "questionsIncorrect");
    questionsIncorrectText = $("<h2></h2>");
  
    questionsIncorrectText.text("Number of questions incorrect: " + player.numberIncorrect);
  
    questionsIncorrectText.appendTo(questionsIncorrectColumn);
    questionsIncorrectColumn.appendTo(questionsIncorrectRow);
    questionsIncorrectRow.appendTo(summaryColumn);
    summaryColumn.appendTo("#summaryRow");
  }
  
  function endGame(){
      removeQuestionAnswers();
      displayFinalSummary();
      console.log("game is over");
      console.table(gameStatus);
      player.isPlaying = !player.isPlaying;
  }
  
  
  function removeQuestionAnswers(){
    $("#myModal").modal("hide");
    $("#questionColumn").remove();
    $("#answersColumn").remove();
  }
  
  $(document).on("click","#startGameButton", function(){
    $("#summaryColumn").remove();
    initialization();
    setQuestionAnswers();
    startQuestionTimer();
    $("#startGameButton").hide();
    $("#pressStartText").hide();
  });
  
  $(document).on("click", ".answersButtons", function(){
    if (!player.isWaiting && player.isPlaying){
      console.log($(this).attr("id"));
      var selectedAnswer = $(this).attr("id");
      selectedAnswer = parseInt(selectedAnswer.charAt(12));
      userSelection(selectedAnswer);
      setUserSelection();
      console.log(selectedAnswer);
    }
  });