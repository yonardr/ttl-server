import {ApiProperty} from "@nestjs/swagger";

export class CreateDocServiceDto{
  @ApiProperty({example: '/news/truck.png', description: 'Путь до документа'})
  readonly path: string;

  @ApiProperty({example: '1', description: 'ID новости к которому прикрепляется документ'})
  readonly service_id: number;

}