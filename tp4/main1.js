let btn = document.getElementById("btn");
let remplir=document.querySelector("#copie");
remplir.addEventListener('mouseover',objet);
remplir.addEventListener('mouseout',objet1);
btn.addEventListener("click",generer);
function generer(){
    let longueur=parseInt(document.getElementById("c1").value);
    let maj=document.getElementById("c2");
    let min=document.getElementById("c3");
    let nbr=document.getElementById("c4");
    let sym=document.getElementById("c5");
    let caractere="";
    let MotDePasse="";
    let rd=""
    let i=0;
    if (maj.checked) {
        caractere +="AZERTYUIOPMLKJHGFDSQWXCVBN";
        i++;
        carMAJ="AZERTYUIOPMLKJHGFDSQWXCVBN";
        rd += carMAJ.charAt(Math.floor(Math.random()*carMAJ.length));;
    }
    if (min.checked) {
        caractere +="azertyuiopmlkjhgfdsqwxcvbn";
        carMIN="azertyuiopmlkjhgfdsqwxcvbn";
        rd += carMIN.charAt(Math.floor(Math.random()*carMIN.length));
        i++;
    }
    if (nbr.checked) {
        caractere +="0123456789";
        i++;
        carNBR="0123456789";
        rd += carNBR.charAt(Math.floor(Math.random()*carNBR.length));
    }
    if (sym.checked) {
        caractere +="$%^&!@#:;',.>/*-,|?~_=+";
        i++;
        carSYM="$%^&!@#:;',.>/*-,|?~_=+";
        rd += carSYM.charAt(Math.floor(Math.random()*carSYM.length));
    }
    console.log(rd);
    // console.log(caractere)
    if(i==0) {
    let notifCocher=document.createElement('div');
    notifCocher.innerHTML =' <div class="msgNbr">Cochez au moins une cage</div>'
        document.querySelector('.clair').appendChild(notifCocher)
        setTimeout(() => {
                notifCocher.remove()
            }, 3000);
    }
    if(isNaN(longueur)){
    let notifCochers=document.createElement('div');
    notifCochers.innerHTML =' <div class="msgCkek">Entrez un nombre</div>'
        document.querySelector('.clair').appendChild(notifCochers)
        setTimeout(() => {
                notifCochers.remove()
            }, 3000);
    }
    if(longueur>20){
            let notifCochers=document.createElement('div');
            notifCochers.innerHTML =' <div class="msgCkek">Le nombre doit etre inferieur à 20</div>'
                document.querySelector('.clair').appendChild(notifCochers)
                setTimeout(() => {
                        notifCochers.remove()
                    }, 3000);
            }
            if(longueur<1){
                    let notifCochers=document.createElement('div');
                    notifCochers.innerHTML =' <div class="msgCkek">Le nombre doit etre superieu à 1</div>'
                        document.querySelector('.clair').appendChild(notifCochers)
                        setTimeout(() => {
                                notifCochers.remove()
                            }, 3000);
                    }
                    else  if(longueur<i){
                            let notifCochers=document.createElement('div');
                            notifCochers.innerHTML =' <div class="msgNbr">Taille doit etre égaux ou supérieur</div>'
                                document.querySelector('.clair').appendChild(notifCochers)
                                setTimeout(() => {
                                        notifCochers.remove()
                                    }, 3000);
                            }
                            else{
                                    let a=longueur-i
                                    for (let i = 0; i < a; i++) {
                                        MotDePasse += caractere.charAt(Math.floor(Math.random()*caractere.length));
                                    }
                                    console.log(MotDePasse)
                                }
                                let MotDePasseTotal="";
                                MotDePasseTotal=MotDePasse+rd;
                                console.log(MotDePasseTotal);
                                remplir.value=MotDePasseTotal;
                                remplir.style.fontSize='2em';
                                remplir.style.textAlign='center';
                                remplir.style.color='blue';
}
function objet(){
    document.querySelector('.a').style.visibility='visible';
}
function objet1(){
    document.querySelector('.a').style.visibility='hidden';
}
function copie() {
                                
    if (document.getElementById('copie').value == 0) {
                                    
        alert('Case vide , il n y a rien à copier')
    }
    else {
            remplir.select();
            document.execCommand('copy');
            alert('Copié')
    }
}
    