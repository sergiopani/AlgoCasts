// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
//steps(4);
stepsRecursion(4);

function steps(n) {
    //For that iterate throught rows
    for(let row = 0; row<n; row++){
        //For each row create empty string
        let stair = '';
        for(let column = 0; column<n; column++){
            if(column <= row){
                stair += '#';
            }else{
                stair += ' ';
            }
        }
        console.log(stair);

    }


}

function stepsRecursion(n,row = 0,stair = ''){

    if(n === row){
        return;
    }
    
    if(n === stair.length){
        //Hit the end of the row
        console.log(stair);
        return stepsRecursion(n,row+1,'');
    }
    
    if(stair.length <= row){
        stair += '#';
    }else{
        stair += ' '
    }

    stepsRecursion(n,row,stair);

}

module.exports = steps;
