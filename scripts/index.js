//Autor: MArio ALfonso Nuñez (DAW)
//GitHub:

//Variables
const PIN_CORRECTO = "6666"
let chances = 3
let saldo = "10000"


//Enlazamos con el template

const depositarBtn = document.getElementById("dep")
const retirarBtn = document.getElementById("ret")
const transferirBtn = document.getElementById("trans")
const cambiarBtn = document.getElementById("change")
const salirBtn = document.getElementById("exit")
const showSaldo = document.getElementById("saldo")

//Eventos
depositarBtn.addEventListener("click", depositar())
retirarBtn.addEventListener("click", retirar())
transferirBtn.addEventListener("click", transferir())
salirBtn.addEventListener("click", salir())


function mostrarSaldo(){
    showSaldo.innerText = saldo
}

function depositar(){
    let monto = parseFloat(prompt("Ingrese la cantidad a depositar"))
    if(isNaN(monto) || monto === 0){
        alert("Cantidad invalida")
    }else{
        saldo += monto.toFixed(2)
        mostrarSaldo()
    }
    }

    function retirar(){
        let monto = parseFloat(prompt("Ingrese la cantidad a retirar"))
        if(isNaN(monto) || monto === 0 || monto > saldo){
            alert("Cantidad invalida")
        }else{
            saldo -= monto.toFixed(2)
            mostrarSaldo()
        }
        }

    function transferir(){
        let monto = parseFloat(prompt("Ingrese la cantidad a retirar"))
        let cuenta = promt("Ingrese la cuenta destino")
        if(isNaN(monto) || monto === 0){
            alert("Cantidad invalida")
        }else{
            saldo -= monto.toFixed(2)
            mostrarSaldo()
        }

    }

    function salir(){
        window.location.href = /template/exit.html

    }

    function login(){
        let pin = prompt("Introduzca su pin")
        while(pin !== PIN_CORRECTO || chances > 1){
            chances --
            alert(`PIN INCORRECTO. ${chances} intentos restantes`)
        }if(pin === PIN_CORRECTO){
            alert("Acceso Permitido")
        }else{
            window.location.href = /template/block.html
        }
    }

    mostrarSaldo()