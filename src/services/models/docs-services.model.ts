import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import { Service } from "../services.model";

@Table({tableName: 'docs_service', createdAt: false, updatedAt:false})
export class DocsServices extends Model<DocsServices>{

  @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey:true})
  id: number;


  @ApiProperty({example: 'djsbhfkushjbhi38hd3.docx', description: 'Путь файла в статике'})
  @Column({type: DataType.STRING, unique:true, allowNull:false})
  path: string;

  @ForeignKey(()=> Service)
  @Column({type: DataType.INTEGER})
  service_id: number
}