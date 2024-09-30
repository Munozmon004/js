function saludar(){
    console.log("Hola, soy un entrega en JavaScript");
}
saludar();

//prueba para ver si funciona, si una persona quiere usar nuestra calculadora, tiene que contestar algunas preguntas para asi hacer algunos commandos
let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuál es tu edad?");
let genero = prompt("¿Cuál es tu genero? (masculino/femenino)");
edad = parseInt(edad); 

if (edad >= 18 && genero === "masculino") {
    console.log(`Hola ${nombre}, eres un hombre adulto.`);
} else if (edad >= 18 && genero === "femenino") {
    console.log(`Hola ${nombre}, eres una mujer adulta.`);
} else if (edad < 18 && genero === "masculino") {
    console.log(`Hola ${nombre}, eres un chico.`);
} else if (edad < 18 && genero  === "femenino") {
    console.log(`Hola ${nombre}, eres una chica.`);
} else {
    console.log(`Hola ${nombre}, no podemos determinar tu género.`);
}


// ejemplo calculadora

let continuar = true;

while (continuar) {
    let opcion = prompt(
    "Calculadora - Elige una opcion:" +
    "1 : Suma" +
    "2 : Resta" +
    "3 : Multiplicacion" +
    "4 : Division" +
    "5 : Salir"
    ); 
    if (opcion === "5") {
        continuar = false;
        alert("Haz salido de la calculadora.");
        break;
    }

    let num1 = parseFloat(prompt("Ingresa el priemr numero:"));
    let num2 = parseFloat(prompt("Ingresa el segundo numero:"));
    let resultado;

    switch (opcion) {
        case "1":
            resultado = num1 + num2;
            alert(`El resultado es: ${resultado}`);
            break;
        case "2":
            resultado = num1 - num2;
            alert(`El resultado es: ${resultado}`);
            break;
        case "3":
            resultado = num1 * num2;
            alert(`El resultado es: ${resultado}`);
            break;
        case "4":
            resultado = num1 / num2;
            alert(`El resultado es: ${resultado}`);
            break;
        default:
            alert("Opcion no valida, por favor escoge una ocpion del 1 al 5.");
            continue; 
    }
}



