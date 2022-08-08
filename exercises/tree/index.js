// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data){
        this.data = data;
        //Array to store the child nodes
        this.children = [];
    }

    add(data){        
        //Add a node to the children array
        this.children.push(new Node(data));
    }

    remove(data){
        //Througt every child of the current node        
        this.children = this.children.filter(node => {
            return node.data !== data
        });

    }


}

class Tree {
    //When we first create a root alwaysis a null
    constructor(){
        this.root = null;
    }

    traverseBF(fn){
        //get the root node of our tree
        const arr = [this.root];

        while(arr.length){
            //Take out the first element of the array
            const node = arr.shift();
            //Add all children of the root array
            //... => Take every element of the array and push them one by one
            // into array
            arr.push(...node.children);
            
            //Throwing waway
            fn(node);
        }

    }


    traverseDF(fn){
        const arr = [this.root];

        while(arr.length){
            const node = arr.shift();
            //Add element at the from of the array
            arr.unshift(...node.children);

            //Throwing away de node
            fn(node);
        }

    }

}

module.exports = { Tree, Node };
