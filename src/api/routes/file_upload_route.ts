import { Router } from "express";
import TaskController from "../../db/controllers/task_controller";

import parseFile from "../helpers/file_parser";
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

 

const FileUploadRouter = Router();
const taskController = new TaskController();
 


 
FileUploadRouter.post('/', async (req, res,next) => {



    const form  = formidable({ multiples: true, });

    form.parse(req,async (err, fields, files) => {
      if (err) {
        next(err);
        return;
        }
        const file = files.file;
        const saveTo = path.join('uploads/', file.originalFilename);
        fs.rename(file.filepath, saveTo, err => next(err));
        
        const tasks = parseFile(saveTo);

        tasks.map(async(task) => { 
            await taskController.create(task);
        });
 

    });

 

    res.send({"msg":"success"});

 
   });

 

export default FileUploadRouter;