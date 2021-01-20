// Show how the tree in 1-BST would look if you deleted the root of
// each tree.

// delete 3 / 1 / 6 / 9

//        3
//      /   \
//     1     4
//      \      \
//       2      6
//            /   \
//           5     9
//                /
//               7

//        4
//      /   \
//     2     7
//          /   
//         5    


const BinarySearchTree = require('./BinarySearchTree')
const bst = new BinarySearchTree()

bst.insert(3, 'ROOT')
bst.insert(1, 'L-ONE')
bst.insert(4, 'R-ONE')
bst.insert(6, 'R-TWO')
bst.insert(9, 'R-THREE')
bst.insert(2, 'L-ONE-R-ONE')
bst.insert(5, 'R-TWO-L-ONE')
bst.insert(7, 'R-THREE-L-ONE')
bst.remove(3)
bst.remove(1)
bst.remove(6)
bst.remove(9)

console.log(bst)
