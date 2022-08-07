// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }

}

class LinkedList {
    constructor(){
        //Cread linkedlist with no nodes asociaded with it
        this.head = null;
    }
    //Accepts any type of date to create a new node and assing to head
    insertFirst(data){        
        this.head = new Node(data, this.head);        
    }

    size(){
        //Iterate throught the list of nodes
        let counter = 0;
        let node = this.head;

        while(node){
            counter ++;
            node = node.next;            
        }

        return counter;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        //Returns the first node of the linklist
        if(!this.head){
            return null;
        }

        let node = this.head;
        
        while(node){
            if(!node.next){
                //If node.next doesnt exist --> return the current node
                return node;
            }
            node = node.next;
        }


        return node;
    }

    clear(){
        //Clear our list of any nodes, the garbage recollector eliminates all nodes
        this.head =  null;
    }

    removeFirst(){

        if(this.head){
            return;
        }
        
        this.head = this.head.next;        
    }

    removeLast(){
        //If the list is empty
        if(!this.head){
            return;
        }

        //If there is only one node
        if(!this.head.next){
            this.head = null;
            return;
        }

        //If there is more than one node element
        let previus = this.head;
        let node = this.head.next;
        
        while(node.next){
            previus = node;
            node = node.next;
        }
        previus.next = null;


    }

    insertLast(data){
        //If the list is empty
        if(this.getLast()){
            this.head = new Node(data);
        }else{               
            this.getLast().next = new Node(data);
        }
    }

    getAt(index){        
        let node = this.head;
        let count = 0;
        //If node is null means that the value is falsy
        while(node){
            if(count === index){
                return node;
            }
            node = node.next;
            count++;
        }

        return null;
    }

    removeAt(index){
        //If list is empty
        if(!this.head){
            return;
        }

        //Removes the first element
        if(index === 0){
            this.head = this.head.next;
            return;
        }

        //Find the previus node we want to remove
        const previous = this.getAt(index - 1);
        if(!previous || !previous.next){
            return;
        }

        previous.next = previous.next.next;

    }

    insertAt(data,index){
        //IF linkedlist is tottaly empty
        if(!this.head){
            this.head = new Node(data);
            return;
        }
        
        if(index === 0){
            this.head = new Node(data,this.head);
            return;
        }

        //If returns a falsy value it takes the last
        const previous = this.getAt(index-1) || this.getLast();
        let newNode = new Node(data,previous.next);
        previous.next = newNode;

        //If index if out of outs we can insert at the end of the list   
        
    }

    forEach(fn){
        let node = this.head;
        let counter = 0;

        while(node){
            fn(node,counter);
            node = node.next;
            counter++;
        }
    }
    
    *[Symbol.iterator](){
        let node = this.head;

        while(node){
            yield node;
            node = node.next;
        }
    }

}



const nodeOne = new Node(5);
const link = new LinkedList();
list.head = nodeOne;
//list.insertFirst(5);



module.exports = { Node, LinkedList };
