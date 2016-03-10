var randomQuestionIndex= Math.floor(Math.random() * questions.length);
var question = questions[randomQuestionIndex][0];
var correctAnswer = questions[randomQuestionIndex][5];

function renderQuestionsAndAnswer() {

    randomQuestionIndex = Math.floor(Math.random() * questions.length);
    score.innerHTML = (correct)+" / "+questions.length;
    test.innerHTML = "<div id='question'>"+questionNumber++ +") "+ question++ +"</div>";
    chA = questions[randomQuestionIndex][1];
    chB = questions[randomQuestionIndex][2];
    chC = questions[randomQuestionIndex][3];
    chD = questions[randomQuestionIndex][4];
    test.innerHTML +="<div><button onclick='checkAnswer(value)' value='A' name='choices'>"+"(a) "+chA+"</button></div>";
    test.innerHTML +="<div><button onclick='checkAnswer(value)' value='B' name='choices'>"+"(b) "+chB+"</button></div>";
    test.innerHTML +="<div><button onclick='checkAnswer(value)' value='C' name='choices'>"+"(c) "+chC+"</button></div>";
    test.innerHTML +="<div><button onclick='checkAnswer(value)' value='D' name='choices'>"+"(d) "+chD+"</button></div>";    
};

renderQuestionsAndAnswer();



function next(value) {
    if(value === questions[random][5]) {
        correct++;
    }  
    randomize();
    renderQuestions();
};