//Punto 1
let numero = 5;

function numeroPrimo(numero) {
    if (numero <= 1) {
        return "No es un número primo"
    };
    for (i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return "No es un número primo"
        } else {
            return "Es un número primo"
        }
    }
};

console.log(numeroPrimo(5));

// Punto 2
let a = [2, 5, 8, 26];
let b = [3, 13, 23, 33];
let resultado = [];

function suma() {
    if (a.length != b.length) {
        console.log("Los arrays no pueden sumarse porque no tienen la misma longitud")
    } else {
        for (i = 0; i < a.length; i++) {
            resultado[i] = a[i] + b[i]
        };
        console.log(resultado)
    }
};

suma();

//Punto 3
let numerosParaSumar = [1, 3, 7, 10];

function sumar(numerosParaSumar) {
    let a = numerosParaSumar[0];
    let b = numerosParaSumar[1];
    let cero = 0;
    for (i = a; i <= b; i++) {
        cero += i
    };
    return cero
};

console.log(sumar(numerosParaSumar));



//Punto 4
let cadena = "Cadena de texto para contar vocales";
let arreglo = cadena.toLowerCase().split("");
let contador = 0;

function contarVocales(arreglo) {
    for (i = 0; i < arreglo.length; i++) {
        if (arreglo[i] == "a" || arreglo[i] == "e" || arreglo[i] == "i" || arreglo[i] == "o" || arreglo[i] == "u" || arreglo[i] == "á" || arreglo[i] == "é" || arreglo[i] == "í" || arreglo[i] == "ó" || arreglo[i] == "ú") {
            contador++
        };
    }
};

contarVocales(arreglo);
console.log(contador);

//Punto 5
let depurar = ["Sofía", "María", "Pedro", "Sofía"];

let depurada = depurar.filter((item, index) => {
    return depurar.indexOf(item) === index
});

console.log(depurada);

//Punto 6
let derecho = "Cadena de texto para invertir";
let reves = "";

function invertir() {
    for (i = derecho.length - 1; i >= 0; i--) {
        reves += derecho[i]
    };
    console.log(reves);
};

invertir();

// Interacción con el DOM - Punto 1

let imagen = document.getElementById("imagen");
let izq = document.getElementById("izq")
let der = document.getElementById("der")
let todas = ["Passarella.jpg", "Diego.jpeg", "Messi.jpg"]
let posicion = 0;

function avance() {
    imagen.src = `imágenes/${todas[posicion]}`

    if (posicion < 2) {
        posicion++
    } else {
        posicion = 0
    }
};

function retroceso() {
    imagen.src = `imágenes/${todas[posicion]}`

    if (posicion > 0) {
        posicion--
    } else {
        posicion = 2
    }
};

der.addEventListener("click", avance);
izq.addEventListener("click", retroceso);


// // Interacción con el DOM - Punto 2

let parrafo = document.getElementById("parrafo");
let btnTamanio = document.getElementById("btnTamanio");

function cambiarTamanio() {
    parrafo.classList.toggle("grande");
    if (parrafo.classList.contains("grande")) {
        btnTamanio.innerText = "Disminuir tamaño de la fuente"
    } else {
        btnTamanio.innerText = "Aumentar tamaño de la fuente"
    }
};

btnTamanio.addEventListener("click", cambiarTamanio)

// Interacción con el DOM - Punto 3

let expansion1 = document.getElementById("expansion1");
let expansion2 = document.getElementById("expansion2");
let expansion3 = document.getElementById("expansion3");
let tarjBtn1 = document.getElementById("tarjBtn1");
let tarjBtn2 = document.getElementById("tarjBtn2");
let tarjBtn3 = document.getElementById("tarjBtn3");

function expandir1() {
    expansion1.className = "expandido"
    tarjBtn1.className = "oculto"
};

function expandir2() {
    expansion2.className = "expandido"
    tarjBtn2.className = "oculto"
};

function expandir3() {
    expansion3.className = "expandido"
    tarjBtn3.className = "oculto"
};