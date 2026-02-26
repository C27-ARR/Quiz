const question = document.getElementById("questions");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [

    //CONSTANTS 
const CORRECT_BONUS = 100;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
}
      
startGame();

    { question: "Is the vatican a country and a sovereign state?", 
    choice1: "It is a country without sovereignty",
    choice2: "It is not a country but it is a sovereign state",
    choice3: "It is both a country and a sovereign state",
    choice4: "It is neither a country nor a sovereign state",
    answer: 3
    }
    { question: "Is pluto a planet?"
    choice1: "Yes, it is a planet",
    choice2: "No, it is not a planet",
    choice3: "It is a planet but it is not a dwarf planet",
    choice4: "It is a dwarf planet but it is not a planet",
    answer: 4
    }
    { question: "When was the last time Barcelona holdeed the olympic games?"
        choice1: "2004",
        choice2: "1992",
        choice3: "2016",
        choice4: "2020",
        answer: 2
    }
]