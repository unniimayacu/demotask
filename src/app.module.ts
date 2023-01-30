import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { prisma } from '@prisma/client';
import { diskStorage } from 'multer';
import { join } from 'path';
import { editFileName } from '../../utils/randomFileNameCreator';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { editFileName } from './utils/randomFileNameCreator';

@Module({
  imports: [
    MulterModule.register({
        storage:diskStorage({
          destination:'./uploads',
          filename: editFileName
        })
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', './uploads'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
