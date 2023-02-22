//* VARIABLES
//todo Selectores y Fragmento
const formulario = document.querySelector("#formulario")
const campoTitulo = document.querySelector('#titulo');
const campoDirector = document.querySelector('#director');
const campoYear = document.querySelector('#year');
const campoSelector = document.querySelector('#selector');
const tabla = document.querySelector("#tabla")
let fecha = new Date()
let today = fecha.getFullYear();


let fragment = document.createDocumentFragment()

//todo Arrays

let generos = ["seleccione genero", "terror", "accion", "romantica", "comedia"]

let arrayPeliculas = []

//todo Objetos 

let objValidar = {
    titulo: false,
    director: false,
    year: false,
    genero: false,
}

let regExp = {
    titulo: /[a-z]/gi,
    director: /[a-z]/gi,
    numeros: /[1-9]{1,4}/i,

}




//* EVENTOS
formulario.addEventListener('submit', (ev) => {
    ev.preventDefault()
    validarFormulario();
});

//* FUNCIONES
//todo creo la funcion pintar generos  (1)

const pintarGeneros = () => {
    generos.forEach(item => {
        let opcion = document.createElement("option")
        opcion.textContent = item
        campoSelector.append(opcion)
    });

}

//todo validamos el formulario  (2)

function validarFormulario() {
    const titulo = campoTitulo.value;
    const director = campoDirector.value;
    const year = campoYear.value
    const generos = campoSelector.value


    if (regExp.titulo.test(titulo)) {
        objValidar.titulo = true
        
        console.log("titulo validado ");
    } else {
        alert("te falta el titulo")
        objValidar.titulo = false
    }

    if (regExp.director.test(director)) {
        objValidar.director = true
        
    } else {
        console.log("entro aqui");
        alert("te falta el director")
        objValidar.director = false
    }
    if (regExp.numeros.test(year) && year < today) {
        objValidar.year = true
       

    } else {
        alert("Introduce un año valido")
        objValidar.year = false

    }
    if (generos != "seleccione genero") {
        objValidar.generos = true
        
    } else {
        alert("introduce un genero")
        objValidar.generos = false

    }

    const arrayValidar = Object.values(objValidar)

    const valida = arrayValidar.findIndex(item => item == false);


    if (valida === -1) {
        alert("pa alante")

        let objPelicula = {
            titulo,
            director,
            year,
            generos
        }
        arrayPeliculas.push(objPelicula)
        return pintarTabla(arrayPeliculas)
    }
}

//todo Despues de validar el formulario pintar en la tabla 


function pintarTabla(array) {

    let tr = document.createElement("tr")
    tabla.append(tr)

    array.forEach(({ titulo, director, year, genero }) => {

        let tdTitulo = document.createElement("td")
        tdTitulo.textContent = titulo
        let tdDirector = document.createElement("td")
        tdDirector.textContent = director
        let tdYear = document.createElement("td")
        tdYear.textContent = year
        let tdGenero = document.createElement("td")
        tdGenero.textContent = genero
        // tr.innerHTML= ` <td>${titulo}</td>
        //                 <td>${director}</td>
        //                 <td>${year}</td>
        //                 <td>${genero}</td>`

        tr.append(tdTitulo)
        tr.append(tdDirector)
        tr.append(tdYear)
        tr.append(tdGenero)
    });
    arrayPeliculas = []
}

pintarGeneros()
console.log(arrayPeliculas);

