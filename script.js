const data = [
    {
        question: "¿Cuál es la capital de Buenos Aires?",
        a: "Rosario",
        b: "Ciudad de Buenos Aires",
        c: "Quilmes",
        d: "La Plata",
        correct: "d",
    },
    {
        question: "¿En qué provincia se encuentra el glaciar Perito Moreno?",
        a: "Tierra del Fuego",
        b: "Santa Cruz",
        c: "La Pampa",
        d: "Catamarca",
        correct: "b",
    },
    {
        question: "¿En qué ciudad está la piedra movediza?",
        a: "Tandil",
        b: "Viedma",
        c: "Junín",
        d: "Olavarría",
        correct: "a",
    },
    {
        question: "¿En qué año se inauguró el obelisco?",
        a: "1918",
        b: "1936",
        c: "1924",
        d: "1930",
        correct: "b",
    },
];

const preguntas = document.getElementById('preguntas')
const respuestas = document.querySelectorAll('.respuesta')
const preguntaEl = document.getElementById('pregunta')
const  a_texto = document.getElementById('a-texto')
const  b_texto = document.getElementById('b-texto')
const  c_texto = document.getElementById('c-texto')
const  d_texto = document.getElementById('d-texto')
const submitBtn = document.getElementById('btn')

let preguntaActual = 0;
let correctas = 0;

questionario()

function questionario() {
    deseleccion()
    const pregData = data[preguntaActual]

    preguntaEl.innerText = pregData.question
    a_texto.innerText = pregData.a
    b_texto.innerText = pregData.b
    c_texto.innerText = pregData.c
    d_texto.innerText = pregData.d

} 

function deseleccion() {
    respuestas.forEach(respuestaEl => respuestaEl.checked = false)
}

function seleccion(){
    let respuestaId

    respuestas.forEach(respuesta => {
        if(respuesta.checked) {
            respuestaId = respuesta.id
        }
    })

    return respuestaId
}

submitBtn.addEventListener('click', () => {
   const respuesta = seleccion()
   
   
   if(respuesta) {
    
        if (respuesta === data[preguntaActual].correct){
            correctas++
            
            
        }
        console.log(respuesta)
        console.log(data[preguntaActual].correct)
        preguntaActual++
        
        if(preguntaActual < data.length) {
            questionario()
        }
        else {
            preguntas.innerHTML = `
            <div class='container'>
              <h2 class='resultado'>Respondiste correctamente ${correctas} de ${data.length}</h2>
              <button onclick="location.reload()">Reload</button>
            </div>
            `
        }
   }

})


