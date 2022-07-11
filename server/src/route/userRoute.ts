import Router from 'express';
import auth from '../middleware/auth';
import userController from '../controller/userController';
//import encryptPassword from '../middleware/auth';
const router = Router();

router.get('/user/all',userController.getUsers);
router.post('/user/register',auth.encryptPassword,userController.saveUser);
router.post('/user/login',auth.validateUser, userController.login);

export default router;