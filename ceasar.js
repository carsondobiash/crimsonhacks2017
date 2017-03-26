
letters = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z']

function ceasarEncode(message, key) {
  var code = ""

  for(var i = 0; i < message.length; i++) {
    if(letters.indexOf(message[i]) != -1) {
      code += letters[(letters.indexOf(message[i]) + 2 * key) % 52];
    }
    else code += message[i];
  }

  return code;
}

function ceasarDecode(code, key) {
  var message = ""

  for(var i = 0; i < code.length; i++) {
    if(letters.indexOf(code[i]) != -1) {
      var index = letters.indexOf(code[i]) - 2 * key;
      if(index < 0) {
        message += letters[52 - (Math.abs(index) % 52)];
      }
      else message += letters[index % 52];
    }
    else message += code[i];
  }

  return message;
}

console.log(ceasarEncode("xyz", 59));
console.log(ceasarDecode("efg", 59));
console.log(ceasarDecode(ceasarEncode("xyz", 59), 59));
