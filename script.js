// create all variables needed for the script including start quiz elements, count, and element creators
var startQuizEl = document.querySelector("#startQuiz");
var cardBody = document.querySelector(".card-body");
var counter = 60;
var body = document.body;
var score = 0;
i=0;

//create question, answer and correct answer Arrays
const myQuestions = ["Inside which HTML element do we put the JavaScript?", "How is a function in Javascript created?","Javascript is primarily used for?", "How do we add comments in Javascript?", "If we wanted to calculate the exponent of y to x, How would we type this in Javascript?", "If we are to create a date variable using the first 4 numbers, what do they specify from 0 to 3?"]
const answers = new Array( );
answers [0] = new Array ("<js>","<script>","<scr>","<java>");
answers [1] = new Array ("function myFunction()","function:myFunction()","function.myFunction()","function~myFunction()");
answers [2] = new Array ("Defines the content of a webpage","Specifies the layout and style of a webpage","Set the behaviour of a webpage","Creating a database for a webpage")
answers [3] = new Array ("<!--This is a comment-->","//This is a comment","~!~This is a comment","||This is a comment");
answers [4] = new Array ("y^x","y*x","y?x","y**x");
answers [5] = new Array ("Year, Month, Day, Hour","Year, Day, Month, Hour","Hour, Minute, Second, Millisecond","Day, Month, Year, Hour");

const correctAnswer = ["b","a","c","b","d","a"]

//run Quiz function is as follows
function runQuiz(event){

    //if statement continues the quiz until the counter hits zero
    if (counter>0){

        //Space added to the right hane side for responsiveness, create timer div once timer begins, change the text content on the change of the value
        var newRow = document.createElement("div");
        body.appendChild(newRow);
        newRow.setAttribute("class","row");
        var leftSpace = document.createElement("div");
        newRow.appendChild(leftSpace);
        leftSpace.setAttribute("class", "col-sm-5")
        var bodyTimer = document.createElement("div");
        newRow.appendChild(bodyTimer);
        bodyTimer.setAttribute("class", "col-sm-2 card text-white text-center bg-dark mb-3");
        bodyTimer.setAttribute("style", "margin-top: 20px");
        bodyTimer.textContent = ("Time left: "+counter)

        //timer function
        var interval = setInterval(function() {
            counter--;

            // Code the response of when the timer hits zero or the questions are all answered
            if (counter === 0) {
                    
                clearInterval(interval);
                bodyTimer.textContent = ("Time's up!")
                var finalScore = score+counter;
                counter==-1;
                cardTitle.textContent = "";
                answerContainer.removeChild(answerRow1);
                answerContainer.removeChild(answerRow2);
                answerContainer.removeChild(answerRow3);
                answerContainer.removeChild(answerRow4);
                bodyTimer.textContent = ("Completed! Your Score: "+finalScore);
                console.log(counter);     
                return;

            //once the questions have been answered stop timer
            }else if (i===6){
                return;

            //as long as counter is above zero continue to count down and change the value on the screen
            }else{
                $('#time').text(counter);
                counter.addEventListener("change", bodyTimer.textContent = ("Time left: "+counter));
            }
        
        }, 1000);
        

        //spacing added to the right of the timer for responsiveness
        var rightSpace = document.createElement("div");
        newRow.appendChild(rightSpace);
        rightSpace.setAttribute("class", "col-sm-5")


        // while there are still questions to be answered perform the following commands
        while (i=0, i<6) {

            //set variables for DOM manipulation
            var cardBody = document.querySelector(".card-body");
            var cardText = document.querySelector(".card-text");
            var cardTitle = document.querySelector(".card-title");
            
            //remove the start up messagae
            cardBody.removeChild(cardText);
            cardBody.removeChild(startQuizEl);

            //write the question text to the cardTitle
            cardTitle.textContent = (myQuestions[i]);
            
            //create container for the answers following
            var answerContainer = document.createElement("container");
            cardBody.appendChild(answerContainer);
            answerContainer.setAttribute("class", "text-center");

            //create row for first answer and the button for the answer text itself
            var answerRow1 = document.createElement("div");
            var answer1 = document.createElement("a");
            answerRow1.setAttribute ("class", "row");
            answerRow1.setAttribute ("style", "margin-top: 10px; margin-bottom: 10px");
            answerContainer.appendChild(answerRow1);
            answerRow1.appendChild(answer1);

            //create row for second answer and the button for the answer text itself
            var answerRow2 = document.createElement("div");
            var answer2 = document.createElement("a");
            answerRow2.setAttribute ("class", "row");
            answerRow2.setAttribute ("style", "margin-top: 10px; margin-bottom: 10px");
            answerContainer.appendChild(answerRow2);
            answerRow2.appendChild(answer2);

            //create row for third answer and the button for the answer text itself
            var answerRow3 = document.createElement("div");
            var answer3 = document.createElement("a");
            answerRow3.setAttribute ("class", "row");
            answerRow3.setAttribute ("style", "margin-top: 10px; margin-bottom: 10px");
            answerContainer.appendChild(answerRow3);
            answerRow3.appendChild(answer3);

            //create row for fourth answer and the button for the answer text itself
            var answerRow4 = document.createElement("div");
            var answer4 = document.createElement("a");
            answerRow4.setAttribute ("class", "row");
            answerRow4.setAttribute ("style", "margin-top: 10px; margin-bottom: 10px");
            answerContainer.appendChild(answerRow4);
            answerRow4.appendChild(answer4);

            //set attributes for each answer 1-4
            answer1.setAttribute("id", "btn1");
            answer2.setAttribute("id", "btn2");
            answer3.setAttribute("id", "btn3");
            answer4.setAttribute("id", "btn4");
            answer1.setAttribute("type", "button");
            answer2.setAttribute("type", "button");
            answer3.setAttribute("type", "button");
            answer4.setAttribute("type", "button");
            answer1.setAttribute("class", "btn btn-light btn-sm btn1");
            answer2.setAttribute("class", "btn btn-light btn-sm btn2");
            answer3.setAttribute("class", "btn btn-light btn-sm btn3");
            answer4.setAttribute("class", "btn btn-light btn-sm btn4");
            answer1.textContent = answers[i][0];
            answer2.textContent = answers[i][1];
            answer3.textContent = answers[i][2];
            answer4.textContent = answers[i][3];

            //When the top button is pressed, userAnswer is given a string value of a and compared to the answer array
            btn1.addEventListener("click", function(){
                var userAnswer = "a";
                
                //if they correspond, the user gets 5 points
                if (userAnswer === correctAnswer[i]){
                    score = score+5;
                    i++;
                    console.log("correct")
                    
                    //if the last question has been asked and answered, remove card text and record score
                    if (i===6){
                        var finalScore = score+counter;
                        counter===-100;
                        answerContainer.removeChild(answerRow1);
                        answerContainer.removeChild(answerRow2);
                        answerContainer.removeChild(answerRow3);
                        answerContainer.removeChild(answerRow4);
                        bodyTimer.textContent = ("Completed! Your Score: "+finalScore);
                        console.log(i);

                        console.log("working");
                        cardTitle.textContent = "";
                        var userEntryForm = document.createElement("form");
                        userEntryForm.setAttribute("id", "userEntryForm");
                        userEntryForm.setAttribute("method", "POST");
                        cardBody.appendChild(userEntryForm);
                        var newUser = document.createElement("div");
                        newUser.setAttribute("class", "form group");
                        userEntryForm.appendChild(newUser);
                        var userLabel = document.createElement("label");
                        userLabel.setAttribute("for", "User name input");
                        userLabel.textContent = "Submit your initials to see your score vs your peers!";
                        newUser.appendChild(userLabel);
                        var userInput = document.createElement("input");
                        userInput.setAttribute("type", "text");
                        userInput.setAttribute("class", "form-control");
                        userInput.setAttribute("id", "userInputForm");
                        userInput.setAttribute("name", "userInputForm");
                        userInput.setAttribute("placeholder", "Your initials here");
                        userInput.setAttribute("style", "margin-top: 5px");
                        newUser.appendChild(userInput);
                        var highScoreList = document.createElement("u1");
                        highScoreList.setAttribute("class", "col");
                        highScoreList.setAttribute("id", "highScoreList");
                        answerContainer.appendChild(highScoreList);
                        cardTitle.textContent = "";
                        
                        var highScoreInput = document.querySelector("#userInputForm");
                        var highScoreForm = document.querySelector("#userEntryForm");
                        var highScoreList = document.querySelector("#highScoreList");
                        
                        var highScores = {initials: initials ,score: score};
                        j=0;
                        
                        init();
                        
                        function renderHighScores(){
                            highScoreList.innerHTML = "";
                        
                            for (var j = 0; j < highscores.length; j++) {
                                var  writeInitials = highScores.initials[j] 
                                var  writeScore = highScores.score[j] 
                            
                                var li = document.createElement("li");
                                li.textContent = writeInitials+": "+ writeScore;
                                li.setAttribute("data-index", j);
                        
                                highScoreList.appendChild(li);
                              }
                            }
                        
                        
                        function init() {
                        
                            var storedHighScores = JSON.parse(localStorage.getItem("High Scores"));
                        
                            if (storedHighScores !== null) {
                              highScores = storedHighScores;
                            }
                        
                            renderHighScores();
                        }
                        
                        function storeHighScores() {
                        
                            localStorage.setItem("High Scores", JSON.stringify(highScores));
                        
                        }
                        
                        userEntryForm.addEventListener("submit", function (event) {
                            event.preventDefault();
                        
                            highScores.initials = userInputForm.value.trim();
                            highScores.score = finalScore;
                        
                            // Return from function early if submitted todoText is blank
                            if (userInitials === "") {
                                return;
                            }
                        
                            storeHighScores();
                            renderHighScores();
                        });
                        

                    }

                    //if there are more questions left, write them to the DOM
                    cardTitle.textContent = (myQuestions[i]);
                    answer1.textContent = answers[i][0];
                    answer2.textContent = answers[i][1];
                    answer3.textContent = answers[i][2];
                    answer4.textContent = answers[i][3];
                    console.log(i);
                    userAnswer = "e"

                //If they incorrectly answer the question, subtract 10 from the time 
                } else {
                    counter = counter - 10;
                    i++;
                    console.log("incorrect");

                    //if the last question has been asked and answered, remove card text and record score
                    if (i===6){
                        var finalScore = score+counter;
                        counter==-1;
                        answerContainer.removeChild(answerRow1);
                        answerContainer.removeChild(answerRow2);
                        answerContainer.removeChild(answerRow3);
                        answerContainer.removeChild(answerRow4);
                        bodyTimer.textContent = ("Completed! Your Score: "+finalScore);
                        console.log(i);
                        var x=1;
                        console.log(x);
                        return;

                    }

                    //if there are more questions left, write them to the DOM
                    cardTitle.textContent = (myQuestions[i]);
                    answer1.textContent = answers[i][0];
                    answer2.textContent = answers[i][1];
                    answer3.textContent = answers[i][2];
                    answer4.textContent = answers[i][3];
                    console.log(i);
                    userAnswer = "e"
                }
                }); 

            //When the second from the top button is pressed, userAnswer is given a string value of a and compared to the answer array
            btn2.addEventListener("click", function(){
                var userAnswer = "b";

                //if they correspond, the user gets 5 points
                if (userAnswer === correctAnswer[i]){
                    score = score+5;
                    i++;
                    console.log("correct");

                     //if the last question has been asked and answered, remove card text and record score
                    if (i===6){
                        var finalScore = score+counter;
                        counter==-1;
                        answerContainer.removeChild(answerRow1);
                        answerContainer.removeChild(answerRow2);
                        answerContainer.removeChild(answerRow3);
                        answerContainer.removeChild(answerRow4);
                        bodyTimer.textContent = ("Completed! Your Score: "+finalScore);
                        console.log(i);
                        var x=1;
                        console.log(x);
                        return;
                    }

                    //if there are more questions left, write them to the DOM
                    cardTitle.textContent = (myQuestions[i]);
                    answer1.textContent = answers[i][0];
                    answer2.textContent = answers[i][1];
                    answer3.textContent = answers[i][2];
                    answer4.textContent = answers[i][3];
                    console.log(i);
                    userAnswer = "e"
                    
                //If they incorrectly answer the question, subtract 10 from the time     
                }else{
                    counter = counter - 10;
                    i++;
                    console.log("incorrect");

                    //if the last question has been asked and answered, remove card text and record score
                    if (i===6){
                        var finalScore = score+counter;
                        counter==-1;
                        answerContainer.removeChild(answerRow1);
                        answerContainer.removeChild(answerRow2);
                        answerContainer.removeChild(answerRow3);
                        answerContainer.removeChild(answerRow4);
                        bodyTimer.textContent = ("Completed! Your Score: "+finalScore);
                        console.log(i);
                        var x=1;
                        console.log(x);
                        return;
                    }

                    //if there are more questions left, write them to the DOM
                    cardTitle.textContent = (myQuestions[i]);
                    answer1.textContent = answers[i][0];
                    answer2.textContent = answers[i][1];
                    answer3.textContent = answers[i][2];
                    answer4.textContent = answers[i][3];
                    console.log(i);
                    userAnswer = "e"
                }
                }); 

            //When the second from the bottom button is pressed, userAnswer is given a string value of a and compared to the answer array
            btn3.addEventListener("click", function(){
                var userAnswer = "c";
                if (userAnswer === correctAnswer[i]){
                    score = score+5;
                    i++;
                    console.log("correct");

                    //if the last question has been asked and answered, remove card text and record score
                    if (i===6){
                        var finalScore = score+counter;
                        counter==-1;
                        answerContainer.removeChild(answerRow1);
                        answerContainer.removeChild(answerRow2);
                        answerContainer.removeChild(answerRow3);
                        answerContainer.removeChild(answerRow4);
                        bodyTimer.textContent = ("Completed! Your Score: "+finalScore);
                        console.log(i);
                        var x=1;
                        console.log(x);
                        return;
                    }

                    //if there are more questions left, write them to the DOM
                    cardTitle.textContent = (myQuestions[i]);
                    answer1.textContent = answers[i][0];
                    answer2.textContent = answers[i][1];
                    answer3.textContent = answers[i][2];
                    answer4.textContent = answers[i][3];
                    console.log(i);
                    userAnswer = "e"
               
                //If they incorrectly answer the question, subtract 10 from the time  
                }else{
                    counter = counter - 10;
                    i++;
                    console.log("incorrect");

                    //if the last question has been asked and answered, remove card text and record score
                    if (i===6){
                        var finalScore = score+counter;
                        counter==-1;
                        answerContainer.removeChild(answerRow1);
                        answerContainer.removeChild(answerRow2);
                        answerContainer.removeChild(answerRow3);
                        answerContainer.removeChild(answerRow4);
                        bodyTimer.textContent = ("Completed! Your Score: "+finalScore);
                        console.log(i);
                        var x=1;
                        console.log(x);
                        return;
                    }

                    //if there are more questions left, write them to the DOM
                    cardTitle.textContent = (myQuestions[i]);
                    answer1.textContent = answers[i][0];
                    answer2.textContent = answers[i][1];
                    answer3.textContent = answers[i][2];
                    answer4.textContent = answers[i][3];
                    console.log(i);
                    userAnswer = "e"
                }
            }); 

            //When the second from the bottom button is pressed, userAnswer is given a string value of a and compared to the answer array
            btn4.addEventListener("click", function(){
                var userAnswer = "d";
                if (userAnswer === correctAnswer[i]){
                    score = score+5;
                    i++;
                    console.log("correct");

                    //if the last question has been asked and answered, remove card text and record score
                    if (i===6){
                        var finalScore = score+counter;
                        counter==-1;
                        answerContainer.removeChild(answerRow1);
                        answerContainer.removeChild(answerRow2);
                        answerContainer.removeChild(answerRow3);
                        answerContainer.removeChild(answerRow4);
                        bodyTimer.textContent = ("Completed! Your Score: "+finalScore);
                        console.log(i);
                        var x=1;
                        console.log(x);
                        return;
                    }

                    //if there are more questions left, write them to the DOM
                    cardTitle.textContent = (myQuestions[i]);
                    answer1.textContent = answers[i][0];
                    answer2.textContent = answers[i][1];
                    answer3.textContent = answers[i][2];
                    answer4.textContent = answers[i][3];
                    console.log(i);
                    userAnswer = "e"
                    
                //If they incorrectly answer the question, subtract 10 from the time      
                }else{
                    counter = counter - 10;
                    i++;
                    console.log("incorrect");

                    //if the last question has been asked and answered, remove card text and record score
                    if (i===6){
                        var finalScore = score+counter;
                        counter==-1;
                        answerContainer.removeChild(answerRow1);
                        answerContainer.removeChild(answerRow2);
                        answerContainer.removeChild(answerRow3);
                        answerContainer.removeChild(answerRow4);
                        bodyTimer.textContent = ("Completed! Your Score: "+finalScore);
                        console.log(i);
                        var x=1;
                        console.log(x);
                        return;
                    }

                    //if there are more questions left, write them to the DOM
                    cardTitle.textContent = (myQuestions[i]);
                    answer1.textContent = answers[i][0];
                    answer2.textContent = answers[i][1];
                    answer3.textContent = answers[i][2];
                    answer4.textContent = answers[i][3];
                    console.log(i);
                    userAnswer = "e"
                }
            });
            

        }
    
        }
        

    } 

startQuizEl.addEventListener("click", runQuiz);
