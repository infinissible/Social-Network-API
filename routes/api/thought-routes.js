const router = require('express').Router();
const {
  getAllThought,
  addThought,
  removeThought,
} = require('../../controllers/thought-controller');

router.route('/').get(getAllThought);
// /api/thoughts/:userId
router.route('/').post(addThought);

// /api/thoughts/:userId/:thoughtId
router.route('/:thoughtId').delete(removeThought);

module.exports = router;
