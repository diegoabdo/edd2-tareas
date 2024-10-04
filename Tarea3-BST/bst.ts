// Diego José Abdo Estrada
// Christian Andrés Villegas Velasco
import { NodeTree } from "./node_tree";

let found:boolean = false;
class BST{
    private root: NodeTree;
    private NULL:NodeTree;
    
    constructor(){
        this.NULL = new NodeTree(0, true)
        this.root = this.NULL;

    }

    public setRoot(newRoot:NodeTree):void{
        this.root = newRoot;

    }

    public getRoot():NodeTree{
        return this.root

    }

    public insertar(data:number): void{
        let newNode:NodeTree = new NodeTree(data);
        let parent:NodeTree = this.NULL;
        let current:NodeTree = this.root;
        newNode.setLeftChild(this.NULL);
        newNode.setRightChild(this.NULL);
        while(current !== this.NULL){
            parent = current
            if(newNode.getData() < current.getData()){
                current = current.getLeftChild();

            }else{
                current = current.getRightChild();
            }
        }
        newNode.setParent(parent);
        if (parent === this.NULL){
            this.root = newNode;
        }else if(newNode.getData() < parent.getData()){
            parent.setLeftChild(newNode);

        }else{
            parent.setRightChild(newNode);
        }
    }
    public search(dataToSearch:number):number{
        let data:number = -1;
        let current:NodeTree = this.root;
        while (current != this.NULL){
            if (current.getData() == dataToSearch){
                data = current.getData();
                break;
            }else if(dataToSearch < current.getData()){
                current = current.getLeftChild();

            }else{
                current = current.getRightChild();
            }

        }

        return data;
    }

    public printAll(){
        this.printNode(this.root)

    }
    private printNode(node: NodeTree): void{
        if (node != this.NULL) {
            this.printNode(node.getLeftChild())
            console.log(node.getData())
            this.printNode(node.getRightChild())
        }
    }

    public searchRecursive(dataToSearch:number): boolean{
        return this.searchNode(this.root, dataToSearch)
    }
    private searchNode(node: NodeTree, dataToSearch: number): boolean{

        if (node != this.NULL) {
            this.searchNode(node.getLeftChild(), dataToSearch)
            if (dataToSearch == node.getData())
                found = true;
            
            this.searchNode(node.getRightChild(), dataToSearch)
            
        }
        return found

    }
}

let myBinarySearchTree:BST = new BST();
myBinarySearchTree.insertar(10);
myBinarySearchTree.insertar(7);
myBinarySearchTree.insertar(100);
myBinarySearchTree.insertar(3);
myBinarySearchTree.insertar(38);
if (myBinarySearchTree.search(10)!= -1){
    console.log("Dato encontrado")
}else{
    console.log("El dato no existe")
}
myBinarySearchTree.printAll()

if (myBinarySearchTree.searchRecursive(5)== true){
    console.log("Dato encontrado")
}else{
    console.log("El dato no existe")
}