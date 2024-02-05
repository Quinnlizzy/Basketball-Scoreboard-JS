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
    
    //number of spaces
    let numSpaces = documentWithoutLineOne.match(/ /g).length;
    
    //number of special characters
    let numSpec = documentWithoutLineOne.match(/[^\w\s]/g).length;
    
    //number of questions
    let numQuestionMarks = documentWithoutLineOne.match(/\?/g);
    if (numQuestionMarks !== null) {
        return numQuestionMarks.length;
    };
    let numQuestion = numQuestionMarks;
    
    //number of words (total)
    let words = documentWithoutLineOne.split(/\s+/);
    let numWords = words.length;
    
    //number of monetary values
    let costings = documentWithoutLineOne.match(/[£$€]/g);
    if (costings !== null) {
        return costings.length;
    };
    let numCostings = costings;
    
    //number of words of (x) length
    let oneLetterWords = documentWithoutLineOne.match(/\b[a-zA-Z]\b/g).length
    let twoLetterWords = documentWithoutLineOne.match(/\b[a-zA-Z]{2}\b/g).length
    let threeLetterWords = documentWithoutLineOne.match(/\b[a-zA-Z]{3}\b/g).length
    let fourLetterWords = documentWithoutLineOne.match(/\b[a-zA-Z]{4}\b/g).length
    let fiveLetterWords = documentWithoutLineOne.match(/\b[a-zA-Z]{5}\b/g).length
    let sixLetterWords = documentWithoutLineOne.match(/\b[a-zA-Z]{6}\b/g).length
    let sevenLetterWords = documentWithoutLineOne.match(/\b[a-zA-Z]{7}\b/g).length
    let eightLetterWords = documentWithoutLineOne.match(/\b[a-zA-Z]{8}\b/g).length
