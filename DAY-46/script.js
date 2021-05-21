const quizData = [
    {
        question: "Liverpool futbol clubi qachon tashkil topgan?",
        a: "1996 yil 13-avgust",
        b: "2006 yil 20-sentabr",
        c: "2006 yil 25-iyul",
        d: "1892 yil 3-iyun",
        correct: "d",
        },
        {
        question: "Real Madrid futbol clubi qachon tashkil topgan?",
        a: "1996 yil 13-avgust",
        b: "1902 yil 6-mart",
        c: "2006 yil 25-iyul",
        d: "2006 yil 20-sentabr",
        correct: "b",
        },
        {
        question: "Barcelona futbol clubi qachon tashkil topgan?",
        a: "2006 yil 25-iyul",
        b: "2006 yil 20-sentabr",
        c: "1899 yil 29-noyabr",
        d: "1892 yil 3-iyun",
        correct: "c",
        },
        {
        question: "Manchester Yunayted futbol clubi qachon tashkil topgan?",
        a: "1897 yil 1-noyabr",
        b: "2006 yil 20-sentabr",
        c: "2006 yil 25-iyul",
        d: "1892 yil 3-iyun",
        correct: "a",
        },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswer()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})