import Task from "../models/task_model";

class TaskController { 


 async findAll() { 
     const tasks = await Task.findAll();
     return tasks;
    }

    async findById(taskId: number) {
        const task = await Task.findByPk(taskId);
        return task;
    } 

    async create(data: any) { 
        await Task.create(data);
    }
    
    async updateById(taskId: number, data: any) { 
        await Task.update({ id: taskId },data);
    }

    async deleteById(taskId: number) { 
        await Task.destroy({
            where: {
                id: taskId
            }
        });
    } 
}