// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    //Character maps
    //Helper functions
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    //Compare keys throught both maps to see if they are the same
    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        //No tienen los mismos caracteres por lo tanto no son iguales ya de primeras
        return false;
    }

    //Iterar en cada charMao
    for(let char in aCharMap){
        if(aCharMap[char] !== bCharMap[char]){
            return false;
        }
    }

    return true;


}


function buildCharMap(str){
    const charMap = {};
    //Tenemos que eliminar los espacios y los signos de exclamacion
    for(let char of str.toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1;

    }
}

module.exports = anagrams;
