// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const words = [];

    for (let word of str.split(' ')){
        words.push(word[0].toUpperCase() + word.slice(1));
        
    }
    
    return words.join(' ');


}


function capitalize2(str){
    let result = str[0].toUpperCase();

    for(let char of str){
        //Si el caracter que viene despues es un espacio capitalizamos y añadimos a result
        if(str[char + 1] === ' '){
            result += char.toUpperCase();
        }else{
            result += char;
        }
        //Sino añadimos directamente a result
    }

    return result;

}



module.exports = capitalize;
