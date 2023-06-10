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
      const task =  await Task.create(data);
      return task;
    }
    
    async bulkCreate(data: Array<any>) { 
        const task =  await Task.bulkCreate(data);
        return task;
      }
    async updateById(taskId: number, data: any) {

        const task = await Task.update({ id: taskId }, data);
        return task;
    }

    async deleteById(taskId: number) { 
        await Task.destroy({
            where: {
                id: taskId
            }
        });
    } 
}


export default TaskController;