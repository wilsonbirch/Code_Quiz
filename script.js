// create all variables needed for the script including start quiz elements, count, and element creators
var startQuizEl = document.querySelector("#startQuiz");
var counter = 5;
var body = document.body;
var score = 0;
i=0;


const myQuestions = ["Inside which HTML element do we put the JavaScript?", "How is a function in Javascript created?","Javascript is primarily used for?", "How do we add comments in Javascript?", "If we wanted to calculate the exponent of y to x, How would we type this in Javascript?", "If we are to create a date variable using the first 4 numbers, what do they specify from 0 to 3?"]
const answers = new Array( );
answers [0] = new Array ("<js>","<script>","<scr>","<java>");
answers [1] = new Array ("function myFunction()","function:myFunction()","function.myFunction()","function~myFunction()");
answers [2] = new Array ("Defines the content of a webpage","Specifies the layout and style of a webpage","Set the behaviour of a webpage","Creating a database for a webpage")
answers [3] = new Array ("<!--This is a comment-->","//This is a comment","~!~This is a comment","||This is a comment");
answers [4] = new Array ("y^x","y*x","y?x","y**x");
answers [5] = new Array ("Year, Month, Day, Hour","Year, Day, Month, Hour","Hour, Minute, Second, Millisecond","Day, Month, Year, Hour");

const correctAnswer = ["b","a","c","b","d","a"]


function runQuiz(event){

    if (counter>0){

        //create timer div once timer begins
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
        var interval = setInterval(function() {
            counter--;
            // Display 'counter' wherever you want to display it.
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
            }else if (i===6){
                return;

            }else{
                $('#time').text(counter);
                counter.addEventListener("change", bodyTimer.textContent = ("Time left: "+counter));
            }
        
        }, 1000);
        

        var rightSpace = document.createElement("div");
        newRow.appendChild(rightSpace);
        rightSpace.setAttribute("class", "col-sm-5")



        while (i=0, i<6) {

            var cardBody = document.querySelector(".card-body");
            var cardText = document.querySelector(".card-text");
            var cardTitle = document.querySelector(".card-title");
            
           
            cardBody.removeChild(cardText);
            cardBody.removeChild(startQuizEl);

            //console.log(myQuestions[i]);
            cardTitle.textContent = (myQuestions[i]);
            
            var answerContainer = document.createElement("container");
            cardBody.appendChild(answerContainer);
            answerContainer.setAttribute("class", "text-center");

            var answerRow1 = document.createElement("div");
            var answer1 = document.createElement("a");
            answerRow1.setAttribute ("class", "row");
            answerRow1.setAttribute ("style", "margin-top: 10px; margin-bottom: 10px");
            answerContainer.appendChild(answerRow1);
            answerRow1.appendChild(answer1);

            var answerRow2 = document.createElement("div");
            var answer2 = document.createElement("a");
            answerRow2.setAttribute ("class", "row");
            answerRow2.setAttribute ("style", "margin-top: 10px; margin-bottom: 10px");
            answerContainer.appendChild(answerRow2);
            answerRow2.appendChild(answer2);

            var answerRow3 = document.createElement("div");
            var answer3 = document.createElement("a");
            answerRow3.setAttribute ("class", "row");
            answerRow3.setAttribute ("style", "margin-top: 10px; margin-bottom: 10px");
            answerContainer.appendChild(answerRow3);
            answerRow3.appendChild(answer3);

            var answerRow4 = document.createElement("div");
            var answer4 = document.createElement("a");
            answerRow4.setAttribute ("class", "row");
            answerRow4.setAttribute ("style", "margin-top: 10px; margin-bottom: 10px");
            answerContainer.appendChild(answerRow4);
            answerRow4.appendChild(answer4);

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

                    if (i===6){
                        var finalScore = score+counter;
                        counter==-1;
                        answerContainer.removeChild(answerRow1);
                        answerContainer.removeChild(answerRow2);
                        answerContainer.removeChild(answerRow3);
                        answerContainer.removeChild(answerRow4);
                        bodyTimer.textContent = ("Completed! Your Score: "+finalScore);
                        console.log(counter);

                    }

                    cardTitle.textContent = (myQuestions[i]);
                    answer1.textContent = answers[i][0];
                    answer2.textContent = answers[i][1];
                    answer3.textContent = answers[i][2];
                    answer4.textContent = answers[i][3];
                    console.log(i);
                    userAnswer = "e"

                 
                } else {
                    counter = counter - 10;
                    i++;
                    console.log("incorrect");

                    if (i===6){
                        var finalScore = score+counter;
                        counter==-1;
                        answerContainer.removeChild(answerRow1);
                        answerContainer.removeChild(answerRow2);
                        answerContainer.removeChild(answerRow3);
                        answerContainer.removeChild(answerRow4);
                        bodyTimer.textContent = ("Completed! Your Score: "+finalScore);

                    }

                    cardTitle.textContent = (myQuestions[i]);
                    answer1.textContent = answers[i][0];
                    answer2.textContent = answers[i][1];
                    answer3.textContent = answers[i][2];
                    answer4.textContent = answers[i][3];
                    console.log(i);
                    userAnswer = "e"
                }
                }); 

            btn2.addEventListener("click", function(){
                var userAnswer = "b";
                if (userAnswer === correctAnswer[i]){
                    score = score+5;
                    i++;
                    console.log("correct");

                    if (i===6){
                        var finalScore = score+counter;
                        counter==-1;
                        answerContainer.removeChild(answerRow1);
                        answerContainer.removeChild(answerRow2);
                        answerContainer.removeChild(answerRow3);
                        answerContainer.removeChild(answerRow4);
                        bodyTimer.textContent = ("Completed! Your Score: "+finalScore);
                    }
                    cardTitle.textContent = (myQuestions[i]);
                    answer1.textContent = answers[i][0];
                    answer2.textContent = answers[i][1];
                    answer3.textContent = answers[i][2];
                    answer4.textContent = answers[i][3];
                    console.log(i);
                    userAnswer = "e"
                    
                }else{
                    counter = counter - 10;
                    i++;
                    console.log("incorrect");

                    if (i===6){
                        var finalScore = score+counter;
                        counter==-1;
                        answerContainer.removeChild(answerRow1);
                        answerContainer.removeChild(answerRow2);
                        answerContainer.removeChild(answerRow3);
                        answerContainer.removeChild(answerRow4);
                        bodyTimer.textContent = ("Completed! Your Score: "+finalScore);
                    }

                    cardTitle.textContent = (myQuestions[i]);
                    answer1.textContent = answers[i][0];
                    answer2.textContent = answers[i][1];
                    answer3.textContent = answers[i][2];
                    answer4.textContent = answers[i][3];
                    console.log(i);
                    userAnswer = "e"
                }
                }); 

            btn3.addEventListener("click", function(){
                var userAnswer = "c";
                if (userAnswer === correctAnswer[i]){
                    score = score+5;
                    i++;
                    console.log("correct");

                    if (i===6){
                        var finalScore = score+counter;
                        counter==-1;
                        answerContainer.removeChild(answerRow1);
                        answerContainer.removeChild(answerRow2);
                        answerContainer.removeChild(answerRow3);
                        answerContainer.removeChild(answerRow4);
                        bodyTimer.textContent = ("Completed! Your Score: "+finalScore);
                    }
                    cardTitle.textContent = (myQuestions[i]);
                    answer1.textContent = answers[i][0];
                    answer2.textContent = answers[i][1];
                    answer3.textContent = answers[i][2];
                    answer4.textContent = answers[i][3];
                    console.log(i);
                    userAnswer = "e"
               
                }else{
                    counter = counter - 10;
                    i++;
                    console.log("incorrect");
                    if (i===6){
                        var finalScore = score+counter;
                        counter==-1;
                        answerContainer.removeChild(answerRow1);
                        answerContainer.removeChild(answerRow2);
                        answerContainer.removeChild(answerRow3);
                        answerContainer.removeChild(answerRow4);
                        bodyTimer.textContent = ("Completed! Your Score: "+finalScore);
                    }
                    cardTitle.textContent = (myQuestions[i]);
                    answer1.textContent = answers[i][0];
                    answer2.textContent = answers[i][1];
                    answer3.textContent = answers[i][2];
                    answer4.textContent = answers[i][3];
                    console.log(i);
                    userAnswer = "e"
                }
            }); 

            btn4.addEventListener("click", function(){
                var userAnswer = "d";
                if (userAnswer === correctAnswer[i]){
                    score = score+5;
                    i++;
                    console.log("correct");
                    if (i===6){
                        var finalScore = score+counter;
                        counter==-1;
                        answerContainer.removeChild(answerRow1);
                        answerContainer.removeChild(answerRow2);
                        answerContainer.removeChild(answerRow3);
                        answerContainer.removeChild(answerRow4);
                        bodyTimer.textContent = ("Completed! Your Score: "+finalScore);
                    }
                    cardTitle.textContent = (myQuestions[i]);
                    answer1.textContent = answers[i][0];
                    answer2.textContent = answers[i][1];
                    answer3.textContent = answers[i][2];
                    answer4.textContent = answers[i][3];
                    console.log(i);
                    userAnswer = "e"
                    
                }else{
                    counter = counter - 10;
                    i++;
                    console.log("incorrect");
                    if (i===6){
                        var finalScore = score+counter;
                        counter==-1;
                        answerContainer.removeChild(answerRow1);
                        answerContainer.removeChild(answerRow2);
                        answerContainer.removeChild(answerRow3);
                        answerContainer.removeChild(answerRow4);
                        bodyTimer.textContent = ("Completed! Your Score: "+finalScore);
                    }
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

