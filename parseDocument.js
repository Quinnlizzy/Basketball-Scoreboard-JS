function parseDocument(document)
{
    let documentWithoutLineOne = document.substring(document.indexOf('\n') + 1);
    //number of lines
    //split the doc into an array of lines
    let lines = documentWithoutLineOne.split(/\r\n|\r|\n/);
    let numLines = lines.length;
    
    //number of characters - just docu .length?
    
    let numCharacters = documentWithoutLineOne.length;
    
    //number of letters
    //all case, a-z match
    let numLetters = documentWithoutLineOne.match(/[a-zA-Z]/g).length;
    
    //upp
    let numUppLetters = documentWithoutLineOne.match(/[A-Z]/g).length;
    
    //low
    let numLowLetters = documentWithoutLineOne.match(/[a-z]/g).length;
    
    //number of digits - match process produces null not 0?
    let numDigitsMatches = documentWithoutLineOne.match(/\d/g);
    if (numDigitsMatches !== null) {
        return numDigitsMatches.length;
    }
    let numDigits = numDigitsMatches;
    
    //number of whole numbers? (maybe) - will need null handling again
    let wholeNumbersMatches = documentWithoutLineOne.match(/\b\d+\b/g)
    if (wholeNumbersMatches !== null) {
        return wholeNumbersMatches.length;
    };
    let wholeNumbers = wholeNumbersMatches;

