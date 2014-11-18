function simulateTyping(str, textArea, demoPause) {
	  var currentLineIndex = 0;

	  function eachLine(){
	  	var currentCharIndex = 0;
	  	textArea.val('');
		if (currentLineIndex >= str.length) { return simulateTyping(demoText, input, demoPause); };
		var line = str[currentLineIndex];
		console.log('eachLine fired');
		currentLineIndex ++;

		typeChar();

			function typeChar(){
				console.log(line);
				var rand = Math.floor(Math.random() * (100)) + 50;
			 if (currentCharIndex >= line.length) { return setTimeout(function(){eachLine()}, demoPause);} else {demorun = setTimeout(typeChar, rand);}
			 var char = line[currentCharIndex];
			 textArea.val(textArea.val() + char);
			 currentCharIndex ++;
			 console.log(currentCharIndex);
		   } 
	  } 
	  eachLine();

}