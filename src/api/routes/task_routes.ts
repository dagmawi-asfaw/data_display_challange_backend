import { Router } from "express";
import TaskController from "../../db/controllers/task_controller";
 
 

const TaskRouter = Router();
const taskController = new TaskController();
 


TaskRouter.get('/',async (req,res) => { 
    const result = await taskController.findAll()
    res.send(result);
});

TaskRouter.get('/:id',async (req,res) => { 
    const taskId = Number(req.params.id)
    const result = await taskController.findById(taskId)
    res.send(result);
});

TaskRouter.post('/',async (req, res)=>{ 
    const result =  await taskController.create(req.body);
    res.send(result);
   });


 


TaskRouter.delete('/:id', async (req, res) => { 
    const taskId = Number(req.params.id)
    await taskController.deleteById(taskId,);
    res.send(true);
})


export default TaskRouter;