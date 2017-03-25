function atbash(statement){
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var reverse = "zyxwvutsrqponmlkjihgfedcba";
	var decoded = '';

	for(var i = 0; i < statement.length; ++i){
		var letter = statement.charAt(i);
		var index = alphabet.indexOf(letter);
		var encryptedLetter = reverse.charAt(index);

		decoded += encryptedLetter;
	}
	return decoded;
}

atbash("abcdefghijklmnopqrstuvwxyz");

