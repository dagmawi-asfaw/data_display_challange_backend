import sequelize from "../sequelize_db";
import  Sequelize  from "sequelize";
import Task from "./task_model";

const SubTask = sequelize.define('task', {
    id: {
        type: Sequelize.DOUBLE,
        primaryKey:true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    unit: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue:"m3"
    },
    quantity: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    rate:{
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
});
 
SubTask.belongsTo(Task, {
    foreignKey: "taskId"
});


export default SubTask;