// Define the Todo model

import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../setup/database';
import { TodoAttributes } from '../../interfaces/models/TodoAttributes';

// Optional fields for model creation
interface TodoCreationAttributes
  extends Optional<TodoAttributes, 'id' | 'isDone'> {}

// Define the Todo model class
class TodoModel
  extends Model<TodoAttributes, TodoCreationAttributes>
  implements TodoAttributes
{
  public id!: number;

  public userId!: number;

  public task!: string;

  public isDone!: boolean;

  public dueDate!: Date | string;

  // Timestamps
  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

TodoModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Todos',
  },
);

export default TodoModel;
