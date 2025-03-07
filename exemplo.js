alert("Olá mundo")

// prompt = faz a caixa de texto
 var test = prompt("Digite qualquer coisa")
 alert(test)

// = ele subtitui oque ta escrito
// += adiciona texto

function testTexto() {
    document.getElementById("titulo").innerHTML += ", bem vindo ao nosso site!"
}

function testColor() {
    const titulo = document.getElementById("titulo")

    titulo.style.color = "pink"
    titulo.style.fontSize = "30px"
}

function reset() {
    document.getElementById("titulo").innerHTML = "VICTORIA'S SECRETS"
}

function testInput() {
    document.getElementById("input").value = "Olá"
}
