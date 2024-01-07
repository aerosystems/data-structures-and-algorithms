class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
 
class BST {
    constructor() {
        this.root = null;
    }

	insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let tmp = this.root;
        while(true){
            if (tmp.value === newNode.value) return undefined;
            if (newNode.value < tmp.value) {
                if (!tmp.left) {
                    tmp.left = newNode;
                    return this;
                }
                tmp = tmp.left;
            } else {
                if (!tmp.right) {
                    tmp.right = newNode;
                    return this;
                }
                tmp = tmp.right;
            }
        }
    }

}



function test() {

    let myBST = new BST();

    myBST.insert(2);
    myBST.insert(1);
    myBST.insert(3);

    /*
        THE LINES ABOVE CREATE THIS TREE:
                     2
                    / \
                   1   3
    */


    console.log("Root:", myBST.root.value);
    console.log("\nRoot->Left:", myBST.root.left.value);
    console.log("\nRoot->Right:", myBST.root.right.value);
}


test();


/*
    EXPECTED OUTPUT:
    ----------------
    Root: 2

    Root->Left: 1

    Root->Right: 3

*/
      
