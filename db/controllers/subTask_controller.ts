import Task from "../models/task_model";
import SubTask from "../models/subTask_model";

class SubTaskController { 


    async findAll() { 
     const tasks = await SubTask.findAll();
     return tasks;
    }

    async findById(subTaskId: number) {
        const subTask = await SubTask.findByPk(subTaskId);
        return subTask;
    } 

    async create(data: any) { 
        await SubTask.create(data);
    }
    
    async updateById(subTaskId: number, data: any) { 
        await SubTask.update({ id: subTaskId },data);
    }

    async deleteById(taskId: number) { 
        await SubTask.destroy({
            where: {
                id: taskId
            }
        });
    } 
}