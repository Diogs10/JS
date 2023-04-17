let ajout_note = document.querySelector('.btn')
let bloc_note = document.querySelector('.bloc_note')
console.log(ajout_note);

ajout_note.addEventListener('click', ()=> {
    let noteEl =document.createElement('div')
    noteEl.classList.add('note')
    bloc_note.appendChild(noteEl) //le bloc-note est le parent de noteel

    let les_deux_boutonEl = document.createElement('div')
    les_deux_boutonEl.classList.add('bouton_2')
    noteEl.appendChild(les_deux_boutonEl);

    let editEl = document.createElement('img')
    editEl.classList.add('edit')
    editEl.src="pencil-box-svgrepo-com.svg"
    les_deux_boutonEl.appendChild(editEl)


    let trashEl = document.createElement('img')
    trashEl.classList.add('trash')
    trashEl.src="trash-2-svgrepo-com.svg"
    les_deux_boutonEl.appendChild(trashEl)


    let texareaEl = document.createElement('textarea')
    texareaEl.classList.add('zone_texte')
    noteEl.appendChild(texareaEl)

    
    trashEl.addEventListener('click', function(){
        noteEl.remove();
    })

    editEl.addEventListener('click',function(){
        var disabled = texareaEl.getAttribute('disabled');
        if (disabled){
            texareaEl.removeAttribute('disabled');
        }
        else{
            texareaEl.getAttribute('disabled','true');
        }
    })
})


// let bouton_edit = document.querySelector('.edit')

// bouton_edit.addEventListener('click',()=>{

//     let enlever = document.getElementsByClassName('edit').disabled;

//     if (enlever){
//         document.getElementsByClassName('edit').disabled = false;
//     }
//     else{
//         document.getElementsByClassName('edit').disabled = true;
//     }
// })





