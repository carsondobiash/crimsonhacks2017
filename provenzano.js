function encrypt(){
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        var decoded = '';
        var valueInput = document.getElementById("input").value;
        var kmove=document.getElementById("key").value;
        for(var i = 0; i < valueInput.length; ++i){
          var letter = valueInput.charAt(i).toLowerCase();
          if(letter == " "){
            var encryptedLetter = " ";
          }else{
            for (var j = 0;j<alphabet.length; j++) {
              if(alphabet.charAt(j)==letter){
                var encryptedLetter = ((j + parseInt(kmove))%26).toString() + " ";
              }
            }           
          }
          decoded += encryptedLetter;
        }
        document.getElementById("output").value = decoded;
      } 
function decrypt (){
       var alphabet = "abcdefghijklmnopqrstuvwxyz";
        var decoded = '';
        var valueInput = document.getElementById("input").value;
        var kmove=document.getElementById("key").value;
        for(var i = 0; i < valueInput.length; ++i){
          var num = parseInt(valueInput.charAt(i));
          if(num == " "){
            var encryptedLetter = " ";
          }else{
            var encryptedLetter = (alphabet.charAt(num+j)).toString() + " ";           
          }
          decoded += encryptedLetter;
        }
        document.getElementById("output").value = decoded;
      } 
