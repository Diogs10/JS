const QUESTIONS = [
    {
        question: 
        "Le meilleur joueur de tous les temps?",
        a:"MESSI",
        b:"CR7",
        c:"PELE",
        d:"MARADONA",
        correct:"a",
    },
    {
        question:
        "Le ballon d'or africain 2022?",
        a:"SALAH",
        b:"MAHREZ",
        c:"MANE",
        d:"HAKIMI",
        correct:"c",
    },
    {
        question:
        "Qui a remporté la CAN 2021?",
        a:"ALGERIE",
        b:"SENEGAL",
        c:"EGYPTE",
        d:"CAMEROUN",
        correct:"b",
    },
    {
        question:
        "Qui a remporté la LDC 2015?",
        a:"BARCA",
        b:"REAL MADRID",
        c:"BAYERN MUNICH",
        d:"MANCHESTER UNITED",
        correct:"a",
    },
    {
        question:
        "Le ballon d'or mondial 2009?",
        a:"ROONEY",
        b:"CR7",
        c:"MESSI",
        d:"ETO'O",
        correct:"c",
    },
];
const QCM = document.getElementById('QCM')
const reponse = document.querySelectorAll('.reponse')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const suivantBtn = document.getElementById('suivant')
let decompte = 0
let score = 0
chargement()
function chargement() {
    deactive()
    const decompteData = QUESTIONS[decompte]
    questionEl.innerText = decompteData.question
    a_text.innerText = decompteData.a
    b_text.innerText = decompteData.b
    c_text.innerText = decompteData.c
    d_text.innerText = decompteData.d
}
function deactive() {
    reponse.forEach(reponseEl => reponseEl.checked = false)
    suivantBtn.Disabled;
}
function selection() {
    let rep
    reponse.forEach(reponseEl => {
        if (reponseEl.checked) {
            rep = reponseEl.id
        }
    })
    return rep
}
suivantBtn.addEventListener('click', () => {
    const rep = selection()
    if (rep) {
        if (rep === QUESTIONS[decompte].correct) {
            score++
        }
        decompte++
        if (decompte < QUESTIONS.length) {
            chargement()
        } else {
            QCM.innerHTML = `
           <h2>Vous avez ${score}/${QUESTIONS.length} questions correctes</h2>
           <button onclick="location.reload()">Rejouer</button>
           `
        }
    }
})