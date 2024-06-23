import {ApiProperty} from "@nestjs/swagger";

export class CreateImgProjectDto{
  @ApiProperty({example: '/news/truck.png', description: 'Путь до фото'})
  readonly path: string;

  @ApiProperty({example: '1', description: 'ID новости к которому прикрепляется фото'})
  readonly project_id: number;

}