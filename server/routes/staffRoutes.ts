import { Router } from 'express';
import { getStaff, getOneStaff, createStaff, editStaff, deleteStaff } from '../controllers/staffController';

const router = Router();

router.get('/', getStaff);
router.get('/:id', getOneStaff);
router.post('/', createStaff);
router.put('/:id', editStaff);
router.delete('/:id', deleteStaff);

export default router;