701. Insert into a Binary Search Tree
You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

Example 1:
Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]
Explanation: Another accepted tree is:

Constraints:
The number of nodes in the tree will be in the range [0, 104].
-108 <= Node.val <= 108
All the values Node.val are unique.
-108 <= val <= 108
It's guaranteed that val does not exist in the original BST.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
//learned about Binary Tree with NYC Coders, pair programming by Lucas Chen and with Ameya
var insertIntoBST = function(root, val) {
    // If no root exists set root to new node and return
    const newNode = new TreeNode(val)
    if (!root) return newNode
 
    // Create a current node variable and set it to root
    // Repeat until insertion
    let currentNode = root

    while (currentNode) {
        if (val < currentNode.val) {
        // If val < current node val
        // If no left child on current node, add new node to left
           
            if (!currentNode.left) {
             
                currentNode.left = newNode
          
                break
           
            }
            currentNode = currentNode.left
        } else if (val > currentNode.val) {
        // Else set current node to left child
        // If val > current node val
        // If no right child on current node, add new node to right
            if (! currentNode.right) {
                currentNode.right = newNode
                break
            }
            currentNode = currentNode.right
        } else {
            currentNode.right = newNode
        // Else set current node to right child       
        }
    }
    return root

};