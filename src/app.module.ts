import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config/dist";
import {ServeStaticModule} from "@nestjs/serve-static";
import { ServicesModule } from './services/services.module';
import * as path from "path";
import { Service } from "./services/services.model";
import { Type } from "./services/models/type-services.model";
import { DocsServices } from "./services/models/docs-services.model";
import { ImgServices } from "./services/models/images-services.model";
import { Projects } from "./services/models/projects-services.model";
import { ImgProject } from "./services/models/images-projects.model";
import { FilesModule } from './files/files.module';
import { EmailerModule } from './emailer/emailer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath : `.${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve( __dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Service, Type, DocsServices, ImgServices, Projects, ImgProject],
      autoLoadModels:true
    }),
    ServicesModule,
    FilesModule,
    EmailerModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
