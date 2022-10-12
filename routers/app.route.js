import express from 'express';
import multer from "multer";
import path from 'path';

import * as app_controller from '../controllers/app.controller.js';

const router = express.Router();


//multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });

const upload = multer({storage:storage})

router.get('/',app_controller.index);
router.get('/folders',app_controller.folders);

router.get('/folders/:foldername',app_controller.removeFolder);


router.post('/extracted',upload.array('files'),app_controller.extraction);
router.post('/create-folder',app_controller.createFolder);

export default router;
