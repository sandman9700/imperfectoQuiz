var clickedButton;
const words = [
    { spanish: 'aba (He/She)', english: '\xC9l/Ella/Usted (AR)' },
    { spanish: 'aba (I)', english: 'Yo (AR)' },
    { spanish: '\xEDa (I)', english: 'Yo (ER/IR)' },
    { spanish: '\xEDas', english: 'T\xFA (ER/IR)' },
    { spanish: '\xE1bamos', english: 'Nosotros (AR)' },
    { spanish: '\xEDan', english: 'Ellos/Ellas/Ustedes (ER/IR)' },
    { spanish: '\xEDamos', english: 'Nosotros (ER/IR)' },
    { spanish: 'abas', english: 'T\xFA (AR)' },
    { spanish: 'aban', english: 'Ellos/Ellas/Ustedes (AR)' },
    { spanish: '\xEDa (He/She)', english: '\xC9l/Ella/Usted (ER/IR)' }
];

function shuffle(array) {
    
    array.sort(() => Math.random() - 0.5);
  }

  shuffle(words);

const optionsContainer = document.getElementById('options-container');
const optionButtons = words.map(word => {
    const button = document.createElement('button');
    button.textContent = word.english;
    button.addEventListener('click', () => checkAnswer(word.english));
    optionsContainer.appendChild(button);
    return button;
});

shuffle(words);

var currentQuestionIndex = 0;
var score = 0;

const questionElement = document.getElementById('question');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');

function displayQuestion() {
    const currentQuestion = words[currentQuestionIndex];
    questionElement.textContent = currentQuestion.spanish;

    

}

function checkAnswer(selectedAnswer) {
    const currentQuestion = words[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.english) {
        score++;
        feedbackElement.textContent = 'Correct!';
        console.log(currentQuestionIndex)
        
        clickedButton = Array.from(optionsContainer.children).find(button => button.textContent === selectedAnswer);
        clickedButton.classList.add('answered');
        clickedButton.disabled = true;
    } else {
        feedbackElement.textContent = `Incorrect. The correct answer is ${currentQuestion.english}.`;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < words.length) {
        displayQuestion();
    } else {
        endQuiz();
    }

    scoreElement.textContent = `Score: ${score}`;
}

function endQuiz() {
    questionElement.textContent = 'Quiz Completed!';
    optionsContainer.innerHTML = '';
    feedbackElement.textContent = '';
    scoreElement.textContent = `Final Score: ${score}`;
}



// Initial display
displayQuestion();
