const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Please insert text for conversion: ', (answer) => {
  var convertedText = convertToMeme(answer);
  console.log(convertedText);
  rl.close();
});

function convertToMeme(memeString) {
    var convertedLetters = '';
    var upperLowerToggle = false;
    var memeStringLower = memeString.toLowerCase();
    var memeStringAsArray = memeStringLower.split('');
    
    memeStringAsArray.forEach(function(letter) {
        if(/^[a-zA-Z]+$/.test(letter)) {
            upperLowerToggle = !upperLowerToggle;
            if(upperLowerToggle) {
                convertedLetters += letter;
            } else {
                convertedLetters += letter.toUpperCase();
            }
        } else {
            convertedLetters += letter;
        }
    });

    return convertedLetters;
}
