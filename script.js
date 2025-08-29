const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: 1
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
    answer: 0
  },
  {
    question: "Which HTML tag is used to display an image?",
    options: ["<img>", "<image>", "<src>", "<pic>"],
    answer: 0
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    answer: 0
  },
  {
    question: "Which company developed Java?",
    options: ["Microsoft", "Sun Microsystems", "Google", "IBM"],
    answer: 1
  },
  {
    question: "Which keyword is used to create a variable in JavaScript?",
    options: ["int", "let", "string", "varname"],
    answer: 1
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/* */", "#", "<!-- -->"],
    answer: 0
  },
  {
    question: "Which operator is used to compare both value and type in JavaScript?",
    options: ["==", "===", "=", "!="],
    answer: 1
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Transfer Markup Language"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionBtns.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.className = "option-btn"; // reset styles
    btn.disabled = false;
  });
}

optionBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const correctIndex = questions[currentQuestion].answer;
    if (index === correctIndex) {
      btn.classList.add("correct");
      score++;
    } else {
      btn.classList.add("wrong");
      optionBtns[correctIndex].classList.add("correct");
    }
    optionBtns.forEach(b => b.disabled = true); // disable after answer
  });
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "🎉 Quiz Completed!";
    optionBtns.forEach(btn => btn.style.display = "none");
    nextBtn.style.display = "none";
    scoreEl.textContent = `Your Score: ${score} / ${questions.length}`;
  }
});

loadQuestion();
