// create all variables needed for the script including start quiz elements, count, and element creators
var startQuizEl = document.querySelector("#startQuiz");
var counter = 60;
var body = document.body;

const myQuestions = ["Inside which HTML element do we put the JavaScript?", "How is a function in Javascript created?","Javascript is primarily used for?" ]
const answers = new Array( );
answers [0] = new Array ("<js>","<script>","<scr>","<java>");
answers [1] = new Array ("function myFunction()","function:myFunction()","function.myFunction()","function~myFunction()");
answers [2] = new Array ("Defines the content of a webpage","Specifies the layout and style of a webpage","Set the behaviour of a webpage","Creating a database for a webpage")
const correctAnswer = ["b","a","c"]


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
            if (counter <= 0) {
                     clearInterval(interval);
                     bodyTimer.textContent = ("Time's up!");  
                     
                return;
            }else{
                $('#time').text(counter);
              console.log("Timer --> " + counter);
              counter.addEventListener("change", bodyTimer.textContent = ("Time left: "+counter))
            }
        }, 1000);
        

        var rightSpace = document.createElement("div");
        newRow.appendChild(rightSpace);
        rightSpace.setAttribute("class", "col-sm-5")



        for (i=0; i<=myQuestions.length;) {

            var cardBody = document.querySelector(".card-body");
            var cardText = document.querySelector(".card-text");
            var cardTitle = document.querySelector(".card-title");
            
           
            cardBody.removeChild(cardText);
            cardBody.removeChild(startQuizEl);

            console.log(myQuestions[i])
            cardTitle.textContent = (myQuestions[i]);
            
            var answerContainer = document.createElement("container");
            cardBody.appendChild(answerContainer);
            answerContainer.setAttribute("class", "text-center");

            var answerRow1 = document.createElement("div");
            var answer1 = document.createElement("div");
            answerRow1.setAttribute ("class", "row");
            answerRow1.setAttribute ("style", "margin-top: 10px; margin-bottom: 10px");
            answerContainer.appendChild(answerRow1);
            answerRow1.appendChild(answer1);

            var answerRow2 = document.createElement("div");
            var answer2 = document.createElement("div");
            answerRow2.setAttribute ("class", "row");
            answerRow2.setAttribute ("style", "margin-top: 10px; margin-bottom: 10px");
            answerContainer.appendChild(answerRow2);
            answerRow2.appendChild(answer2);

            var answerRow3 = document.createElement("div");
            var answer3 = document.createElement("div");
            answerRow3.setAttribute ("class", "row");
            answerRow3.setAttribute ("style", "margin-top: 10px; margin-bottom: 10px");
            answerContainer.appendChild(answerRow3);
            answerRow3.appendChild(answer3);

            var answerRow4 = document.createElement("div");
            var answer4 = document.createElement("div");
            answerRow4.setAttribute ("class", "row");
            answerRow4.setAttribute ("style", "margin-top: 10px; margin-bottom: 10px");
            answerContainer.appendChild(answerRow4);
            answerRow4.appendChild(answer4);

            
            answer1.setAttribute("type", "button");
            answer2.setAttribute("type", "button");
            answer3.setAttribute("type", "button");
            answer4.setAttribute("type", "button");
            answer1.setAttribute("class", "btn btn-outline-dark btn-sm ");
            answer2.setAttribute("class", "btn btn-outline-dark btn-sm ");
            answer3.setAttribute("class", "btn btn-outline-dark btn-sm ");
            answer4.setAttribute("class", "btn btn-outline-dark btn-sm ");
            answer1.textContent = answers[i][0];
            answer2.textContent = answers[i][1];
            answer3.textContent = answers[i][2];
            answer4.textContent = answers[i][3];


            //answer1 = 


            
            
            
        }



    } 

        
    
}

startQuizEl.addEventListener("click", runQuiz);