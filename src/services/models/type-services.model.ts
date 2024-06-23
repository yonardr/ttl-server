import {Table, Model, Column, DataType} from 'sequelize-typescript'
import {ApiProperty} from '@nestjs/swagger'

interface TypeCreationAttr{
  title: string;
  description: string;
}
@Table({tableName: 'types_service'})
export class Type extends Model<Type, TypeCreationAttr>{
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey:true})
  id: number;

  @ApiProperty({example: 'Ремонт генераторов', description: 'Ремонт генераторов'})
  @Column({type: DataType.STRING, unique:true, allowNull:false})
  title: string;

  @ApiProperty({example: 'текст текст', description: 'текст текст'})
  @Column({type: DataType.TEXT, allowNull:true})
  description: string;

}