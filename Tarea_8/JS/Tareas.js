export const peliculas = (cantidad) => {


    const url_movies = "https://api.themoviedb.org/3/discover/movie?api_key=42de64c0a1ee49b8f862c4acc3bdf917&language=es&sort_by=popularity.desc&include_adult=false";
    const llave = "42de64c0a1ee49b8f862c4acc3bdf917";

    fetch(
        url_movies +
        new URLSearchParams({
            api_key: llave,

        })
    ).then((response) => {
        if (response.status !== 200) {
            console.log(`Error:${response.statusText}
                Codigo:${ response.status}`);
            return;
        }
        // no hay problemas, podemos ver el contenido
        response.json().then((data) => {
            console.log(data.results);
            imprimirHTML(data.results);
        });
    });
};




function imprimirHTML(peliculas) {
    let html = "";
    peliculas.forEach((peli) => {


        html += `<li>
        Nombre: ${peli.title} <br>
        Fecha :${peli.release_date}<br> 
        <img src="https://image.tmdb.org/t/p/w500${peli.poster_path}"/></li>`;
    });
    const contenedorApp = document.querySelector("#app");
    contenedorApp.innerHTML = html;
}

export const imprimircomb = (generos) => {
    var selector = document.querySelector("#group");
    const api = "https://api.themoviedb.org/3/genre/movie/list?api_key=42de64c0a1ee49b8f862c4acc3bdf917&language=es";
    fetch(api).then((response) => {
        if (response.status !== 200) {
            console.log("No funciona maestro " + response.status);
            return;
        }
        response.json().then((data) => {
            console.log(data);
            imprimirHTML2(data.genres);
        })
    })

}

function imprimirHTML2(generos) {
    let html1 = "";

    generos.forEach((genero) => {


        html1 += `<option value =${genero.id}"> ${genero.name} </optionvalue>`
            /*let opt = document.createElement('option');
            opt.value = genero.id;
            opt.text = genero.name;
            contenedorApp2.appendChild(opt);
            */
    });
    let contenedorApp2 = document.querySelector("#SelectGenero");
    contenedorApp2.innerHTML = html1;
}

//LISTAR PELICULASexport const peliculas = (cantidad) => {


export const ListarAccion = (categoria) => {

    const url_movies = `https://api.themoviedb.org/3/search/movie?api_key=42de64c0a1ee49b8f862c4acc3bdf917&language=es&query=${categoria}&page=1&include_adult=false`;
    const llave = "42de64c0a1ee49b8f862c4acc3bdf917";

    fetch(
        url_movies +
        new URLSearchParams({
            api_key: llave,

        })
    ).then((response) => {
        if (response.status !== 200) {
            console.log(`
        Error: $ { response.statusText }
        Codigo: $ { response.status }
        `);
            return;
        }
        // no hay problemas, podemos ver el contenido
        response.json().then((data) => {
            console.log(data.results);
            imprimirHTML(data.results);
        });
    });
};

//LISTAR SERIES DE TV POPULARES
export const ListarPopulares = (cantidad) => {


    const url_movies = "https://api.themoviedb.org/3/tv/popular?api_key=42de64c0a1ee49b8f862c4acc3bdf917&language=es&page=1";
    const llave = "42de64c0a1ee49b8f862c4acc3bdf917";

    fetch(
        url_movies +
        new URLSearchParams({
            api_key: llave,

        })
    ).then((response) => {
        if (response.status !== 200) {
            console.log(`Error:${response.statusText}
                Codigo:${ response.status}`);
            return;
        }
        // no hay problemas, podemos ver el contenido
        response.json().then((data) => {
            console.log(data.results);
            imprimirHTMLtvs(data.results)
        });
    });
};

//tvs
function imprimirHTMLtvs(series) {
    let html = "";
    series.forEach((series) => {


        html += `<li>
        Nombre: ${series.name} <br>
        Fecha :${series.first_air_date}<br> 
        <img src="https://image.tmdb.org/t/p/w200${series.poster_path}"/></li>`;
    });
    const contenedorAp3 = document.querySelector("#tvs");
    contenedorAp3.innerHTML = html;
}