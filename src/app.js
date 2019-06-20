let botonCifrar = document.getElementById("cifrar");
botonCifrar.addEventListener("click",()=> {
let cajaCifrar = document.getElementById("resultado");
let string = cajaCifrar.value.toUpperCase()
let offset = document.getElementById("nivel").value
let resultadoCifrado = window.cipher.encode(offset,string);
//cajaResultado.value = resultadoCifrado
});
