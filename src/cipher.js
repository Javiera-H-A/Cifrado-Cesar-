 const cipher = { 
  encode: (offset, textValue) => {

    if (typeof offset !== "number") {
      throw new TypeError ('${ offset } es distinto de {"number"}')
    }
    if (typeof textValue!== "string") {
      throw new TypeError ('${ textValue } es distinto de {"string"}')
    }
    
    let letterValue;    
    let ascii;
    let savedCode;
    let finalWord="";
    
    
    for(let j=0; j< textValue.length; j++){
      letterValue=textValue.charCodeAt(j);
      ascii=letterValue;

      if ( 97<=letterValue && letterValue <= 122){
        ascii= letterValue + offset %26; 

        if (ascii > 122) { 
          ascii = ascii -26;
          
        }
        else if (ascii < 97) {
          ascii= ascii +26;
        }
      }
      if ( 65<= letterValue && letterValue <=90){
        ascii= letterValue + offset %26; 

        if (ascii > 90) { 
          ascii = ascii -26;
        }
        else if (ascii < 65) {
          ascii= ascii +26;
        }
      }
      savedCode= String.fromCharCode(ascii);
      finalWord+= savedCode;
    }
    return finalWord;
  },
  decode: (offset, textValue) => {

    if (typeof offset !== "number") {
      throw new TypeError ('${ offset } es distinto de {"number"}')
    }
    if (typeof textValue!== "string") {
      throw new TypeError ('${ textValue } es distinto de {"string"}')
    }
    
    let letterValue;
    let ascii;
    let savedCode;
    let finalWord="";
    offset=-offset;
    
    for(let j=0; j< textValue.length; j++){
      letterValue=textValue.charCodeAt(j);
      ascii=letterValue;

      if ( 97<=letterValue && letterValue <= 122){
        ascii= letterValue + offset %26; 

        if (ascii > 122) { 
          ascii = ascii -26;
        }
        else if (ascii < 97) {
          ascii= ascii +26;
        }
      }
      if ( 65<= letterValue && letterValue <=90){
        ascii= letterValue + offset %26; 

        if (ascii > 90) { 
          ascii = ascii -26;
        }
        else if (ascii < 65) {
          ascii= ascii +26;
        }
      }
      savedCode= String.fromCharCode(ascii);
      finalWord+= savedCode;
    }
    return finalWord;
  } 
};
export default cipher;