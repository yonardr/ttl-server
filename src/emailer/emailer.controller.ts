import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { GetDataMailDto } from "./dto/get-data-mail.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { EmailerService } from "./emailer.service";

@Controller('emailer')
export class EmailerController {
  constructor(private emailerService: EmailerService) {}

  @Post()
  post(@Body() dto : GetDataMailDto){
    return this.emailerService.send(dto);
  }
  @Post('/file')
  @UseInterceptors(FileInterceptor('file'))
  postFile(@Body() dto: GetDataMailDto, @UploadedFile() file){
    return this.emailerService.sendWithfile(dto, file);
  }


}
