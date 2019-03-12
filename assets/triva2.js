// round numero dos - FIGHT
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

const quizDisplay = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function generateQuiz(){}

function displayResults(){}

// show quiz right away for testing
generateQuiz();

// on clicking submit button, show results
submitButton.on('click', displayResults);