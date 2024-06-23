import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Type } from "./models/type-services.model";
import { CreateTypeDto } from "./dto/create-type.dto";
import { CreateServiceDto } from "./dto/create-service.dto";
import { Service } from "./services.model";
import { CreateImgServiceDto } from "./dto/create-img-service.dto";
import { ImgServices } from "./models/images-services.model";
import {FilesService} from "../files/files.service";
import { CreateDocServiceDto } from "./dto/create-doc-service.dto";
import { DocsServices } from "./models/docs-services.model";
import { Projects } from "./models/projects-services.model";
import { CreateProjectDto } from "./dto/create-project.dto";
import { CreateImgProjectDto } from "./dto/create-img-project.dto";
import { ImgProject } from "./models/images-projects.model";

@Injectable()
export class ServicesService {
  constructor(@InjectModel(Type) private typeRepository: typeof Type,
              @InjectModel(ImgServices) private imgServiceRepository: typeof ImgServices,
              @InjectModel(ImgProject) private imgProjectRepository: typeof ImgProject,
              @InjectModel(DocsServices) private docServiceRepository: typeof DocsServices,
              @InjectModel(Projects) private projectRepository: typeof Projects,
              @InjectModel(Service) private serviceRepository: typeof Service,
              private fileService : FilesService,

              ) {}

  async createType(dto: CreateTypeDto){
    const res = await this.typeRepository.create(dto)
    return res;
  }

  async deleteType(id: number){
    const res = await this.typeRepository.destroy({where: {id: id}})
    return res;
  }
  async getTypes(){
    const res = await this.typeRepository.findAll()
    return res;
  }

  async createService(dto: CreateServiceDto, images: any[]){
    console.log('Это дтоошка', dto)
    console.log('Это массив фоток', images)
    const service = await this.serviceRepository.create(dto)
    images.map(async item => {
      const dto_img :CreateImgServiceDto  = {
        service_id : service.id,
        path: `/services/${item.originalname}`
      }
      await this.imgServiceRepository.create(dto_img)
      await this.fileService.addFile(item, true, 'services')
    })
    return service
  }
  async addDocs(id: number, docs: any[]){
    const service = await this.serviceRepository.findOne({where: {id: id}})
    if(service){
      docs.map(async (item ) => {
        const dto: CreateDocServiceDto = {
          service_id: service.id,
          path: `/services/${item.originalname}`,
        }
        await this.docServiceRepository.create(dto)
        await this.fileService.addFile(item, true, 'services')
      })
    }
    return service;
  }
  async addProject(dto: CreateProjectDto, images: any[]){
    const project = await this.projectRepository.create(dto)
    images.map(async item => {
      const dto_img :CreateImgProjectDto  = {
        project_id : project.id,
        path: `/project/${item.originalname}`
      }
      await this.imgProjectRepository.create(dto_img)
      await this.fileService.addFile(item, true, 'project')
    })
    return project
  }

  async getProjectById(id: number){
    const res = this.projectRepository.findOne({where: {id: id}, include:{all:true}})
    return res;
  }

  async delService(id: number){
    const service = await this.serviceRepository.destroy({where: {id: id}})
    return service
  }

  async getById(id: number){
    const item = await this.serviceRepository.findOne({where: {id: id}, include:{all:true}})
    return item;
  }

  async getAll(){
    const services = await this.serviceRepository.findAll({
      include: {all: true}})
    return services
  }
}
