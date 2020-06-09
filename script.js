// create all variables needed for the script including start quiz elements, count, and element creators
var startQuizEl = document.querySelector("#startQuiz");
var count = 60;
var body = document.body;

const myQuestions = ["Inside which HTML element do we put the JavaScript?", "How is a function in Javascript created?","Javascript is primarily used for?" ]
const answers = new Array( );
answers [0] = new Array ("<js>","<script>","<scr>","<java>");
answers [1] = new Array ("function myFunction()","function:myFunction()","function.myFunction()","function~myFunction()");
answers [2] = new Array ("Defines the content of a webpage","Specifies the layout and style of a webpage","Set the behaviour of a webpage","Creating a database for a webpage")
const correctAnswer = ["b","a","c"]


/* const answers = [
    { { 

        a:"<js>", 
        b:"<script>", 
        c:"<scr>", 
        d:"<java>"
    },
     {
        
        a:"function myFunction()", 
        b:"function:myFunction()", 
        c:"function.myFunction()", 
        d:"function~myFunction()"

    },
     {

        a:"Defines the content of a webpage", 
        b:"Specifies the layout and style of a webpage", 
        c:"Set the behaviour of a webpage", 
        d:"Creating a database for a webpage"
    },
}

    ] */

/* const myQuestions = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      answers: {
        a: "<div>",
        b: "<article",
        c: "<script>",
        d: "<js>"
      },
      correctAnswer: "c"
    },
    {
      question: "How is a function in Javascript created?",
      answers: {
        a: "function myFunction()",
        b: "function:myFunction()",
        c: "function.myFunction()",
        d: "function~myFunction()"
      },
      correctAnswer: "a"
    },
    {
      question: "Javascript is primarily used for?",
      answers: {
        a: "Defines the content of a webpage",
        b: "Specifies the layout and style of a webpage",
        c: "Set the behaviour of a webpage",
        d: "Creating a database for a webpage"
      },
      correctAnswer: "c"
    },
    //{
    //    question: "",
    //    answers: {
    //      a: "",
    //      b: "",
    //      c: "",
    //      d: ""
    //    },
    //    correctAnswer: "d"
    //  }

  ];
 */

function runQuiz(event){

    if (count>0){

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
        bodyTimer.textContent = ("Time left: "+count);

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
            
            var answerListEl = document.createElement ("ul");
            var answer1 = document.createElement("li");
            var answer2 = document.createElement("li");
            var answer3 = document.createElement("li");
            var answer4 = document.createElement("li");
            cardBody.appendChild(answerListEl);
            answerListEl.setAttribute("style", "list-style-type:none")
            answerListEl.appendChild(answer1);
            answerListEl.appendChild(answer2);
            answerListEl.appendChild(answer3);
            answerListEl.appendChild(answer4);
            answer1.textContent = answers[i][0];
            answer2.textContent = answers[i][1];
            answer3.textContent = answers[i][2];
            answer4.textContent = answers[i][3];


            //answer1 = 


            
            
            
        }



    } 

        
    
}

startQuizEl.addEventListener("click", runQuiz);