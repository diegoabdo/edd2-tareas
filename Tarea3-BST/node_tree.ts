

export class NodeTree {
    private data: number;
    private leftChild: NodeTree;
    private rightChild: NodeTree;
    private parent: NodeTree | null;

    constructor(data: number) {
        this.data = data;
        this.leftChild = new NullNodeTree();
        this.rightChild = new NullNodeTree(); 
        this.parent = null;
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

    public setParent(parent: NodeTree | null): void {
        this.parent = parent;
    }
}

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
}