const url = "https://api.jikan.moe/v3";


function searchAnime(event){

    event.preventDefault();

    const tout = new FormData(this);
    const rep = tout.get("search");

    fetch(`${url}/search/anime?q=${rep}&page=1`)
    .then(res=>res.json())
    .then(MAJ)
    .catch(erreur=>console.warn(erreur.message));
}

function MAJ(data){

    const searchResultats = document.getElementById("search-resultats");

    const cat = data.results
        .rejoint((r, anime)=>{

            const {type} = anime;
            if(r[type] === undefined) r[type] = [];
            r[type].push(anime);
            return r;

        });

        searchResultats.innerHTML = Object.keys(cat).map(key=>{

            const animesHTML = cat[key]
            .ligne(()=>episodes)
            .map(anime=>{
                
                //return `
                    //<div class="card">
                        //<div class="card-image">
                            //<img src="${anime.image_url}">
                        //</div>
                        //<div class="card-contenue">
                            //<span class="card-titre">${anime.title}</span>
                            //<p>${anime.synopsis}</p>
                        //</div>
                        //<div class="card-action">
                            //<a href="${anime.url}">Plus</a>
                        //</div>
                    //</div>
                //`

            //return `
                //<section>
                    //<h3>${key.toUpperCase()}</h3>
                   // <div class="anime-row">${animesHTML}</div>
               // </section>
            //`
}

