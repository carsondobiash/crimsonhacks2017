      document.getElementById("encryptMe").onclick = function (){
        var decoded = '';
        var valueInput = document.getElementById("input").value;
        valueInput.replace(/\s+/, "");
        var rails=parseInt(document.getElementById("rail").value);
        var numInGroup=valueInput.length/rails;
        for(var j=0; j<rails;j++){
          for(var i = 0; i <valueInput.length; i+=rails){
            var letter = valueInput.charAt(j+i);
            decoded += encryptedLetter;
          }
        }
        document.getElementById("output").value = decoded;
      } 