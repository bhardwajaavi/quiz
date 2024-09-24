const questions = [
  {
      question: "What is the capital of France?",
      answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correct: 2
  },
  {
      question: "Which planet is known as the Red Planet?",
      answers: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 1
  },
  {
      question: "What is the largest ocean on Earth?",
      answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correct: 3
  },
  {
      question: "Who wrote 'Romeo and Juliet'?",
      answers: ["Mark Twain", "Jane Austen", "William Shakespeare", "Charles Dickens"],
      correct: 2
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result');

function displayQuestion() {
  const question = questions[currentQuestionIndex];
  questionContainer.innerHTML = `
      <div class="question">${question.question}</div>
      ${question.answers.map((answer, index) => `
          <div>
              <input type="radio" name="answer" value="${index}" id="answer${index}">
              <label for="answer${index}">${answer}</label>
          </div>
      `).join('')}
  `;
}

function showResult() {
  questionContainer.style.display = 'none';
  nextButton.style.display = 'none';
  resultContainer.style.display = 'block';
  resultContainer.innerHTML = `Your score: ${score} out of ${questions.length}`;
}

nextButton.addEventListener('click', () => {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer) {
      const answerIndex = parseInt(selectedAnswer.value);
      if (answerIndex === questions[currentQuestionIndex].correct) {
          score++;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
          displayQuestion();
      } else {
          showResult();
      }
  } else {
      alert("Please select an answer.");
  }
});

// Start the quiz
displayQuestion();
nextButton.style.display = 'block';
