$(document).ready(function() {
// object that holds question/answers in various arrays
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

// var to hold score
var correctGuess = 0;
var incorrectGuess = 0;

/* // references to containers in html
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit'); */

// generate quiz
function generateQuiz(){
    $('#questionsDisplay').html(
        '<h3>' + triviaQuestions[0].questions + '</h3>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[0].options[0] + '">' + triviaQuestions[0].options[0] + '</input>' +    
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[0].options[1] + '">' + triviaQuestions[0].options[1] + '</input>' +    
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[0].options[2] + '">' + triviaQuestions[0].options[2] + '</input>' +    
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[0].options[3] + '">' + triviaQuestions[0].options[3] + '</input>' +
        '<h3>' + triviaQuestions[1].questions + '</h3>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[1].options[0] + '">' + triviaQuestions[1].options[0] + '</input>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[1].options[1] + '">' + triviaQuestions[1].options[1] + '</input>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[1].options[2] + '">' + triviaQuestions[1].options[2] + '</input>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[1].options[3] + '">' + triviaQuestions[1].options[3] + '</input>' +
        '<h3>' + triviaQuestions[2].questions + '</h3>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[2].options[0] + '">' + triviaQuestions[2].options[0] + '</input>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[2].options[1] + '">' + triviaQuestions[2].options[1] + '</input>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[2].options[2] + '">' + triviaQuestions[2].options[2] + '</input>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[2].options[3] + '">' + triviaQuestions[2].options[3] + '</input>' +
        '<h3>' + triviaQuestions[3].questions + '</h3>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[3].options[0] + '">' + triviaQuestions[3].options[0] + '</input>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[3].options[1] + '">' + triviaQuestions[3].options[1] + '</input>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[3].options[2] + '">' + triviaQuestions[3].options[2] + '</input>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[3].options[3] + '">' + triviaQuestions[3].options[3] + '</input>' +
        '<h3>' + triviaQuestions[4].questions + '</h3>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[4].options[0] + '">' + triviaQuestions[4].options[0] + '</input>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[4].options[1] + '">' + triviaQuestions[4].options[1] + '</input>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[4].options[2] + '">' + triviaQuestions[4].options[2] + '</input>' +
        '<input type="radio" name="questionChoices" value="' + triviaQuestions[4].options[3] + '">' + triviaQuestions[4].options[3] + '</input>'
    );
};

generateQuiz();
// compare user choice to correct answer. record score
function scoreCheck() {
    if (userGuess === valueSelected) {
        correctGuess++;
    } else {
        incorrectGuess++;
    }
}


// on submit then show score
submitButton.addEventListener('click', scoreCheck());




// doc.ready closing tag. dont fuck with this
});