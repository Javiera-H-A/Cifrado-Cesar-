 const cipher = { 
  encode: (offset, valorTexto) => {

    if (typeof offset !== "number") {
      throw new TypeError ('${ offset } es distinto de {"number"}')
}
    if (typeof valorTexto!== "string") {
      throw new TypeError ('${ valorTexto } es distinto de {"string"}')
}
    let codigoGuardado="";
    let ascii;
    let palabraFinal="";
    let valorLetra="";
    
    for(let j=0; j< valorTexto.length; j++){
      valorLetra=valorTexto.charCodeAt(j);
      ascii=valorLetra;
      if ( 97<=valorLetra && valorLetra <= 122){
        ascii= valorLetra + offset %26; 
        if (ascii > 122) { 
          ascii = ascii -26;
          
        }
        else if (ascii < 97) {
          ascii= ascii +26;
        }
      }
      if ( 65<= valorLetra && valorLetra <=90){
        ascii= valorLetra + offset %26; 

        if (ascii > 90) { 
          ascii = ascii -26;
        }
        else if (ascii < 65) {
          ascii= ascii +26;
        }
      }
      codigoGuardado= String.fromCharCode(ascii);
      palabraFinal+= codigoGuardado;
    }
    return palabraFinal;
  },
  decode: (offset, valorTexto) => {

    if (typeof offset !== "number") {
      throw new TypeError ('${ offset } es distinto de {"number"}')
}
    if (typeof valorTexto!== "string") {
      throw new TypeError ('${ valorTexto } es distinto de {"string"}')
}
    let codigoGuardado="";
    let ascii;
    let palabraFinal="";
    let valorLetra="";
    offset=-offset;
    
    for(let j=0; j< valorTexto.length; j++){
      valorLetra=valorTexto.charCodeAt(j);
      ascii=valorLetra;
      if ( 97<=valorLetra && valorLetra <= 122){
        ascii= valorLetra + offset %26; 
        if (ascii > 122) { 
          ascii = ascii -26;
        }
        else if (ascii < 97) {
          ascii= ascii +26;
        }
      }
      if ( 65<= valorLetra && valorLetra <=90){
        ascii= valorLetra + offset %26; 
        if (ascii > 90) { 
          ascii = ascii -26;
        }
        else if (ascii < 65) {
          ascii= ascii +26;
        }
      }
      codigoGuardado= String.fromCharCode(ascii);
      palabraFinal+= codigoGuardado;
    }
    return palabraFinal;
  } 
};
export default cipher;