import { Body, Controller, Delete, Get, Param, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ServicesService } from "./services.service";
import { CreateTypeDto } from "./dto/create-type.dto";
import { FilesInterceptor, MulterModule } from "@nestjs/platform-express";
import { CreateServiceDto } from "./dto/create-service.dto";
import { CreateProjectDto } from "./dto/create-project.dto";

@ApiTags('Услуги')
@Controller('services')
export class ServicesController {
  constructor(private servicesService: ServicesService) {}

  @ApiOperation({summary: 'Создание типа услуги'})
  @Post('/types')
  createType(@Body() dto: CreateTypeDto){
    return this.servicesService.createType(dto);
  }

  @ApiOperation({summary: 'Удаление типа услуги'})
  @Delete('/types/id/:value')
  deleteType(@Param('value') id: number){
    return this.servicesService.deleteType(id);
  }

  @ApiOperation({summary: 'Получение всех типов услуг'})
  @Get('/types')
  getAllType(){
    return this.servicesService.getTypes();
  }


  @Get()
  getAll(){
    return this.servicesService.getAll()
  }

  @Get('/:id')
  getById(@Param('id') id: number){
    return this.servicesService.getById(id)
  }

  @Get('/project/:id')
  getProjectById(@Param('id') id: number){
    return this.servicesService.getProjectById(id)
  }

  @UseInterceptors(FilesInterceptor('images'))
  @Post()
  create(@Body() dto: CreateServiceDto,
         @UploadedFiles() images: Array<MulterModule>){
    return this.servicesService.createService(dto, images);
  }

  @UseInterceptors(FilesInterceptor('docs'))
  @Post('/docs/:id')
  addDocs(@Param('id') id: number,
          @UploadedFiles() docs: Array<MulterModule>){
    return this.servicesService.addDocs(id, docs)
  }

  @UseInterceptors(FilesInterceptor('images'))
  @Post('/project/:id')
  addProject(@Body() dto: CreateProjectDto,
          @UploadedFiles() images: Array<MulterModule>){
    return this.servicesService.addProject(dto, images)
  }


  @Delete('/:id')
  delNews(@Param('id') id: number){
    return this.servicesService.delService(id)
  }


}
