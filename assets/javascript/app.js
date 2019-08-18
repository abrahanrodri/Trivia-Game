var myQuestions = [
  {
  question: "Who is Peter Parker’s nemesis in the first Spider-Man film?",
  choices: { 1: 'The Joker', 
             2: 'Magneto', 
             3: 'The Green Goblin', 
             4: 'cheeseburgers'
          },
  answer: '3'
},
{
  question: "What is Cyclops’ power in X-Men?",
  choices: {
      1: 'Telekinesis', 
      2: 'Optic Blast', 
      3: 'Diamond Skin', 
      4: 'Claws'
  },
  answer: '2'
},
{
  question: "What is the name of the cosmic cube that Loki takes control of in The Avengers?",
  choices: {
      1: 'The Tesseract', 
      2: 'The Power Orb', 
      3: 'Mjolnir', 
      4: 'Shawarma'
  },
  answer: '1'
},
{
  question: "How many Avengers are there in the Avengers movie",
  choices: {
      1: '4', 
      2: '10', 
      3: '6', 
      4: '22'
  },
  answer: '3'
},
{
  question: "How do the Fantastic Four get their powers?",
  choices: {
      1: 'They were bitten by a radioactive spider', 
      2: 'They were exposed to cosmic radiation in space', 
      3: 'They were experimented on', 
      4: 'They overslept'
  },
  answer: '2'
},
{
  question: "What’s the name of Tony Stark’s company in the Iron Man trilogy?",
  choices: {
      1: 'Stark and Sons', 
      2: 'Stark and Co', 
      3: 'Stark Industries', 
      4: 'Stark Circus'
  },
  answer: '3'
},
{
  question: "Who does Daredevil team up with in his film?",
  choices: {
      1: 'Elektra', 
      2: 'Storm', 
      3: 'The Invisible Woman', 
      4: 'Daredevilress'
  },
  answer: '1'
},
{
  question: "How many years was Captain America frozen for in Captain America: The First Avenger?",
  choices: {
      1: 'Nearly 70 years', 
      2: 'Nearly 20 years', 
      3: 'Nearly 150 years', 
      4: 'Nearly 1 year'
  },
  answer: '1'
},
{
  question: "Who is Thor’s main romantic interest in Thor?",
  choices: {
      1: 'Jane Foster', 
      2: 'Jean Grey', 
      3: 'Mary Jane', 
      4: 'Captain Marvel'
  },
  answer: '1'
},
{
  question: "What is the name of Rhodey’s iron suit in Iron Man 3",
  choices: {
      1: 'Punisher',
      2: 'War Machine',
      3: 'Death Proof',
      4: 'Iron Patriot'
  },
  answer: '4'
}

];

var counter = 120;
var interval = setInterval(function() {
    counter--;
    if (counter === 0) {
     		clearInterval(interval);
      	$('#timer').html("<h3>GAME OVER!</h2>");  
        return;
    }else{
    	$('#time').text(counter);
    }
}, 1000);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
	var output = [];
	var choices;

	for(var i=0; i<questions.length; i++){
				choices = [];

		for(letter in questions[i].choices){
			choices.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].choices[letter]
				+ '</label>'
			);
		}
 
    output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="choices">' + choices.join('') + '</div>'
		);
	}
	quizContainer.innerHTML = output.join('');
	}

	function showResults(questions, quizContainer, resultsContainer){
  var answerContainers = quizContainer.querySelectorAll('.choices');
	var userAnswer = '';
	var numCorrect = 0;
	
	for(var i=0; i<questions.length; i++){

		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		if(userAnswer===questions[i].answer){
			numCorrect++;
    			}
	}

  resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  
}

	showQuestions(questions, quizContainer);

	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);