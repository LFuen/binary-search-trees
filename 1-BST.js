// Given the data: 3, 1, 4, 6, 9, 2, 5, 7 : if you were to insert this into
// an empty search tree, what would it look like?

//        3
//      /   \
//     1     4
//      \      \
//       2      6
//            /   \
//           5     9
//                /
//               7



// draw with the keys : E A S Y Q U E S T I O N


const BinarySearchTree = require('./BinarySearchTree')
const bst = new BinarySearchTree()

bst.insert(0, 3)
bst.insert(1, 1)
bst.insert(2, 4)
bst.insert(3, 6)
bst.insert(4, 9)
bst.insert(5, 2)
bst.insert(6, 5)
bst.insert(7, 7)

// bst.insert(0, 'E')
// bst.insert(1, 'A')
// bst.insert(2, 'S')
// bst.insert(3, 'Y')
// bst.insert(4, 'Q')
// bst.insert(5, 'U')
// bst.insert(6, 'E')
// bst.insert(7, 'S')
// bst.insert(8, 'T')
// bst.insert(9, 'I')
// bst.insert(10, 'O')
// bst.insert(11, 'N')
console.log(bst)

