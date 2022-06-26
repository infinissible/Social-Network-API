const router = require('express').Router();
const {
  getAllThought,
  addThought,
  addReaction,
  removeThought,
  removeReaction,
  getThoughtById,
  updateThoughtById,
} = require('../../controllers/thought-controller');

// /api/thoughts to get all thoughts
router.route('/').get(getAllThought);

// /api/thoughts/:thoughtId to get and update thought
router.route('/:thoughtId').get(getThoughtById).put(updateThoughtById);

// /api/thoughts/ to create thought
router.route('/').post(addThought);

// /api/thoughts/:userId/:thoughtId to delete thoughts
router.route('/:userId/:thoughtId').delete(removeThought);

// /api/thoughts/:thoughtId/reactions to create and delete reaction
router.route('/:thoughtId/reactions/').post(addReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);
module.exports = router;
