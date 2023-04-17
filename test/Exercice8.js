
const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
let boxFilms=document.querySelector(".bloc_film")
let input=document.querySelector(".research")
let tabFilm=[]
let page

function creerElement(nomElement,attributElement,containElement) {
    let element = document.createElement(nomElement);
   for (const key in attributElement) {
        element.setAttribute(key,attributElement[key]);
   }
   element.textContent=containElement;
   return element;  
}

function createFilm(picture, title, descript, vote) {
    let premier = creerElement("div", { class: "premier" });
    let img = creerElement("img", { src: picture, alt: title });
    let titre = creerElement("div", { class: "titre" });
    let titre1 = creerElement("div", { class: "titre1" }, title);
    let titre2 = creerElement("div", { class: "titre2" }, vote);
    let description = creerElement("div", { class: "description" }, descript);
    titre.append(titre1, titre2);
    premier.append(img, titre, description);
    return premier;
  }  
  async function getFilms(url) {
     let boxFilms =await fetch(url)
    let data= await boxFilms.json()
 return data.results;}

 let film = getFilms(APIURL)
 film.then( data => {
    data.forEach(premier => {
        let picture = premier.poster_path ? IMGPATH + premier.poster_path : 'https://via.placeholder.com/150';
        let title = premier.title
        let descript = premier.overview
        let vote = premier.vote_average
      let image =  createFilm(picture,title,descript,vote);
      boxFilms.append(image);
        
     tabFilm.push(premier)
    })
 })