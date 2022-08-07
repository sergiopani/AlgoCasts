// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0;
    const checker = ['a','e','i','o','u'];
    for(let character of str.toLowercase()){
        if(checker.includes(character)){
            count++;
        }
    }

    return count;
    
}

function vowels2(str){
    //Regular expresion 
    const matches = str.match(/[aeiou]/gi);
    //If this is a true values return the length of the matches array, if not return 0
    return matches ? matches.length : 0;
}


module.exports = vowels;
