let changes=0;

document.getElementById("linkEncode").addEventListener('click',function (){
    btnEncode();
});

document.getElementById("linkDecode").addEventListener('click',function (){
    btnDecode();
});

function btnEncode(){
    changes=0;
    document.getElementById("btnEncodeDecode").innerHTML= "Codificar";
  }
  
  function btnDecode(){
    changes=1;
    document.getElementById("btnEncodeDecode").innerHTML= "Decodificar";
  }
  

document.getElementById("btnEncodeDecode").addEventListener('click',function(){
    let bringText = document.getElementById("firstMessageBox");
    let textValue = bringText.value;
    let offset= parseInt(document.getElementById("numberOffset").value);

    if (changes==0){
        document.getElementById("secondMessageBox").value=cipher.encode(offset,textValue);
    }
    else {
        document.getElementById("secondMessageBox").value=cipher.decode(offset,textValue);

    }
});

import cipher from './cipher.js';
