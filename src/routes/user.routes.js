const router = require('express').Router();
const userController = require('../controllers/user/user.controller');

router.get('/', userController.index);
router.get('/:id', userController.show);
router.post('/', userController.store);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;