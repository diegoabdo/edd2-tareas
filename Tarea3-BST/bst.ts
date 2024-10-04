// Diego Abdo
// Christian Villegas

import { NodeTree } from "./node_tree";
import { NullNodeTree } from "./node_tree";

class BST {
    private root: NodeTree | null;

    constructor() {
        this.root = new NullNodeTree(); 
    }


    private setRoot(newRoot: NodeTree): void {
        this.root = newRoot;
    }

    public getRoot(): NodeTree | null {
        return this.root;
    }

     public insert(data: number): void {
        //
    }


    public search(dataToSearch: number): number {
        //
    }

    private printNode(nodo: NodeTree | null): void {
     //
    }

    public printAll(): void {
       //
    }
}
