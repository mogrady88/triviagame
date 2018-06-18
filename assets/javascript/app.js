$('document').ready(function(){
var correct = 0;
var incorrect = 0;
var missed = 0;
var count = 3;
var intervalId;

var questions = [{
    question: "What item of clothing did both Ross and his date wear on a date?",
    answers: ["A Scarf", "A Sweater", "Glasses", "A Hat"],
    correctAnswer: 1},{
    question: "Why did Joey carry a Murse?",
    answers: ["To Impress a Girl", "To Land a Gig", "To Carry Food With Him Everywhere", "Because He Lost a Bet"],
    correctAnswer: 1},{
    question: "What did the duck eat to make him sick?",
    answers: ["Peanutbutter", "Rachels Face Cream", "Leftover Pizza", "Monica's Towel"],
    correctAnswer: 1},{
    question: "What is the name of Phoebe's sister?",
    answers: ["Erica", "Heather", "Ursula", "Amy"],
    correctAnswer: 2},{
    question: "Which designer does Rachel work for?",
    answers: ["Ralph Lauren", "Polo", "Gucci", "Sophia Lauren"],
    correctAnswer: 0},{
    question: "What is the occupation of Monica's ex, Richard?",
    answers: ["Bacteriologist", "Podiatrist", "Ophthalmologist", "ENT Specialist"],
    correctAnswer: 2}
    ]

    // randomNumber = Math.floor(Math.random()* 6);
    // console.log(randomNumber);

var i = 0;
function triviaGame(){
    console.log(i);

    function runTimer(){
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    function decrement(){
        count--;
        $("#timer").html(count);

        if (count === 0){
        missed++;
        nextQuestion();
        }
        if (i > 5){
            clearInterval(intervalId);
            $("#timer").html("<h2>Game Over!</h2>");
            $("#question").text("");
            $("#a").html("");
            $("#b").html("<h4>Questions Correct: " + correct + "</h4>");
            $("#c").html("<h4>Questions Incorrect: " + incorrect + "</h4>");
            $("#d").html("<h4> Questions Missed: " + missed + "</h4>");
        }
    }

    runTimer();
        
        $("#question").text(questions[i].question);
        $("#a").html("<button>" + questions[i].answers[0] + "</button>");
        $("#b").html("<button>" + questions[i].answers[1] + "</button>");
        $("#c").html("<button>" + questions[i].answers[2] + "</button>");
        $("#d").html("<button>" + questions[i].answers[3] + "</button>");

        $("#a").on('click',function(){
            if (questions[i].answers[0] === questions[i].answers[questions[is].correctAnswer]){
                console.log("right!");
                correct++;
                nextQuestion();
            }
            else{
                console.log("wrong");
                incorrect++;
                nextQuestion();
            }
        })

        $("#b").on('click',function(){
            if (questions[i].answers[1] === questions[i].answers[questions[i].correctAnswer]){
                console.log("right!");
                correct++;
                nextQuestion();
            }
            else{
                console.log("wrong");
                incorrect++;
                nextQuestion();
            }
        })

        $("#c").on('click',function(){
            if (questions[i].answers[2] === questions[i].answers[questions[i].correctAnswer]){
                console.log("right!");
                correct++;
                nextQuestion();
            }
            else{
                console.log("wrong");
                incorrect++;
                nextQuestion();
            }
        })

        $("#d").on('click',function(){
            if (questions[i].answers[3] === questions[i].answers[questions[i].correctAnswer]){
                console.log("right!");
                correct++;
                nextQuestion();
            }
            else{
                console.log("wrong");
                incorrect++;
                nextQuestion();
            }
        })

function nextQuestion(){
    i++;
    count = 3;
    triviaGame();
}
    // console.log(correct);
    // console.log(incorrect);
    // return(i);   
}

triviaGame();
});