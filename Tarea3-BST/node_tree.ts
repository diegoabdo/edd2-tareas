//Christian Andrés Villegas Velasco
//Diego José Abdo Estrada
export class NodeTree {
    private data: number;
    private leftChild!: NodeTree;
    private rightChild!: NodeTree;
    private parent!: NodeTree;

    constructor(data: number, isNull?:boolean) {
        this.data = data;

    }

    public getData(): number {
        return this.data;
    }

    public getLeftChild(): NodeTree {
        return this.leftChild;
    }

    public setLeftChild(leftChild: NodeTree): void {
        this.leftChild = leftChild;
    }

    public getRightChild(): NodeTree {
        return this.rightChild;
    }

    public setRightChild(rightChild: NodeTree): void {
        this.rightChild = rightChild;
    }

    public setParent(parent: NodeTree): void {
        this.parent = parent;
    }
}



/*
export class NullNodeTree extends NodeTree {
    constructor() {
        super(NaN); // Nodo sin datos
    }

    public getData(): number {
        throw new Error("Cannot get data from a NullNodeTree");
    }

    public setLeftChild(leftChild: NodeTree): void {
        throw new Error("Cannot set left child on a NullNodeTree");
    }

    public setRightChild(rightChild: NodeTree): void {
        throw new Error("Cannot set right child on a NullNodeTree");
    }

    public getNull():null{
        return null
    }
}
*/