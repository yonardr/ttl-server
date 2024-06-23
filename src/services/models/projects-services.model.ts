import { Table, Model, Column, DataType, BelongsToMany, HasMany, ForeignKey } from "sequelize-typescript";
import {ApiProperty} from '@nestjs/swagger'
import { ImgProject } from "./images-projects.model";
import { Service } from "../services.model";


interface ProjectsCreationAttr{
  title: string;
  des: string;
}
@Table({tableName: 'projects'})
export class Projects extends Model<Projects, ProjectsCreationAttr>{
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey:true})
  id: number;

  @ApiProperty({example: 'Диагностика промышленной электроники', description: 'название'})
  @Column({type: DataType.STRING, unique:true, allowNull:false})
  title: string;

  @ApiProperty({example: '', description: ''})
  @Column({type: DataType.TEXT, allowNull:true})
  des: string;

  @HasMany(() => ImgProject)
  imgs: ImgProject[];

  @ForeignKey(()=> Service)
  @Column({type: DataType.INTEGER})
  service_id: number
}