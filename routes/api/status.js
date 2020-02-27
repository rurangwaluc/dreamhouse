const express = require('express');
const router = express.Router();


const {
  userById
} = require('../../controllers/user');
const {
  create,
  statusById,
  read,
  update,
  remove,
  list
} = require('../../controllers/status');
const {

  requireSignin,
  isAuth,
  isAdmin
} = require('../../controllers/auth');


router.get('/statuses', list);
router.get('/:statusId', read);
router.post('/create/:userId', requireSignin, isAdmin, isAuth, create);
// router.put('/status/:statusUpdateId/:userId', requireSignin, isAuth, isAdmin, update);
router.put('/:statusId/:userId', requireSignin, isAdmin, isAuth, update);

router.delete('/:statusId/:userId', requireSignin, isAdmin, isAuth, remove);

router.param('statusId', statusById);
router.param('userId', userById)



module.exports = router;