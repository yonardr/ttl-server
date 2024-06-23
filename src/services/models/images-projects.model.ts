import {Table, Model, Column, DataType, ForeignKey} from 'sequelize-typescript'
import {ApiProperty} from '@nestjs/swagger'
import { Service } from "../services.model";
import { Projects } from "./projects-services.model";

@Table({tableName: 'project_images'})
export class ImgProject extends Model<ImgProject>{
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey:true})
  id: number;

  @ApiProperty({example: '/services/img.png', description: 'Путь к фотографии для услуги'})
  @Column({type: DataType.STRING, allowNull:false})
  path: string;

  @ForeignKey(()=> Projects)
  @Column({type: DataType.INTEGER})
  project_id: number


}