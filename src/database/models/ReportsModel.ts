import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../setup/database';
import { ReportAttributes } from '../../interfaces/models/ReportAttributes';

// Optional fields for model creation
interface ReportCreationAttributes
  extends Optional<ReportAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

// Define the Report model class
class ReportModel
  extends Model<ReportAttributes, ReportCreationAttributes>
  implements ReportAttributes
{
  public id!: number;
  public title!: string;
  public content!: string;
  public authorId!: number;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ReportModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'Reports',
  },
);

export default ReportModel;
