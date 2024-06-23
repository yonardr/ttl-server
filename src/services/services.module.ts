import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Type } from "./models/type-services.model";
import { DocsServices } from "./models/docs-services.model";
import { Projects } from "./models/projects-services.model";
import { ImgProject } from "./models/images-projects.model";
import { ImgServices } from "./models/images-services.model";
import {FilesService} from "../files/files.service";
import { Service } from "./services.model";
@Module({
  controllers: [ServicesController],
  providers: [ServicesService, FilesService],
  imports: [
    SequelizeModule.forFeature([Service ,Type, DocsServices, Projects, ImgProject, ImgServices]),
  ]
})
export class ServicesModule {}
