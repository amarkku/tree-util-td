// Type definitions for jsonwebtoken 7.2.2
// Project: https://www.npmjs.com/package/tree-util
// Definitions by: Alec Markk¨<https://github.com/amarkku>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

type DataObject = { [key: string]: any }

export interface TreeConfig {
    id: string
    parentid: string
}

export interface RootNode {
    rootNode: TreeNode
    config: TreeConfig

    addData(objectArray: DataObject, config: TreeConfig): void
    getNodeById(id: string): TreeNode | undefined
    createNode(dataObj: DataObject): TreeNode
}


export interface TreeNode {
    id: string
    parentid: string
    children: TreeNode[]
    dataObj: DataObject
    collectionnames: string[]
    rootNode: TreeNode

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
    getNodeById(id: string): TreeNode | undefined
}

interface TreeBuilder {
    buildTrees(objectArray: DataObject[], config: TreeConfig): RootNode[]
}

export default TreeBuilder

