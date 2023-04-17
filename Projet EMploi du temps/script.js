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







const boxes = document.querySelectorAll('.BOX');
const selection = document.querySelector('#SELECTION');
let box1=document.querySelector('.box1')
let box2=document.querySelector('.box2')
let box3=document.querySelector('.box3')
let box4=document.querySelector('.box4')

























box1.textContent=profs.length
box2.textContent=salles.length
box3.textContent=classes.length
box4.textContent=modules.length


boxes.forEach(box => {
    box.addEventListener('click',(e)=>{
        // console.log(e.target)
        // const boxTitle = box.classList[0]; au cas ou ......
        const boxTitle = box.classList; 
        
        if(boxTitle.contains('modules'))
        {
            chargerSelect(modules,selection,'selectionner  un cours');
            selection.addEventListener('change',()=>{
                let e2=selection.value
                console.log(e2);
                if (e2 === 'selectionner  un cours') {
                    document.querySelector('.titre').innerHTML=''
                    alert('')
                }
                else{
                    document.querySelector('.titre').innerHTML=e2;
                }
            })
        }
        
        if(boxTitle.contains('salles'))
        {
            chargerSelect(salles,selection,'selectionner une salle');
            selection.addEventListener('change',()=>{
                let e1=selection.value
                console.log(e1);
                if (e1 === 'selectionner une salle') {
                    document.querySelector('.titre').innerHTML=''
                }
                else{
                    document.querySelector('.titre').innerHTML=e1;
                }
            })
        }
        if(boxTitle.contains('enseignant'))
        {
            chargerSelect(profs,selection,'selectionner  un prof');
            selection.addEventListener('change',()=>{
                let e3=selection.value
                console.log(e3);
                if (e3 === 'selectionner  un prof') {
                    document.querySelector('.titre').innerHTML=''
                    alert('')
                }
                else{
                    document.querySelector('.titre').innerHTML=e3;
                }
            })
        }
        
        if(boxTitle.contains('classes'))
        {
            chargerSelect(classes,selection,'selectionner  une classe');
            selection.addEventListener('change',()=>{
                let e4=selection.value
                console.log(e4);
                if (e4 === 'selectionner  une classe') {
                    document.querySelector('.titre').innerHTML=''
                    alert('')
                }
                else{
                    document.querySelector('.titre').innerHTML=e4;
                }
            })
        }
        
    })
});













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