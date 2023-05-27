function encriptar (){
    var texto = document.querySelector("#texto").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".encriptado").value = textoCifrado;
    document.querySelector("#encriptado").value;
    document.getElementById("img").style.visibility = "hidden";
    document.getElementById("texto-info").style.visibility = "hidden";
    document.getElementById("copiar").style.visibility = "visible";
    document.getElementById("muestra").style.visibility = "hidden"
    document.getElementById("encriptado").style.visibility = "visible";
    document.querySelector("#texto").value = "";
    }
    
var boton1 = document.querySelector("#encriptar"); boton1.onclick = encriptar;


function desencriptar (){ 
    var texto = document.querySelector("#encriptado").value; 
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector(".texto").value = textoCifrado; 
    document.querySelector("#texto").value;
    document.getElementById("img").style.visibility = "visible";
    document.getElementById("texto-info").style.visibility = "visible";
    document.getElementById("copiar").style.visibility = "hidden";
    document.getElementById("muestra").style.visibility = "visible"
    document.getElementById("encriptado").style.visibility = "hidden";
    document.querySelector("#encriptado").value = "";
}

var boton2 = document.querySelector("#desencriptar"); boton2.onclick = desencriptar;

function copiar(){
    encriptado.select();
    navigator.clipboard.writeText(encriptado.value)
    mensaje.value = "";
    alert("Texto Copiado");
}
