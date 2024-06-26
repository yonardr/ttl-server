import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { GetDataMailDto } from "./dto/get-data-mail.dto";
import {Document, Packer, Paragraph, TextRun, AlignmentType, TableCell, TableRow, Table} from 'docx'

@Injectable()
export class EmailerService {
  constructor(private readonly mailerService: MailerService) {}
  async sendWithfile(dto: GetDataMailDto, file: any) {
    console.log(file)

      const doc = new Document({
          sections: [
              {
                  properties: {},
                  children: [
                      new Paragraph({
                          alignment: AlignmentType.CENTER,
                          children: [
                              new TextRun({
                                  text: "Акт",
                                  bold: true,
                                  size: 28,
                              })
                          ],
                      }),
                      new Paragraph({
                          alignment: AlignmentType.CENTER,
                          children: [
                              new TextRun({
                                  text: "приёма оборудования на диагностику / в ремонт",
                                  bold: true,
                                  size: 28,

                              })
                          ],
                      }),
                      new Paragraph({
                          children: [
                              new TextRun({
                                  text: "г.Казань ",
                                  size: 28,

                              }),
                              new TextRun({
                                  text: `\t\t\t\t\t\t\t\t${new Date().toLocaleDateString()}`,
                                  size: 28,
                              }),
                          ],
                      }),
                      new Paragraph({
                          children: [
                              new TextRun({
                                  text: "\tНастоящий Акт составлен в том, что представителем ",
                                  size: 28,
                              }),
                              new TextRun({
                                  text: dto.name,
                                  size: 28,
                              }),
                              new TextRun({
                                  text: ` передано, а представителем ООО «Зима» _______________________ принято для проведения диагностики / ремонта оборудование в составе и количестве, указанном в приведённой таблице.`,
                                  size: 28,
                              }),
                          ],
                      }),
                      new Table(
                          {
                              alignment: AlignmentType.CENTER,
                              rows:[
                                  new TableRow({
                                      children: [
                                          new TableCell({
                                              children: [new Paragraph({
                                                  children: [
                                                      new TextRun({
                                                          text: "№ п/п",
                                                          size: 28,
                                                      }),]
                                              })],
                                          }),
                                          new TableCell({
                                              children: [new Paragraph("Наименование и обозначение оборудования, его составных частей, а также документации на оборудование")],
                                          }),
                                          new TableCell({
                                              children: [new Paragraph("Кол-во")],
                                          }),
                                      ],
                                  }),
                                  new TableRow({
                                      children: [
                                          new TableCell({
                                              children: [
                                                  new Paragraph("1")],
                                          }),
                                          new TableCell({
                                              children: [new Paragraph(`${dto.equipment_name}`)],
                                          }),
                                          new TableCell({
                                              children: [new Paragraph("1")],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      new Paragraph({
                          children: [
                              new TextRun({
                                  text: "Примечания.",
                                  size: 28,
                              })
                          ],
                      }),
                      new Paragraph({
                          children: [
                              new TextRun({
                                  text: "",
                              })
                          ],
                      }),
                      new Paragraph({
                          children: [
                              new TextRun({
                                  text: "",
                              })
                          ],
                      }),
                      new Paragraph({
                          children: [
                              new TextRun({
                                  text: "",
                              })
                          ],
                      }),
                      new Paragraph({
                          children: [
                              new TextRun({
                                  text: `от ${dto.name}                                От ООО «Зима»`,
                                  size: 28,
                              })
                          ],
                      }),
                      new Paragraph({
                          children: [
                              new TextRun({
                                  text: `от ${dto.name}`,
                                  size: 28,
                              })
                          ],
                      }),
                      new Paragraph({
                          children: [
                              new TextRun({
                                  text: `\tПодпись передающего\t\t\tПодпись получателя`,
                                  size: 28,
                              })
                          ],
                      }),
                  ],
              }
          ]


      });
      const b64string = await Packer.toBase64String(doc);


      const res = await this.mailerService
      .sendMail({
        to: 'rustem2129@mail.ru', // list of receivers
        from: 'info@kamion-express.tmweb.ru', // sender address
        subject: 'Заявка', // Subject line
        template: 'application-approved',
        html: `<h1>${dto.name} оставил заявку </h1><h1>Номер телефона: ${dto.tel}</h1><h1>Почта этого пользователя: ${dto.email}</h1><br><h2>Название оборудования: ${dto.equipment_name}</h2><h2>Описание проблемы: ${dto.des}</h2>`, // HTML body content
        attachments: [{
          filename: dto.file_name,
          content: file.buffer.toString('base64'),
          encoding: 'base64',
          contentType: 'image/png',
        },
            {
                filename: 'My Document.docx',
                content: b64string,
                encoding: 'base64',
                contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            },
        ]
      })
    return res
  }



  async send(dto: GetDataMailDto) {
    const res = await this.mailerService
      .sendMail({
        to: 'rustem2129@mail.ru', // list of receivers
        from: 'info@kamion-express.tmweb.ru', // sender address
        subject: 'Заявка', // Subject line
        template: 'application-approved',
        html: `<h1>${dto.name} оставил заявку </h1><h1>Номер телефона: ${dto.tel}</h1><h1>Почта этого пользователя: ${dto.email}</h1><br><h2>Название оборудования: ${dto.equipment_name}</h2><h2>Описание проблемы: ${dto.des}</h2>`, // HTML body content
      })
    return res
  }



}
