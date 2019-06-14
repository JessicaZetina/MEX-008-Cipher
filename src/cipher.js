window.cipher = {
  // ...
};
function cifrar (elemento){
  var palabra = document.getElementsByTagName('input')[1].value;
  var palabra descifrar = btoa (palabra);
  document. getElementById("resultado") .innerHTML= palabra codificada;
}
