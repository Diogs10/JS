/*___________________________________________________________________________________________________________*/
//Les données
// js moussa s1 L1 10 12 lundi
const profs = [
    { id: 1, nom: 'MBAYE', semaine: '', modules: [1, 2, 3], plannings: [[], [], [], [],[],[]] },//module salle hp hf classe jour
    { id: 2, nom: 'MOUSSA', semaine: '', modules: [6, 2, 3], plannings: [[], [], [], [],[],[]] },
    { id: 3, nom: 'MAR', semaine: '', modules: [4, 3, 5], plannings: [[], [], [], [],[],[]] },
    { id: 4, nom: 'THIORO', semaine: '', modules: [1, 4, 3], plannings: [[], [], [], [],[],[]] },
    { id: 5, nom: 'ADJA', semaine: '', modules: [1, 3], plannings: [[], [], [], [],[],[]] },
];



const modules = [
    { id: 1, nom: 'Javascript', semaine: '', plannings: [[], [], [], [],[],[]] },//prof salle hp hf classe jour
    { id: 2, nom: 'Python', semaine: '', plannings: [[], [], [], [],[],[]] },
    { id: 3, nom: 'Java', semaine: '', plannings: [[], [], [], [],[],[]] },
    { id: 4, nom: 'PHP', semaine: '', plannings: [[], [], [], [],[],[]] },
    { id: 5, nom: 'Merise', semaine: '', plannings: [[], [], [], [],[],[]] },
    { id: 6, nom: 'Arabe', semaine: '', plannings: [[], [], [], [],[],[]] },
];


const classes = [
    { id: 1, nom: 'DevWeb', semaine: '', plannings: [[], [], [], [],[],[]], effectif: 30 },//prof module salle hp hf jour
    { id: 2, nom: 'Gl', semaine: '', plannings: [[], [], [], [],[],[]], effectif: 29 },
    { id: 3, nom: 'Marketing', semaine: '', plannings: [[], [], [], [],[],[]], effectif: 50 },
    { id: 4, nom: 'Hackeuse', semaine: '', plannings: [[], [], [], [],[],[]], effectif: 10 },
];

const salles = [
    { id: 1, nom: '101', semaine: '', plannings: [[], [], [], [],[],[]], effectif: 30 },//prof module classe hp hf jour
    { id: 2, nom: '102', semaine: '', plannings: [[], [], [], [],[],[]], effectif: 29 },
    { id: 3, nom: '103', semaine: '', plannings: [[], [], [], [],[],[]], effectif: 50 },
    { id: 4, nom: '104', semaine: '', plannings: [[], [], [], [],[],[]], effectif: 10 },
];

const heures=[
    {nom:'8H'},
    {nom:'9H'},
    {nom:'10h'},
    {nom:'11h'},
    {nom:'12h'},
    {nom:'13h'},
    {nom:'14h'},
    {nom:'15h'},
    {nom:'16h'},
    {nom:'17h'}
];
const dur=[
    {nom:'2h'},
    {nom:'3h'},
    {nom:'4h'}
];









/*___________________________________________________________________________________________________________*/
//Declaration des variables


const PLUS=document.querySelectorAll('.PLUS')
const boxes = document.querySelectorAll('.BOX');
const selection = document.querySelector('#SELECTION');
let btnAnnule=document.querySelector('.annule');
let SEL=document.querySelectorAll('.SEL');
let ajout=document.querySelector('.ajout');
let btnAjout=document.querySelector('.NB');












const heurep=[PLUS.length];
let cla;
let HEURE="";
let DURRE="";
let nomP="";
let nomM="";
let nomS="";
let nomC="";
let i;


let Diogs={
    PROF:"",
    JOUR:"",
    HEURED:"",
    HEUREF:"",
    MODULE:"",
    SALLE:"",
    CLASSE:""
}




/*___________________________________________________________________________________________________________*/
//Les evenements et appel de fonctions


for (let index = 0; index < PLUS.length; index++) {
    PLUS[index].addEventListener('click',()=>{
        i=index+1;
        cla=`.jour${i}2`
        ajout.style.display='flex';
        ajout.style.zIndex='10';
        chargerSelect(modules,SEL[0],'selectionner un module');
        chargerSelect(classes,SEL[2],'selectionner une classe');
        chargerSelect(salles,SEL[3],'selectionner une salle');
        chargerSelect(heures,SEL[4],'selectionner une heure');
        chargerSelect(dur,SEL[5],'selectionner une durée');
        SEL[0].addEventListener('change',()=>{
            nomM=(SEL[0].value);
            // console.log(typeof(nomM));
            let recupId=getId(nomM,modules)
            let professeurs= getProfsByIdModule(+recupId);
            chargerSelect(professeurs,SEL[1],"choisir un prof");
        })
        SEL[1].addEventListener('change',()=>{
            nomP=(SEL[1].value);
            // console.log(typeof(nomP));
        })
        SEL[2].addEventListener('change',()=>{
            nomC=(SEL[2].value);
            // console.log(typeof(nomC));
        })
        SEL[3].addEventListener('change',()=>{
            nomS=(SEL[3].value);
            // console.log(typeof(nomS));
        })
        SEL[4].addEventListener('change',()=>{
            HEURE=parseInt(SEL[4].value);
            // console.log(typeof(HEURE));
        })
        SEL[5].addEventListener('change',()=>{
            DURRE=parseInt(SEL[5].value);
            // console.log(typeof(DURRE));
        })
    })
}
btnAnnule.addEventListener('click',()=>{
    ajout.style.display='none';
})
btnAjout.addEventListener('click',()=>{
    let HEUREFIN=HEURE+DURRE;
    i=parseInt(i)
    let r=validation(nomP,nomS,HEURE,HEUREFIN,nomC,i);
    if (r!==0){}
    else{

        Diogs.PROF=nomP;
        Diogs.MODULE=nomM;
        Diogs.HEURED=HEURE;
        Diogs.HEUREF=(DURRE+HEURE);
        Diogs.CLASSE=nomC;
        Diogs.SALLE=nomS;
        Diogs.JOUR=i;
        // console.log(Diogs.JOUR);
        // console.log(r);
        profs[(getId(nomP,profs)-1)].plannings[i-1].push(Diogs)
        modules[(getId(nomM,modules)-1)].plannings[i-1].push(Diogs)
        salles[(getId(nomS,salles)-1)].plannings[i-1].push(Diogs)
        classes[(getId(nomC,classes)-1)].plannings[i-1].push(Diogs)
        ajout.style.display='none';
        printPlanning(HEURE,DURRE,nomP,nomM,nomS,cla);
        // localStorage.setItem(JSON.stringify(profs[getId(nomP,profs)].plannings[i-1]))
        // localStorage.setItem(JSON.stringify(modules[getId(nomM,modules)].plannings[i-1]))
        // localStorage.setItem(JSON.stringify(salles[getId(nomS,salles)].plannings[i-1]))
        // localStorage.setItem(JSON.stringify(classes[getId(nomC,classes)].plannings[i-1]))
        // localStorage.setItem(1,JSON.stringify(profs))
        // localStorage.setItem(2,JSON.stringify(modules))
        // localStorage.setItem(3,JSON.stringify(salles))
        // localStorage.setItem(4,JSON.stringify(classes))
        // console.log(JSON.parse(Object.values(localStorage)[1]))
        
        // console.table(profs[getId(nomP,profs)].plannings);
        // console.table(modules[getId(nomM,modules)].plannings);
        // console.table(salles[getId(nomS,salles)].plannings);
        // console.table(classes[getId(nomC,classes)].plannings);
        // heureP=HEURE;
        // // dureeP=DURRE;
        // HEURE=0;
        // DURRE=0;
        // nomP=0;
        // nomM=0;
        // nomS=0;
        Diogs={
            PROF:"",
            JOUR:"",
            HEURED:"",
            HEUREF:"",
            MODULE:"",
            SALLE:"",
            CLASSE:"",
        }

    }
}
)
boxes.forEach(box => {
    box.addEventListener('click',(e)=>{
        // console.log(e.target)
        // const boxTitle = box.classList[0]; au cas ou ......
        const boxTitle = box.classList; 
        
        if(boxTitle.contains('salles'))
        {
            chargerSelect(salles,selection,'selectionner une salle');
            selection.addEventListener('change',()=>{
                let e=selection.value
            })
            for (let index = 0; index < salles[getId(e,salles)].plannings.length; index++) {
                for (let index1 = 0; index1 < salles[getId(e,salles)].plannings[index].length; index1++) {
                    // printPlanning()
                }
            }
        }
        
        if(boxTitle.contains('modules'))
        {
            chargerSelect(modules,selection,'selectionner  un cours');
            selection.addEventListener('change',()=>{
                let e=selection.value
            })
            for (let index = 0; index < modules[getId(e,modules)].plannings.length; index++) {
                for (let index1 = 0; index1 < modules[getId(e,modules)].plannings[index].length; index1++) {
                    // printPlanning()
                }
            }
        }
        
        if(boxTitle.contains('enseignant'))
        {
            chargerSelect(profs,selection,'selectionner  un prof');
            selection.addEventListener('change',()=>{
                let e=selection.value
            })
            for (let index = 0; index < profs[getId(e,profs)].plannings.length; index++) {
                for (let index1 = 0; index1 < profs[getId(e,profs)].plannings[index].length; index1++) {
                    // printPlanning()
                }
            }
        }
        
        if(boxTitle.contains('classes'))
        {
            chargerSelect(classes,selection,'selectionner  une classe');
            selection.addEventListener('change',()=>{
                let e=selection.value
            })
            for (let index = 0; index < classes[getId(e,classes)].plannings.length; index++) {
                for (let index1 = 0; index1 < classes[getId(e,classes)].plannings[index].length; index1++) {
                    // printPlanning()
                }
            }
        }
    })
});




















/*___________________________________________________________________________________________________________*/
//Declaration des fonctions

// chargement des données
function chargerSelect (data, select,label='Selectionner')
{
    select.innerHTML = '';
    const option = creatingElement('option');
    option.innerHTML = label;
    select.appendChild(option);
    data.forEach(d => {
        const option = creatingElement('option');
        option.innerHTML = d.nom;
        select.appendChild(option);
    });
}

function creatingElement(elName)
{
    return document.createElement(elName);
}




function printPlanning(debut,duree,nomProf,nomClasse,nomSalle,classe)
{
    const column = debut-8; //veuillez constantiser le 8
    const div = creatingElement('div');
    div.innerHTML=`<h6>${nomClasse}</h6><h2>${nomProf}</h2><h6>${nomSalle}</h6>`
    div.style.display='flex';
    div.style.justifyContent='center';
    div.style.alignItems='center';
    div.style.flexDirection='column'
    div.style.backgroundColor = 'green';
    div.style.width = `${duree*8}%`;
    div.style.position = 'absolute';
    div.style.height = '100%';
    div.style.marginLeft = `${column*8}%`
    let JR = document.querySelector(`${classe}`)
    JR.appendChild(div);
}


function getProfsByIdModule(idModule)
{
    const professeurs=[];
    profs.forEach(prof => {
        if (prof.modules.includes(idModule)) {
            professeurs.push(prof);
        }
    });
    return professeurs;
}

function getId(Data,Datas) {
    let recupId;
    for (let i = 0; i < Datas.length; i++) {
        if ((Datas[i].nom)===(Data)) {
            recupId = Datas[i].id;
            recupId =parseInt(recupId)
            Datas[recupId];
        }
    }
    return recupId;
}
function validation(nomp,noms,hp,hf,nomcl,dayIndice) {
    let u=0;
    if (hf >= 18) {
        alert('impossible:Les cours arretent à 17h');
        u=1;
    }
    else if ((nomM===0) || (nomP===0) || (nomS===0) || (HEURE===0) || (DURRE===0) ||(nomC===0)) {
        alert('Selectionner tout les cases');
        u=1;
    }
    else{
        // let aa=getId(nomp,profs)
        // console.log(aa);
        if ((profs[(getId(nomp,profs)-1)].plannings[dayIndice-1].length) != 0) {
            profs[getId(nomp,profs)].plannings[dayIndice-1].forEach(cla => {
                if ((cla.HEUREF <= hp || cla.HEUREF >=hf) ) {
                    alert(`Le prof ${nomp} est occupé`)
                    u=u+1;
                }
            });
        }
        // let bb=getId(nomcl,classes)
        // console.log(bb);
        // console.log(classes[bb]);
        if ((classes[(getId(nomcl,classes)-1)].plannings[dayIndice-1].length) != 0) {
            classes[getId(nomcl,classes)].plannings[dayIndice-1].forEach(cla => {
                if ((cla.HEUREF <= hp || cla.HEUREF >=hf) ) {
                    alert(`La classe ${nomcl} a cours en ce moment`)
                    u=u+1;
                }
            });
        }
        // let cc=getId(noms,salles)
        // console.log(cc);
        if ((salles[(getId(noms,salles)-1)].plannings[dayIndice-1].length) != 0) {
            salles[getId(noms,salles)].plannings[dayIndice-1].forEach(cla => {
                if ((cla.HEUREF <= hp || cla.HEUREF >=hf) ) {
                    alert(`La salle ${noms} est occupé par ${cla.CLASSE}`)
                    u=u+1;
                }
            });
        }
    }
    // if ((modules[getId(nomm,modules)].plannings[dayIndice-1].length) !== 0) {
    //     modules[getId(nomm,modules)].plannings[dayIndice-1].forEach(cla => {
    //         if ((cla.HEURED==hp && cla.HEUREF==hf) || (cla.HEURED < hp && cla.HEURED < hf) || (cla.HEURED < hf && cla.HEURED < hp)) {
    //             alert('La salle est occupé')
    //             u=u+1;
    //         }
    //     });
    // }
    return u;
}









































//prof salle hp hf classe jour

// function ajoutPlanningModules(datas,nomdata,nomp,noms,hp,d,nomcl,JJ) {
//     let A=getId(nomdata,datas);
//     for (let ind = 0; ind < 6; ind++) {
//         if (ind==0) {
//             datas[getId(nomdata,datas)].plannings[ind].push(nomp)
//         }
//         if (ind==1) {
//             datas[getId(nomdata,datas)].plannings[ind].push(noms)
//         }
//         if (ind==2) {
//             datas[getId(nomdata,datas)].plannings[ind].push(hp)
//         }
//         if (ind==3) {
//             datas[getId(nomdata,datas)].plannings[ind].push(d)
//         }
//         if (ind==4) {
//             datas[getId(nomdata,datas)].plannings[ind].push(nomcl)
//         }
//         if (ind==5) {
//             datas[getId(nomdata,datas)].plannings[ind].push(JJ)
//         }
//     }
// }

// //module salle hp hf classe jour
// function ajoutPlanningProf(datas,nomdata,nomm,noms,hp,d,nomcl,JJ) {
//     let A=getId(nomdata,datas);
//     for (let ind = 0; ind < 6; ind++) {
//         if (ind==0) {
//             datas[getId(nomdata,datas)].plannings[ind].push(nomm)
//         }
//         if (ind==1) {
//             datas[getId(nomdata,datas)].plannings[ind].push(noms)
//         }
//         if (ind==2) {
//             datas[getId(nomdata,datas)].plannings[ind].push(hp)
//         }
//         if (ind==3) {
//             datas[getId(nomdata,datas)].plannings[ind].push(d)
//         }
//         if (ind==4) {
//             datas[getId(nomdata,datas)].plannings[ind].push(nomcl)
//         }
//         if (ind==5) {
//             datas[getId(nomdata,datas)].plannings[ind].push(JJ)
//         }
//     }
// }






// //prof module salle hp hf jour
// function ajoutPlanningClasse(datas,nomdata,nomp,nomm,hp,d,noms,JJ) {
//     let A=getId(nomdata,datas);
//     for (let ind = 0; ind < 6; ind++) {
//         if (ind==0) {
//             datas[getId(nomdata,datas)].plannings[ind].push(nomp)
//         }
//         if (ind==1) {
//             datas[getId(nomdata,datas)].plannings[ind].push(nomm)
//         }
//         if (ind==2) {
//             datas[getId(nomdata,datas)].plannings[ind].push(noms)
//         }
//         if (ind==3) {
//             datas[getId(nomdata,datas)].plannings[ind].push(hp)
//         }
//         if (ind==4) {
//             datas[getId(nomdata,datas)].plannings[ind].push(d)
//         }
//         if (ind==5) {
//             datas[getId(nomdata,datas)].plannings[ind].push(JJ)
//         }
//     }
// }





// //prof module classe hp hf jour
// function ajoutPlanningSalle(datas,nomdata,nomm,nomp,hp,d,nomcl,JJ) {
//     let A=getId(nomdata,datas);
//     for (let ind = 0; ind < 6; ind++) {
//         if (ind==0) {
//             datas[getId(nomdata,datas)].plannings[ind].push(nomp)
//         }
//         if (ind==1) {
//             datas[getId(nomdata,datas)].plannings[ind].push(nomm)
//         }
//         if (ind==2) {
//             datas[getId(nomdata,datas)].plannings[ind].push(nomcl)
//         }
//         if (ind==3) {
//             datas[getId(nomdata,datas)].plannings[ind].push(hp)
//         }
//         if (ind==4) {
//             datas[getId(nomdata,datas)].plannings[ind].push(d)
//         }
//         if (ind==5) {
//             datas[getId(nomdata,datas)].plannings[ind].push(JJ)
//         }
//     }
// }
























































// console.log(ajoutPlanningModules(modules,'Javascript','diogs','RC4',10,4,'l1','Mardi'));


// function verificationJour(nomp,jj/*,nomm*/) {
//     let y=profs[getId(nomp,profs)].plannings.length;
//     let x=profs[getId(nomp,profs)].plannings[y-1].length;
//     let a=profs[getId(nomp,profs)].plannings
//     // for (let index = 0; index < y; index++) {
//         for (let index2 = 0; index2 < x; index2++) {
//             if ((profs[getId(nomp,profs)].plannings[5][index2])===(jj)) {
//                 console.log(profs[getId(nomp,profs)].plannings[5][index2])
//                 console.log(jj)
//                 console.log('mm jour')
//                 // verificationModule(nomp,nomm)
//             }
//             if ((profs[getId(nomp,profs)].plannings[5][index2])!==(jj)) {
//                 console.log(profs[getId(nomp,profs)].plannings[5][index2])
//                 console.log(jj)
//                 console.log('diff jour')
//             }
//         }
//     // }
// }






// function verificationModule(nomp,nomm) {
//     let y=profs[getId(nomp,profs)].plannings.length;
//     let x=profs[getId(nomp,profs)].plannings[y-1].length;
//     let a=profs[getId(nomp,profs)].plannings
//     // for (let index = 0; index < y; index++) {
//         for (let index2 = 0; index2 < x; index2++) {
//             if ((profs[getId(nomp,profs)].plannings[0][index2])===(nomm)) {
//                 console.log(profs[getId(nomp,profs)].plannings[0][index2])
//                 console.log(nomm)
//                 console.log('mm module')
//             }
//             if ((profs[getId(nomp,profs)].plannings[0][index2])!==(nomm)) {
//                 console.log(profs[getId(nomp,profs)].plannings[0][index2])
//                 console.log(nomm)
//                 console.log('diff module')
//             }
//         }
//     // }
// }


// function verificationHeure(nomp,heure) {
//     let y=profs[getId(nomp,profs)].plannings.length;
//     let x=profs[getId(nomp,profs)].plannings[y-1].length;
//     let a=profs[getId(nomp,profs)].plannings

// }






























// let diogs={
//     JOUR:"eefg",
//     HEURE:"gfgg",
//     MODULE:"dfgfhgjuk",
//     PROFF:"sdfgh",
// }
// localStorage.setItem(1,JSON.stringify(diogs))
// console.log(JSON.parse(Object.values(localStorage)[1]));



// selectModules.addEventListener('change',()=>{
//     // selectModules.value)
//     const idModule=selectModules.value;
//     let professeurs= getProfsByIdModule(+idModule);
//     chargerSelect(professeurs,selectEnseignant,"choisir un prof");
//     alert(day_actuel)
// })






// function takalo() {
//     let Diff;
//     let dd;
//     let heure1;
//     let heure2;
//     Diff=heure2-heure1;
//     if (Diff<dd) {
//         alert('imposible')
//     }
// }
// PLUS.forEach(p => {
// });

//     const currentClass = {
//         nom : 'DevWeb',
//         semaine : '13/03/2023 - 18/03/2023',
//         effectif: 29,
//         plannings : [
//             [
//                 {module : 2, prof:2, salle: 4, debut: 8, duree :4}
//             ] , 
//             [] , [] , [] , [
//                 {module : 6, prof:2, salle: 4, debut: 10, duree :2},
//                 {module : 6, prof:2, salle: 4, debut: 12, duree :2}
//             ] , [] ]console.log(a);
// console.log(a);
// console.log(a);

// printPlanning(11,3);
// printPlanning(13,2);
//     const prof= getDataById(2,classes);
//     console.log(prof== undefined ? 'doesn\'t exist':prof.nom)
//     // console.log(prof);


//     function getDataById (id,data)
//     {
    //         // let p = undefined;
    //         // profs.forEach(prof => {
        //         //     if(prof.id == id)
        //         //     {
            //         //         p = prof;
            //         //         return ;
            //         //     }
            //         // });
            //         // return p;
            
            
            //         // return profs.find((p)=>p.id == id) 
            //         return data.find((p)=>p.id == id)
            //     }