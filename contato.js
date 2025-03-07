function limpaInput() {
    const confirmar = confirm("Deseja continuar?")
    if (confirmar){
        document.getElementById("exibirtext"). value = ""
        document.getElementById("exibirtext1"). value = ""
        document.getElementById("exibirtext2"). value = ""
        document.getElementById("exibirtext3"). value = ""
        document.getElementById("exibirtext4"). value = ""
        document.getElementById("exibirtext5"). value = ""
    }
}

function testTexto() {
    const titulo= document.getElementById("titulo")

    titulo.style.color = "white"
}

function testTexto1() {
    const titulo1= document.getElementById("titulo1")

    titulo1.style.color = "white"
}

function testTexto2() {
    const titulo2= document.getElementById("titulo2")

    titulo2.style.color = "white"
}

function testTexto3() {
    const titulo3= document.getElementById("titulo3")

    titulo3.style.color = "white"
}

function testTexto4() {
    const titulo4= document.getElementById("titulo4")

    titulo4.style.color = "white"
}

function testTexto5() {
    const titulo5= document.getElementById("titulo5")

    titulo5.style.color = "white"
}

function testInput() {
     document.getElementById("exibirtext").value = "Júlia"
}

function testInput1() {
     document.getElementById("exibirtext1").value = "Lemos"
}

function testInput2() {
     document.getElementById("exibirtext2").value = "Julialemosr"
}

function testInput3() {
     document.getElementById("exibirtext3").value = "Julialemosr@gmail.com"
}

function testInput4() {
     document.getElementById("exibirtext4").value = "18996959028"
}

function testInput5() {
     document.getElementById("exibirtext5").value = "ju.lemos_"
}