// models/user.ts

import {
  Table, Column, Model, DataType, ForeignKey, BelongsTo,
} from 'sequelize-typescript';
import Role from './role';

@Table({
  tableName: 'users',
  timestamps: true,
})
export default class User extends Model {
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
    name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    phone!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    rut!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
    email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    gender!: string;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
    roleId!: number;

  @BelongsTo(() => Role)
    role!: Role;
}
