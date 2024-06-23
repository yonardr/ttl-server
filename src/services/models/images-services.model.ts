import {Table, Model, Column, DataType, ForeignKey} from 'sequelize-typescript'
import {ApiProperty} from '@nestjs/swagger'
import { Service } from "../services.model";

@Table({tableName: 'service_images'})
export class ImgServices extends Model<ImgServices>{
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey:true})
  id: number;

  @ApiProperty({example: '/services/img.png', description: 'Путь к фотографии для улсуги'})
  @Column({type: DataType.STRING, allowNull:false})
  path: string;

  @ForeignKey(()=> Service)
  @Column({type: DataType.INTEGER})
  service_id: number


}