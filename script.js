// create all variables needed for the script including start quiz elements, count, and element creators
var startQuizEl = document.querySelector("#startQuiz");
var count = 60;
var body = document.body;


function runQuiz(event){

    if (count>0){

        //create timer div once timer begins
        var bodyTimer = document.createElement("div");
        body.appendChild(bodyTimer);
        bodyTimer.setAttribute("class", "card text-white text-center bg-dark mb-3");
        bodyTimer.setAttribute("style", "max-width: 30px; min-width: 20px; margin-left: 50%; margin-top: 20px");
        bodyTimer.textContent = count;

    }
    
}

startQuizEl.addEventListener("click", runQuiz);