// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    //Convertir un string en un objeto
    //Hacer un mapa para guardar como KEY cara caracter del string 
    const charMap = {};
    let max = 0;
    let maxChar = '';
    for(let char of str){
        if(!charMap[char]){
            charMap[char] = 1;
        }else{
            charMap[char] ++;
        }
    }
    //Iterate throught our map and find the character that is most frequently used
    for(let char in charMap){
        if(charMap[char] >max){
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;    
    
}

module.exports = maxChar;
