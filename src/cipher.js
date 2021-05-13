function cipher() {
  let traeTexto = document.getElementById("boxMens");
  let valorTexto = traeTexto.value;
  let codigoGuardado="";
  let offset= parseInt(document.getElementById("numOffset").value);
  let ascii;
  let palabraFinal="";
  if (codeMode==1){
    offset= -offset;
  }
console.log(codeMode);
  for(let j=0; j< valorTexto.length; j++){
    valorLetra=valorTexto.charCodeAt(j);
    ascii=valorLetra;
    console.log("valorletra: "+ valorLetra);
    if ( 97<=valorLetra && valorLetra <= 122){
      ascii= valorLetra + offset; 
      if (ascii > 122) { 
        ascii = valorLetra -26 +  offset %26;
      }
      if (ascii < 97) {
        ascii= valorLetra +26 +  offset %26;
      }
    }
    
    if ( 65<= valorLetra && valorLetra <=90){
      ascii= valorLetra + offset; 
      if (ascii > 90) { 
        ascii = valorLetra -26 +  offset %26;
      }
      if (ascii < 65) {
        ascii= valorLetra +26 +  offset %26;
      }
    }
    
    codigoGuardado= String.fromCharCode(ascii);
    palabraFinal= palabraFinal + codigoGuardado;

  }

  document.getElementById("boxMenCodi").value= palabraFinal;
}
 

