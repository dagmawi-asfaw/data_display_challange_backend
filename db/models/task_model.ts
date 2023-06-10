import sequelize from "../sequelize_db";
import  Sequelize  from "sequelize";


const Task = sequelize.define('task', {
    id: {
        type: Sequelize.DOUBLE,
        primaryKey:true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    total: {
        type: Sequelize.INTEGER,
        allowNull:true
    }
});
 

export default Task;