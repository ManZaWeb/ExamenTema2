//Autor: MArio ALfonso Nuñez (DAW)
//GitHub:

//Variables
const PIN_CORRECTO = "6666"
let chances = 3
let saldo = 10000


//Enlazamos con el template

const depositarBtn = document.getElementById("dep")
const retirarBtn = document.getElementById("ret")
const transferirBtn = document.getElementById("trans")
const cambiarBtn = document.getElementById("change")
const salirBtn = document.getElementById("exit")
const showSaldo = document.getElementById("saldo")


//Eventos
depositarBtn.addEventListener("click", depositar)
retirarBtn.addEventListener("click", retirar)
transferirBtn.addEventListener("click", transferir)
cambiarBtn.addEventListener("click", cambiar)
salirBtn.addEventListener("click", salir)


function depositar() {
    let monto = parseFloat(prompt("Ingrese la cantidad a depositar"))
    if (isNaN(monto) || monto === 0) {
        alert("Cantidad invalida")
    } else {
        saldo += monto
        showSaldo.innerText = saldo.toFixed(2)
        alert(`Ha depositado ${monto} €`)
    }
    mostrarSaldo()
}

function retirar() {
    let monto = parseFloat(prompt("Ingrese la cantidad a retirar"))
    if (isNaN(monto) || monto === 0 || monto > saldo) {
        alert("Cantidad invalida")
    } else {
        saldo -= monto
        showSaldo.innerText = saldo.toFixed(2)
        alert(`Ha retirado ${monto} €`)

    }
    mostrarSaldo()
}

function transferir() {

    let espReg = /^(ES\d{22})$/
    let monto = parseFloat(prompt("Ingrese la cantidad a transferir"))
    let cuenta = prompt("Ingrese la cuenta destino")

    if (isNaN(monto) || monto === 0 || espReg.test(cuenta) == false) {
        alert("Cantidad o cuenta invalida")
    } else {
        saldo -= monto.toFixed(2)
        showSaldo.innerText = saldo.toFixed(2)
        alert(`Ha transferido ${monto} € a la cuenta ${cuenta}`)

    }
    mostrarSaldo()
}

function salir() {

    window.location.href = "./templates/exit.html"
}

function login() {
    let pin = prompt("Introduzca su pin")
    while (pin !== PIN_CORRECTO && chances > 1) {
        chances--
        alert(`PIN INCORRECTO. ${chances} intentos restantes`)
        let pin = prompt("Introduzca su pin")
    } if (pin === PIN_CORRECTO) {
        alert("Acceso Permitido")
    } else {
        window.location.href = "./templates/block.html"

    }

}

function mostrarSaldo() {
    showSaldo.innerText = saldo + "€"
}

function cambiar() {
    let pin = prompt("Si quiere cambiar la contraseña, introduzca la contraseña actual")
    if (pin !== PIN_CORRECTO) {
        alert("Contraseña Incorrecta")
    } else (
        PIN_CORRECTO = prompt("Introduzca su nueva contraseña")
    )

}


login()
mostrarSaldo()