const quizData = [
  {
    question:
      "What is the primary function of the JavaScript 'typeof' operator?",
    a: "To check if a variable is defined.",
    b: "To determine the data type of a variable or expression.",
    c: "To convert a variable to a string type.",
    d: "To compare two variables' values and types.",
    correct: "b",
  },
  {
    question:
      "Which HTML element is used to specify a footer for a document or section?",
    a: "<footer>",
    b: "<bottom>",
    c: "<section>",
    d: "<nav>",
    correct: "a",
  },
  {
    question:
      "In CSS, which property is used to change the background color of an element?",
    a: "color",
    b: "bgcolor",
    c: "background-color",
    d: "background",
    correct: "c",
  },
  {
    question: "What company developed the React JavaScript library?",
    a: "Google",
    b: "Microsoft",
    c: "Facebook (Meta)",
    d: "Apple",
    correct: "c",
  },
  {
    question:
      "Which term describes an error in a program that causes it to crash or produce incorrect results?",
    a: "Token",
    b: "Syntax",
    c: "Bug",
    d: "Patch",
    correct: "c",
  },
];

let index = 0;
let total = quizData.length;
let right = 0;
wrong = 0;

const welcomeBox = document.getElementById("welcome-box");
const quizBox = document.getElementById("box");
const startBtn = document.getElementById("start-btn");
const question = document.getElementById("question");
const option = document.querySelectorAll(".option");

startBtn.addEventListener("click", () => {
  welcomeBox.style.display = "none";
  quizBox.style.display = "block";
  loadQuiz();
});

const loadQuiz = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const quiz = quizData[index];
  console.log(quiz);
  question.innerText = `${index + 1}) ${quiz.question}`;
  option[0].nextElementSibling.innerText = quiz.a;
  option[1].nextElementSibling.innerText = quiz.b;
  option[2].nextElementSibling.innerText = quiz.c;
  option[3].nextElementSibling.innerText = quiz.d;
};

const submitQuiz = () => {
  const quiz = quizData[index];
  const ans = getAns();
  if (!ans) {
    alert("Please select an answer!");
    return;
  }
  else if (ans == quiz.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuiz();
  return;
};

const getAns = () => {
  let answer;
  option.forEach((opt) => {
    if (opt.checked) {
      answer = opt.value;
    }
  });
  return answer;
};

const reset = () => {
  option.forEach((opt) => {
    opt.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
                <h3 class="thankyou"> Thank you for playing the Quiz!</h3>
                <h2 class="result">You got ${right} / ${total} correct</h2>
                 <div class="btn-div">
                <button onclick="location.reload()" class="button">Restart</button>
            </div>
                `;
};

loadQuiz();
