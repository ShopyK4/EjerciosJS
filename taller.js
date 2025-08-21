const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function run() {

    while (true) {
        console.log("\nSelecciona una opcion para el respectivo ejercicio:");
        console.log("1) Ejercicio 1");
        console.log("2) Ejercicio 2.1");
        console.log("3) Ejercicio 2.2");
        console.log("4) Ejercicio 3.1");
        console.log("5) Ejercicio 3.2");
        console.log("6) Ejercicio 4.1");
        console.log("7) Ejercicio 4.2");
        console.log("8) Ejercicio 4.3");
        console.log("9) Ejercicio 4.4");
        console.log("10) Ejercicio 5");
        console.log("11) Ejercicio 6.1");
        console.log("12) Ejercicio 6.2");
        console.log("13) Ejercicio 7.1");
        console.log("30) Salir");

        const option = (await ask("Ingresa una opcion: ")).trim();

        switch (option) {
            case "1":
                ejercicio1();
                break;
            case "2":
                ejercicio2();
                break;
            case "3":
                ejercicio3();
                break;
            case "4":
                ejercicio4();
                break;
            case "5":
                ejercicio5();
                break;
            case "6":
                ejercicio6();
                break;
            case "7":
                ejercicio7();
                break;
            case "8":
                ejercicio8();
                break;
            case "9":
                ejercicio9();
                break;
            case "10":
                ejercicio10();
                break;
            case "11":
                ejercicio11();
                break;
            case "12":
                ejercicio12();
                break;
            case "13":
                ejercicio13();
                break;
            case "30":
                console.log("Saliendo");
                rl.close();
                return;
            default:
                console.log("Opcion no valida. Intenta de nuevo.");
        }
    }
}

//Ejecucion principal
run();

//Ejercicios

//Ejercicio 1
function ejercicio1() {
    var variable = "Samuel";
    console.log(variable);
    var variable = "Alejandro";
    console.log(variable);
}

//Ejercicio 1.2
/*
const variable2 = "Paola";
console.log(variable2);
const variable2 = "Sofia";
console.log(variable2);
// No funciona la reasignacion ya que la forma de declarar const no permite cambios
*/

//Ejercicio 1.3
/*
parameter = false;
if(parameter) {
    let variableIf = "Alejandro";
}
console.log(variableIf);
//No funciona ya que el scope de la declaracion let es de bloque
*/

//Ejercicio 2.1
function ejercicio2() {
    let string = "Samuel";
    let numer = 2;
    let boolean = true;
    let nulo = null;
    let indefinido = undefined;

    console.log("string:", typeof string);
    console.log("numer:", typeof numer);
    console.log("boolean:", typeof boolean);
    console.log("nulo:", typeof nulo);
    console.log("indefinido:", typeof indefinido);
}

//Ejercicio 2.2
function ejercicio3() {
    let objetoPersona = {
        nombre: "Samuel",
        edad: "18"
    };
    console.log("Persona");
    console.log(objetoPersona);

    let arrayHobbies = ["futbol" , "jugar" , "dormir"]
    console.log("Array");
    console.log(arrayHobbies);
}

//Ejercicio 3.1
function ejercicio4() {
    let numero1 = 10;
    let numero2 = "5"

    // En este caso, el operador + concatena cuando uno de los valores es string.
    // Por eso, "10" + "5" se convierte en "105" (string).
    console.log("suma");
    console.log(numero1 + numero2);
    // Aquí el operador * fuerza a que el string "5" se convierta a número.
    // Entonces 10 * 5 = 50 (number).
    console.log("multiplicacion");
    console.log(numero1 * numero2);
}

//Ejercicio3.2
function ejercicio5() {
    let numero1 = 25;
    let numero2 = "100";
    let string1 = "hola";
    let string2 = "";

    // Convierte número a string
    let convertidoString = String(numero1);
    console.log(convertidoString, typeof convertidoString);

    // Convierte string a número
    let convertidoNumero = Number(numero2);
    console.log(convertidoNumero, typeof convertidoNumero);

    // Convierte strings a boolean
    let convertidoBool1 = Boolean(string1);
    let convertidoBool2 = Boolean(string2);

    console.log(convertidoBool1, typeof convertidoBool1);
    console.log(convertidoBool2, typeof convertidoBool2);
}

//Ejercicio 4.1
function ejercicio6() {
    let numero1 = 10
    let numero2 = "10"

    let boolean = numero1 === numero2; //Comparacion estricta (valor y tipo)
    let boolean2 = numero1 == numero2; //Comparacion flexible (tipo)

    console.log("Primera comparacion");
    console.log(boolean, typeof boolean);
    console.log("Segunda comparacion");
    console.log(boolean2, typeof boolean2);
}

//Ejercicio 4.2
function ejercicio7() {
    let numero1 = 3

    if(numero1 % 2 == 0) {
        console.log("El numero es par");
    }
    else {
        console.log("El numero es impar");
    }
}

//Ejercicio 4.3
function ejercicio8() {
    for(let i = 1; i < 6; i++) {
        console.log(i);
    }
}

//Ejercicio 4.4
function ejercicio9() {
    try {
        const variable2 = "Paola";
        console.log(variable2);

        throw new Error("Intento de redeclarar variable constante: variable2");
    }
    catch(e) {
        console.log("Error capturado:", e.message);
    }
}

//Ejercicio 5.1
function ejercicio10() {

    function multiplicar(num1, num2) {
        return num1 * num2;
    }
    console.log("funcion regular");
    console.log(multiplicar(5, 6));

    const multiplicarArrow = (num1, num2) => {return num1 * num2};
    console.log("Funcion arrow");
    console.log(multiplicarArrow(3,7));

    const saludarArrow = () => {return "Hola a todos!"};
    console.log("funcion arrow saludar");
    console.log(saludarArrow());
}

var globalVar = "Hola desde global";

//Ejercicio 6.1
function ejercicio11() {
    function local() {
        let localVar = "Hola desde local";

        console.log("Dentro de la función:");
        console.log(globalVar);
        console.log(localVar);
    }
    local();
    console.log("Fuera de la funcion");
    console.log(globalVar);
    console.log("no imprime ya que no esta declarada la variable local afuera de su bloque");
    //console.log(localVar)11
}

//Ejercicio 6.2
function ejercicio12() {
    const objetoCoche = {
        marca: "Toyota",
        // metodo que muestra la marca usando "this"
        mostrarMarca: function() {
            // aqui "this" hace referencia al objeto que llama al metodo,
            // en este caso "objetoCoche"
            console.log("La marca del coche es " + this.marca);
        }
    };
    // llamamos al metodo: "this" apunta a objetoCoche
    objetoCoche.mostrarMarca();
}

//Ejercicio 7
function ejercicio13() {

    //Frutas
    let arrayFrutas = ["Manazana", "Banana"];
    arrayFrutas.push("Naranja");
    console.log("Primer paso")
    console.log(arrayFrutas);
    arrayFrutas.pop();
    console.log("Segundo paso");
    console.log(arrayFrutas);

    //Numeros
    let arrayNumeros = [1,2,3];
    console.log("Array inicial");
    console.log(arrayNumeros);
    let arrayMultiplicado = arrayNumeros.map((i) => {return i * 2});
    console.log("Array multiplicado x2");
    console.log(arrayMultiplicado);
    let arrayFiltrado = arrayNumeros.filter((i) => i > 1);
    console.log("Array filtrado");
    console.log(arrayFiltrado);
}




