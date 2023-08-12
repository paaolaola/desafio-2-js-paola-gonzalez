//1er Problema
const cat = document.getElementById("cat");

cat.addEventListener("click", toggleHide);

function toggleHide() {
    const border = cat.style.border;
    cat.style.border = "2px solid crimson";

    if (border == "2px solid crimson") {
        cat.style.border = 0;
    } else {
        cat.style.border = "2px solid crimson";
    }
    console.log("border", border);
}

//2do Problema
const input1 = document.getElementById("amount1");
const input2 = document.getElementById("amount2");
const input3 = document.getElementById("amount3");
const resultado = document.getElementById("resultado");
const check = document.getElementById("check");

check.addEventListener("click", total);

function total() {
    const amount1 = parseInt(input1.value);
    const amount2 = parseInt(input2.value);
    const amount3 = parseInt(input3.value);
    const suma = amount1 + amount2 + amount3;

    if (suma <= 10) {
        resultado.innerHTML = "Llevas " + suma + " stickers ✔";
    } else {
        resultado.innerHTML = "Llevas demasiados stickers ☹";
    }
    console.log("suma", suma);
}
//3er Problema

const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");
const select3 = document.getElementById("select3");
const btn = document.getElementById("ingreso");
const mensaje = document.getElementById("password");

btn.addEventListener("click", operacion);

function operacion() {
    const listo = select1.value + select2.value + select3.value;

    if (listo == 911) {
        mensaje.innerHTML = "Password 1 correcta!";
    } else if (listo == 714) {
        mensaje.innerHTML = "Password 2 es correcto!";
    } else {
        mensaje.innerHTML = "Password incorrecta";
    }
    console.log(listo);
}
