      document.getElementById("encryptMe").onclick = function (){
        var decoded = '';
        var valueInput = document.getElementById("input").value;

        for(var i = valueInput.length - 1; i > 0; i--){
          var letter = valueInput.charAt(i);
          
          if(letter == " "){
            var encryptedLetter = " ";
          }else{
            var encryptedLetter = letter;            
          }
          decoded += encryptedLetter;
        }
        document.getElementById("output").value = decoded;
      } 