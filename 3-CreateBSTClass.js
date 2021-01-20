// Walk through the code in the curriculum and understand it well. Write a
// BinarySearchTree class with it's core functions, insert, remove, find.
// -- create a binary search tree called BST and insert:
//      3, 1, 4, 6, 9, 2, 5, 7
// -- create a binary search tree called BST and insert:
//      E A S Y Q U E S T I O N


const BinarySearchTree = require('./BinarySearchTree')

function main() {
    const bst = new BinarySearchTree()

// bst.insert(3, 'ROOT')
// bst.insert(1, 'L-ONE')
// bst.insert(4, 'R-ONE')
// bst.insert(6, 'R-TWO')
// bst.insert(9, 'R-THREE')
// bst.insert(2, 'L-ONE-R-ONE')
// bst.insert(5, 'R-TWO-L-ONE')
// bst.insert(7, 'R-THREE-L-ONE')

bst.insert('E', 1)
bst.insert('A', 2)
bst.insert('S', 3)
bst.insert('Y', 4)
bst.insert('Q', 5)
bst.insert('U', 6)
bst.insert('E', 7)
bst.insert('S', 8)
bst.insert('T', 9)
bst.insert('I', 10)
bst.insert('O', 11)
bst.insert('N', 12)
console.log(bst)
}

main()