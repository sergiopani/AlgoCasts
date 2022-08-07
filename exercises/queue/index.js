// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    //The storage of data
    //The constructor will automatically call when we call a new queue
    constructor(){
        this.data = [];
    }

    add(record){
        //add the data to the front
        this.data.unshift(record);
    }

    remove(record){
        //Remove the record of the end of the cue and returning to work with it
        return this.data.pop(record);
    }

}

module.exports = Queue;
