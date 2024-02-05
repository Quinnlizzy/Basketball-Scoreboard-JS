function parseDocument(document)
{
    let documentWithoutLineOne = document.substring(document.indexOf('\n') + 1);
    //number of lines
    //split the doc into an array of lines
    let lines = documentWithoutLineOne.split(/\r\n|\r|\n/);
    let numLines = lines.length;
