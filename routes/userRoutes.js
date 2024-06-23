const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, userController.listUsers);
router.get('/:userId', authMiddleware, userController.getUser);
router.post('/', authMiddleware, userController.createUser);
router.put('/:userId', authMiddleware, userController.updateUser);
router.patch('/:userId', authMiddleware, userController.patchUser);
router.delete('/:userId', authMiddleware, userController.deleteUser);

module.exports = router;
