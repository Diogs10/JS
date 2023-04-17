var copie =  document.querySelector('.copie');
var minuscule = ["a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n"];
var majuscule = ["A","Z","E","R","T","Y","U","I","O","P","Q","S","D","F","G","H","J","K","L","M","W","X","C","V","B","N"];
var numero = [1,2,3,4,5,6,7,8,9,0];
var symbole=["$","%","^","&","!","@","#",":",";","'",",",".",">","/","*","-",",","|","?","~","_","=","+"];

function generateur() {
    let i=0;
    var tableau = [].concat( 
    c3.checked ? minuscule : [], 
    c2.checked ? majuscule : [],
    c4.checked ? numero : [],
    c5.checked ? symbole : []);
    console.log(i)
    console.log(tableau.length)
    var passwordLength = parseInt(document.getElementById('c1').value);
    var mdp = ''; 
    if (tableau.length<1 && (passwordLength< 3 || passwordLength> 20)) {
        alert('Tu dois séléctionner au moins un critère');
        alert('Le minimum est de 15 caractères et le maximun est 20');
    }
    else if (tableau.length>=1 && (passwordLength< 3 || passwordLength> 20)) {
        alert('Le minimum est de 15 caractères et le maximun est 20');
    }
    else if (tableau.length<1 && !(passwordLength< 3 || passwordLength> 20)) {
	    alert('Tu dois séléctionner au moins un critère');  
    }
    else if (tableau.length<1 && passwordLength>= 3) {
	    alert('Tu dois séléctionner au moins un critère');
    }
    else {
        for (i = 0; i < passwordLength; i++) {
            mdp+= tableau[Math.floor(Math.random() * tableau.length)]; 
        }
        copie.innerHTML = mdp;
        copie.style.fontSize='2em';
    }
}






































// let LONG = document.querySelector('#c1')
// let MAJ = document.querySelector('#c2')
// let MIN = document.querySelector('#c3')
// let NBR = document.querySelector('#c4')
// let C_SP = document.querySelector('#c5')
// const test={
//     a:aleatoire_MIN,
//     A:aleatoire_MAJ,
//     aa:aleatoire_NOM,
//     AA:aleatoire_SYMB
// }
// function aleatoire_MIN(){
//     return String.fromCharCode(Math.floor(Math.random()*26)+97)
// }
// function aleatoire_MAJ(){
//     return String.fromCharCode(Math.floor(Math.random()*26)+65)
// }
// function aleatoire_NOM(){
//     return String.fromCharCode(Math.floor(Math.random()*10)+48)
// }
// function aleatoire_SYMB(){
//     const S='@#$!:;/<>=+)^\_`|&~¬²'
//     return S[Math.floor(Math.random()*S.length)];
// }
// function gerererPWD(a,A,aa,AA,LONG){
//     const somme=a+A+aa+AA;
//     const tab=
//     []
// }