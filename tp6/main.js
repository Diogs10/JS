let jours=document.querySelector('.jours');
let heures=document.querySelector('.heures');
let minutes=document.querySelector('.minutes');
let secondes=document.querySelector('.secondes');
function temps(){
    let reste;
    let a=new Date();
    const date="Jan 1 2024 00:00:00";
    let b=new Date(date);
    let cmp=Math.floor((b-a)/1000);
    let j=Math.floor((cmp/86400));
    reste=(cmp-(j*86400))
    let h=Math.floor(reste/3600);
    reste=reste-(h*3600);
    let m=Math.floor((reste/60));
    reste=reste-(m*60)
    let s=Math.floor((reste));
    jours.innerHTML="-"+j
    // jours.style.fontSize='4em'
    heures.innerHTML="0-"+h
    // heures.style.fontSize='4em'
    minutes.innerHTML="0-"+m
    // minutes.style.fontSize='4em'
    secondes.innerHTML="0-"+s
    // secondes.style.fontSize='4em'
}
setInterval(temps,1000);