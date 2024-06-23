import { Table, Model, Column, DataType, BelongsToMany, HasMany, ForeignKey } from "sequelize-typescript";
import {ApiProperty} from '@nestjs/swagger'
import { Type } from "./models/type-services.model";
import {ImgServices } from "./models/images-services.model";
import { DocsServices } from "./models/docs-services.model";
import { Projects } from "./models/projects-services.model";

interface ServiceCreationAttr{
  title: string;
  des: string;
  type_id: number;
}
@Table({tableName: 'services'})
export class Service extends Model<Service, ServiceCreationAttr>{
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey:true})
  id: number;

  @ApiProperty({example: 'Диагностика промышленной электроники', description: 'название'})
  @Column({type: DataType.STRING, unique:true, allowNull:false})
  title: string;

  @ApiProperty({example: '', description: ''})
  @Column({type: DataType.TEXT, allowNull:true})
  des: string;

  @ForeignKey(()=>Type)
  @Column({type: DataType.INTEGER})
  type_id: number

  @HasMany(() => ImgServices)
  imgs: ImgServices[];

  @HasMany(() => DocsServices)
  docs: ImgServices[];

  @HasMany(() => Projects)
  projects: Projects[];
}