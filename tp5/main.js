const questions = [
    {
        question: 
        "Le meilleur joueur de tous les temps?",
        1:"MESSI",
        2:"CR7",
        3:"PELE",
        4:"MARADONA",
        correct:"1",
    },
    {
        question:
        "Le ballon d'or africain 2022?",
        1:"SALAH",
        2:"MAHREZ",
        3:"MANE",
        4:"HAKIMI",
        correct:"3",
    },
    {
        question:
        "Qui a remporté la CAN 2021?",
        1:"ALGERIE",
        2:"SENEGAL",
        3:"EGYPTE",
        4:"CAMEROUN",
        correct:"2",
    },
    {
        question:
        "Qui a remporté la LDC 2015?",
        1:"BARCA",
        2:"REAL MADRID",
        3:"BAYERN MUNICH",
        4:"MANCHESTER UNITED",
        correct:"1",
    },
    {
        question:
        "Le ballon d'or mondial 2009?",
        1:"ROONEY",
        2:"CR7",
        3:"MESSI",
        4:"ETO'O",
        correct:"3",
    },
]
let div2=document.querySelector(".div2");//recupération du premier parent
let h1=document.getElementsByTagName("h1");//recupération de h1
let text=document.getElementsByClassName("objet");//recupération des zones de texte
let test=document.getElementsByClassName("test");//recupération des classes radio 
h1[0].innerHTML=questions[0].question;
text[0].innerHTML=questions[0][1];
text[1].innerHTML=questions[0][2];
text[2].innerHTML=questions[0][3];
text[3].innerHTML=questions[0][4];
console.log(test.length);
let rep = test.checked;
console.log(rep);