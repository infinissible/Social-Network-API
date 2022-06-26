const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  createFriendAndAddToList,
  removeFriend,
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router.route('/').get(getAllUser).post(createUser);

// Create a new friend and add to a user's friend list
router.route('/:userId/friends').post(createFriendAndAddToList);

// Remove a friend in the user's friend list
router.route('/:userId/friends/:friendId').delete(removeFriend);

// Set up GET one, PUT, and DELETE at /api/users/:id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
