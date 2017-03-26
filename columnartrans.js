      document.getElementById("encryptMe").onclick = function (){
        var decoded = '';
        var valueInput = document.getElementById("input").value;
        valueInput.replace(/\s+/, "");
        var keyword=document.getElementById("key").value;
        var numInGroup=valueInput.length/keyword.length;
        for(var j=0; j<rails;j++){
          for(var i = 0; i <valueInput.length; i+=rails){
            var letter = valueInput.charAt(j+i);
            decoded += encryptedLetter;
          }
        }
        document.getElementById("output").value = decoded;
      } 
document.getElementById("encryptMe").onclick = function (){
        var decoded = '';
        var valueInput = document.getElementById("input").value;
        valueInput=valueInput.replace(/\s+/, "");
        var keyword=document.getElementById("keyword").value;
        var keys=[];
        for(var l=0;l<keyword.length;l++){
          keys[l]=keyword.charAt(l);
        }
        keys.sort();
        while(valueInput.length%keyword.length!=0){
          valueInput+=" ";
        }
        var matrix = [];
          for(var r=0; r<(valueInput.length/keyword.length); r++) {
              matrix[r] = new Array(keyword.length);
          }
        for(var i=0; i<(valueInput.length/keyword.length); i++) {
          for(var j=0; j<keyword.length; j++) {
            matrix[i][j] = valueInput.charAt(i+j);
          }
        }
        for (var k =0; k<keyword.length; k++) {
          for(var m=0; m<keyword.length;m++){
            if(keys[k]==keyword.charAt(m)){
              for(var i=0;i<(valueInput.length/keyword.length);i++){
                decoded+=matrix[i][m];
              }
            }
          }
        }
        decoded=decoded.replace(/\s+/, "");
        document.getElementById("output").value = decoded;
      } 