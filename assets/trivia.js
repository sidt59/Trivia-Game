$(document).ready(function() {
// object that holds question/answers in various arrays
// split options array into separate 
var triviaQuestions = [
    { 
      questions: "Who is the actor who plays Lando Calrissian?",
      options: ["Peter Mayhew", "Billy-Dee Williams", "Bill Pullman", "Kenny Baker"],
      answer: "Billy-Dee Williams"
    }, 
    { 
      questions: "Which bounty hunter was chosen to be the basis of all clones in the Republic's Army?",
      options: ["Django", "Boba Fett", "Cad Bane", "Jango Fett"],
      answer: "Jango Fett"
    }, 
    { 
      questions: "Who is Luke's father?",
      options: ["Darth Sidious", "Darth Maul", "Darth Vader", "Steve"],
      answer: "Darth Vader"
    }, 
    { 
      questions: "Who is the actress who plays Rey?",
      options: ["Daisy Ridley", "Carrie Fisher", "Felicity Jones", "Dame Judi Dench"],
      answer: "Daisy Ridley"
    }, 
    { 
      questions: "What planet does Yoda spend his exile on?",
      options: ["Tatooine", "Dagobah", "Coruscant", "Mars"],
      answer: "Dagobah"
    }, 
     
];



// var to ref html div
// var mainContent = $('#mainContent');

// question index
// var questionIndex = 0;

// generate quiz.....again
/* function generateQuiz() {
    if (questionIndex <= (triviaQuestions.length - 1)) {
        document.querySelector("#quiz").innerHTML = triviaQuestions[questionIndex].questions;
        document.querySelector("#options").innerHTML = 
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[0].options[0] + '" checked="yes">' + triviaQuestions[0].options[0] + '</input>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[0].options[1] + '" checked="yes">' + triviaQuestions[0].options[1] + '</input>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[0].options[2] + '" checked="yes">' + triviaQuestions[0].options[2] + '</input>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[0].options[3] + '" checked="yes">' + triviaQuestions[0].options[3] + '</input>';
    } else {
        docu3ent.querySelector('#quiz').innerHTML = "Game Over!";
    }
} */

/* // references to containers in html
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit'); */

// generate quiz
/* function generateQuiz(i) {
    mainContent.html(
        '<div id="questionDiv">' +
        '<h1>Question ' + (i + 1) + '<h1>' +
        '<h2>' + triviaQuestions[i].questions + '</h2>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[i].options[0] + '" checked="yes">' + triviaQuestions[i].options[0] + '</input>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[i].options[1] + '">' + triviaQuestions[i].options[1] + '</input>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[i].options[2] + '">' + triviaQuestions[i].options[2] + '</input>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[i].options[3] + '">' + triviaQuestions[i].options[3] + '</input>' +
        '<button id="submitButton">Submit</button>' +
        '</div>'
    );
} */

function generateQuiz(){
    $('#quiz').html(
        '<h3>' + triviaQuestions[0].questions + '</h3>' +
        '<input type="radio" name="question0" value="' + triviaQuestions[0].options[0] + '">' + triviaQuestions[0].options[0] + '</input>' +    
        '<input type="radio" name="question0" value="' + triviaQuestions[0].options[1] + '">' + triviaQuestions[0].options[1] + '</input>' +    
        '<input type="radio" name="question0" value="' + triviaQuestions[0].options[2] + '">' + triviaQuestions[0].options[2] + '</input>' +    
        '<input type="radio" name="question0" value="' + triviaQuestions[0].options[3] + '">' + triviaQuestions[0].options[3] + '</input>' +
        '<h3>' + triviaQuestions[1].questions + '</h3>' +
        '<input type="radio" name="question1" value="' + triviaQuestions[1].options[0] + '">' + triviaQuestions[1].options[0] + '</input>' +
        '<input type="radio" name="question1" value="' + triviaQuestions[1].options[1] + '">' + triviaQuestions[1].options[1] + '</input>' +
        '<input type="radio" name="question1" value="' + triviaQuestions[1].options[2] + '">' + triviaQuestions[1].options[2] + '</input>' +
        '<input type="radio" name="question1" value="' + triviaQuestions[1].options[3] + '">' + triviaQuestions[1].options[3] + '</input>' +
        '<h3>' + triviaQuestions[2].questions + '</h3>' +
        '<input type="radio" name="question2" value="' + triviaQuestions[2].options[0] + '">' + triviaQuestions[2].options[0] + '</input>' +
        '<input type="radio" name="question2" value="' + triviaQuestions[2].options[1] + '">' + triviaQuestions[2].options[1] + '</input>' +
        '<input type="radio" name="question2" value="' + triviaQuestions[2].options[2] + '">' + triviaQuestions[2].options[2] + '</input>' +
        '<input type="radio" name="question2" value="' + triviaQuestions[2].options[3] + '">' + triviaQuestions[2].options[3] + '</input>' +
        '<h3>' + triviaQuestions[3].questions + '</h3>' +
        '<input type="radio" name="question3" value="' + triviaQuestions[3].options[0] + '">' + triviaQuestions[3].options[0] + '</input>' +
        '<input type="radio" name="question3" value="' + triviaQuestions[3].options[1] + '">' + triviaQuestions[3].options[1] + '</input>' +
        '<input type="radio" name="question3" value="' + triviaQuestions[3].options[2] + '">' + triviaQuestions[3].options[2] + '</input>' +
        '<input type="radio" name="question3" value="' + triviaQuestions[3].options[3] + '">' + triviaQuestions[3].options[3] + '</input>' +
        '<h3>' + triviaQuestions[4].questions + '</h3>' +
        '<input type="radio" name="question4" value="' + triviaQuestions[4].options[0] + '">' + triviaQuestions[4].options[0] + '</input>' +
        '<input type="radio" name="question4" value="' + triviaQuestions[4].options[1] + '">' + triviaQuestions[4].options[1] + '</input>' +
        '<input type="radio" name="question4" value="' + triviaQuestions[4].options[2] + '">' + triviaQuestions[4].options[2] + '</input>' +
        '<input type="radio" name="question4" value="' + triviaQuestions[4].options[3] + '">' + triviaQuestions[4].options[3] + '</input>'
    );

    $('#submit').on('click', function() {
        // var to hold score
        var totalScore = 0;
        if($('input:radio[name=question0]:checked').val() === triviaQuestions[0].answer) {
            totalScore++;
        } else {
            
        }
        
        if ($('input:radio[name=question1]:checked').val() === triviaQuestions[1].answer) {
            totalScore++;
        } else {
            
        }

        if ($('input:radio[name=question2]:checked').val() === triviaQuestions[2].answer) {
            totalScore++;
        } else {

        }

        if ($('input:radio[name=question3]:checked').val() === triviaQuestions[3].answer) {
            totalScore++;
        } else {

        }

        if ($('input:radio[name=question4]:checked').val() === triviaQuestions[4].answer) {
            totalScore++;
        } else {
            // incorrect++
        }

        console.log(totalScore);
        $('#quiz').hide();
        $('#results').html("You've gotten " + totalScore + " of 5 Correct!");
        $('#submit').hide();
        $('#reset').html(); // reset function here?
    });
};

generateQuiz();

/* generateQuiz();
// compare user choice to correct answer. record score
function scoreCheck() {
    if ($('input:radio[name=questionChoices]:checked').val() === triviaQuestions[0].answer) {
        correctGuess++;
        console.log(correctGuess);
    } else {
        incorrectGuess++;
        console.log(incorrectGuess);
    }
} */
    


/* // on submit then show score
$('#submitButton').on('click', scoreCheck());
console.log(scoreCheck());

 */

// doc.ready closing tag. dont fuck with this
});