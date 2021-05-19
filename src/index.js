let codeMode=0;
function Codecero(codeMode){
    codeMode=0;
    document.getElementById("btnCodi").innerHTML= "Codificar";
  return codeMode
  }
  
  function Codeuno(codeMode){
    codeMode=1;
    document.getElementById("btnCodi").innerHTML= "Decodificar";
    return codeMode
  }
  
import cipher from './cipher.js';

document.getElementById("btnCodi").addEventListener('click',function(){
    let traeTexto = document.getElementById("boxMens");
    let valorTexto = traeTexto.value;
    let offset= parseInt(document.getElementById("numOffset").value);
    if (codeMode==0){
        document.getElementById("boxMenCodi").value=cipher.encode(offset,valorTexto);
    }
    else {
        document.getElementById("boxMenCodi").value=cipher.decode(offset,valorTexto);

    }
});

document.getElementById("linkCodi").addEventListener('click',function (){
    codeMode=Codecero(codeMode);
});

document.getElementById("linkDeco").addEventListener('click',function (){
    codeMode=Codeuno(codeMode);
});