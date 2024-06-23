import { Module } from '@nestjs/common';
import { EmailerService } from './emailer.service';
import { EmailerController } from './emailer.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: 'smtp.timeweb.ru',
          port: 25,
          auth: {
            user: 'info@kamion-express.tmweb.ru',
            pass: 'IGIP5fOEy8XumaaOifO3'
          }
        },
        defaults: {
          from: '"No Reply" <info@kamion-express.tmweb.ru>',
        },
        template: {
          dir: __dirname + '/templates',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },

      }),
    }),
  ],
  providers: [EmailerService],
  controllers: [EmailerController]
})
export class EmailerModule {}
