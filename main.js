//* VARIABLES
//todo Selectores y Fragmento
const formulario = document.querySelector("#formulario")
const campoTitulo = document.querySelector('#titulo');
const campoDirector = document.querySelector('#director');
const campoYear = document.querySelector('#year');
const campoSelector=document.querySelector('#selector');
const tabla=document.querySelector("#tabla")
let fecha= new Date()
let today=fecha.getFullYear();


let fragment = document.createDocumentFragment()

//todo Arrays

let generos = ["seleccione genero", "terror", "accion", "romantica", "comedia"]

let arrayPeliculas=[]

//todo Objetos 

let objValidar = {
    titulo: false,
    director: false,
    year: false,
    genero:false,
}

let regExp={
    nombres:/([a-zÀ-ÿ\-]\s*)+/gi,
    today:today
}



let objPelicula={
    titulo:null,
    director:null,
    year:null,
    genero:null
}


//* EVENTOS
formulario.addEventListener('submit', (ev) => {
    ev.preventDefault()
    validarFormulario();
});

//* FUNCIONES
//todo creo la funcion pintar generos  (1)

const pintarGeneros=()=>{
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
    const generos=campoSelector.value
   

    if (isNaN(titulo) && titulo.trim().length > 0) {
        objValidar.titulo = true
        
    } else {
        alert("te falta el titulo")
        objValidar.titulo=false
    }

    if (isNaN(director) && director.trim().length > 0) {
        objValidar.director = true
        
    } else {
        alert("te falta el director")
        objValidar.director=false
    }

    if (!(isNaN(year)) && year > 999 && year < 10000) {
        objValidar.year = true
    } 
    else {
        alert("introduce un año valido")
        objValidar.year=false
        
    } 
    if(generos != "seleccione genero"){
        objValidar.genero = true
        
    }else{
        alert("introduce un genero")
        objValidar.genero=false
       
    }

    const arrayValidar = Object.values(objValidar)
    
    const valida = arrayValidar.findIndex(item => item == false);
    

    if (valida === -1) {
        alert("pa alante")
        let objPelicula={
            titulo,
            director,
            year,
            generos,
        }
        arrayPeliculas.push(objPelicula)
        return  pintarTabla(arrayPeliculas) 
    }
}

//todo Despues de validar el formulario pintar en la tabla 


function pintarTabla(array) {

    let tr=document.createElement("tr")
             tabla.append(tr)

        array.forEach(({titulo,director,year,generos}) => {

            let tdTitulo=document.createElement("td")
                tdTitulo.textContent=titulo
            let tdDirector=document.createElement("td")
                tdDirector.textContent=director
            let tdYear=document.createElement("td")
                tdYear.textContent=year
            let tdGenero=document.createElement("td")
                tdGenero.textContent=generos
            // tr.innerHTML= ` <td>${titulo}</td>
            //                 <td>${director}</td>
            //                 <td>${year}</td>
            //                 <td>${genero}</td>`
            
            tr.append(tdTitulo)
            tr.append(tdDirector)
            tr.append(tdYear)
            tr.append(tdGenero)
        });
        arrayPeliculas=[]
}

pintarGeneros()
console.log(arrayPeliculas);

