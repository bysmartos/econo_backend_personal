import Router from 'express';
import auth from '../middleware/auth';
import userController from '../controller/userController';
import jwtHandler from '../middleware/jwtHandler';



//import encryptPassword from '../middleware/auth';
const router = Router();

router.get('/user/all',userController.getUsers);
router.post('/user/register',auth.encryptPassword,userController.saveUser);
router.post('/user/login',auth.validateUser, userController.login);
router.put('/user/:id', userController.updateUser)

export default router;
