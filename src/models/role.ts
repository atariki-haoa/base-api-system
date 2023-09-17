// models/role.ts

import {
  Table, Column, Model, DataType, HasMany,
} from 'sequelize-typescript';
import User from './user';

@Table({
  tableName: 'roles',
  timestamps: true,
})
export default class Role extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
    id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    nombre!: string;

  @HasMany(() => User)
    users!: User[];
}
