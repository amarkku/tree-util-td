// Type definitions for jsonwebtoken 7.2.2
// Project: https://www.npmjs.com/package/tree-util
// Definitions by: Alec Markk¨<https://github.com/amarkku>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

type DataObject = { [key: string]: any }

export interface TreeConfig {
    id: string
    parentId: string
}


export interface TreeNode {
    id: string
    parentid: string
    children: TreeNode[]
    dataObj: DataObject
    collectionnames: string[]

    //functions
    addChild(childNode: TreeNode): void
    removeChild(childNode: TreeNode): void
    addParent(parentNode: TreeNode): void
    removeParent(parentNode: TreeNode): void
    getAncestors(): TreeNode[]
    getDescendants(): TreeNode[]
    getRecursiveCollection(): string[]
    getRecursiveNodeData(): DataObject[]
    getSingleNodeData(): DataObject
    isAncestorOf(node: TreeNode): boolean
    isDescendantOf(node: TreeNode): boolean
    isLeaf(): boolean
    removeAllDescendants(): void
}

interface TreeBuilder {
    buildTrees(objectArray: DataObject[], config: TreeConfig): TreeNode[]
}

export default TreeBuilder

