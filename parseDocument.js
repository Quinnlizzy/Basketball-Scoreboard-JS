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
