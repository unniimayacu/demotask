import { Module, RequestMethod, ValidationPipe } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { prisma } from '@prisma/client';
import { diskStorage } from 'multer';
import { join } from 'path';
// import { editFileName } from '../../utils/randomFileNameCreator';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { editFileName } from './utils/randomFileNameCreator';
import { CarModule } from './car/car.module';
// import { CustomerController } from './customer/customer/customer.controller';
// import { CustomerService } from './customer/customer/customer.service';
// import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
// import { Service } from './customer/.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads',
        // filename: editFileName
      }),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', './uploads'),
    }),
    CarModule,
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // configure(consumer: any) {
  //   consumer
  //     .apply(ValidationPipe)
  //     .forRoutes({ path: '*', method: RequestMethod.ALL });
  // }
}
