      document.getElementById("encryptMe").onclick = function (){
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        var decoded = '';
        var valueInput = document.getElementById("input").value;
        var kmove=document.getElementById("key").value;
        for(var i = 0; i < valueInput.length; ++i){
          var letter = valueInput.charAt(i);
          if(letter == " "){
            var encryptedLetter = " ";
          }else{
            for (var j = 0;j<alphabet.length; j++) {
              if(alphabet.charAt(j)==letter.isLower()){
                var encryptedLetter = j + kmove;
              }
            }           
          }
          decoded += encryptedLetter;
        }
        document.getElementById("output").value = decoded;
      } 