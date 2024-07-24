function imc() {
    const massa = parseFloat(document.getElementById("weight").value);
    const altura = parseFloat(document.getElementById("height").value);
    const imc = (massa/(altura*altura)).toFixed(1);
    document.getElementById("valueimc").innerHTML = imc;
}

function soma() {
    const so1 = parseFloat(document.getElementById("so1").value);
    const so2 = parseFloat(document.getElementById("so2").value);
    const somar = (so1+so2);
    document.getElementById("valuesoma").innerHTML = somar;
}

function dividir() {
    const di1 = parseFloat(document.getElementById("di1").value);
    const di2 = parseFloat(document.getElementById("di2").value);
    const dividir = (di1/di2);
    document.getElementById("valuedivisao").innerHTML = dividir;
}

function subtrair() {
    const su1 = parseFloat(document.getElementById("su1").value);
    const su2 = parseFloat(document.getElementById("su2").value);
    const subtraido = (su1-su2);
    document.getElementById("valuesubtracao").innerHTML = subtraido;
}

function multiplicar() {
    const mu1 = parseFloat(document.getElementById("mu1").value);
    const mu2 = parseFloat(document.getElementById("mu2").value);
    const multiplicar = (mu1*mu2);
    document.getElementById("valuemultiplicacao").innerHTML = multiplicar;
}

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }

function fatorial () {
    var fat = document.getElementById("fat").value;
    document.getElementById("valuefatorado").innerText = factorialize(fat);
}

function juntanome () {
    var nome = document.getElementById("nome").value;
    var snome = document.getElementById("snome").value;
    var textoJunto = `${nome.trim()} ${snome.trim()}`
    document.getElementById("nomejntd").innerText = textoJunto
}

var div = document.getElementById("imagem-legal");
var display = 0;

function apareceSomeImagem() {
    if (display == 1) {
        div.style.display = 'block';
        display = 0;
    } 
    else {
        div.style.display = 'none';
        display = 1;
    }
}