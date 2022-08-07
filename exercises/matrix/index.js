// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
matrix(3);

function matrix(n) {
    let results = [];
    //Create the empty arrays of arrays
    for(let array = 0; array<n; array++){
        results.push([]);
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n-1;
    let startRow = 0;
    let endRow = n-1;

    while(startColumn <= endColumn && startRow <= endRow){
        //Loop for the first row
        for(let i = startColumn; i<=endColumn; i++){
            results[startRow][i] = counter;
            counter++;
        }
        //Loop for the rigth values
        startRow++;
        for(let i = startRow; i<=endRow;i++){
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;
        //Bottom row
        for(let i = endColumn; i>=startColumn;i--){
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;
        //Loop from our end row througt the start row
        for(let i = endRow; i>=startRow; i--){
            results[i][startColumn] = counter;
            counter++;
        }

        startColumn++;
    }
}

module.exports = matrix;
