import express from 'express';
import indexController from './controller/index.js';
import aboutController from './controller/about.js';
import projetController from './controller/projet.js';

const router = express.Router();

router.get('/', indexController);
router.get('/about', aboutController);
router.get('/projet', projetController);

export default router;
