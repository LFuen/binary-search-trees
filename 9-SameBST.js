// You are given two arrays which represent two sequences of keys that 
// are used to create two binary search trees. Write a program that will tell 
// whether the two BSTs will be identical or not without actually constructing 
// the tree. You may use another data structure such as an array or a linked 
// list but don't construct the BST. What is the time complexity of your algorithm? 

// E.g., 3, 5, 4, 6, 1, 0, 2 and 3, 1, 5, 2, 4, 6, 0 are two sequences of arrays but 
// will create the exact same BSTs and your program should return true.

// 3 -- 5 -- 4 -- 6 -- 1 -- 0 -- 2
//                3
//              /   \
//             1     5
//            / \   / \
//           0   2 4   6

// 3 -- 1 -- 5 -- 2 -- 4 -- 6 -- 0
//                3
//              /   \
//             1     5
//            / \   / \
//           0   2 4   6

// they both will end up the same because they have the same numbers
// but most importantly, they have the same root

// time complexity is 
