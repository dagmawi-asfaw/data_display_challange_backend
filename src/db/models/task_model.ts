import sequelize from "../sequelize_db";
import  Sequelize  from "sequelize";


const Task = sequelize.define('task',  {
    id: {
        type: Sequelize.INTEGER,
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
        defaultValue:0
    },
    rate:{
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue:0
    },
    createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      }
}  
);
 

export default Task;