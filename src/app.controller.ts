import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseFilePipe,
  ParseIntPipe,
  Patch,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import { AppService } from './app.service';
import { democar, democustomer, demoimgtest } from './data.dto';

import { extname } from 'path';
// import { editFileName } from '../../utils/randomFileNameCreator';
import { FileTransform } from './common/pipes/parse-file.pipe';

// import { editFileName } from 'utils/randomFileNameCreator';
// import { FileTransform } from '../p'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Post('car/img')
  // @UseInterceptors(FileInterceptor('car_image'))
  // uploadFilecar(@UploadedFile(new FileTransform(false ,0.5,['jpeg','png'])) file: Express.Multer.File,
  // @Body() dto: democar) {
  //   dto.car_createdby= new Date()
  //   dto.car_updatedby = new Date()
  //   dto.car_image = file && file ? file.path: null;
  //   console.log(dto);
  //   console.log(file);
  //   return this.appService.createCar(dto)
  // }


  // @Get('/:id')
  // getCar(@Param('id', ParseIntPipe) id: Number) {
  //   return this.appService.getCar(id);
  //   // return this.appService.getCar(id);
  // }

  // @Patch(':id')
  // editCar(@Param('id', ParseIntPipe) id: Number, @Body() dto: democar) {
  //   return this.appService.editCar(id, dto);
  // }

  // @Delete(':id')
  // deleteCar(@Param('id', ParseIntPipe) id: Number) {
  //   return this.appService.deleteCar(id);
  // }

  // @Get()
  // getallcar() {
  //   return this.appService.getallcar();
  // }

  // @Post('customer/details')
  // createCustomer(@Body() dto: democustomer) {
  //   dto.customer_createdby = new Date();
  //   dto.customer_updatedby = new Date();
  //   return this.appService.createCustomer(dto);
  // }

  // @Get('customer/:custid')
  // getCustomer(@Param('custid', ParseIntPipe) custid: Number) {
  //   return this.appService.getCustomer(custid);
  //   // return this.appService.getCar(id);
  // }

  // @Post('upload/img')
  // @UseInterceptors(FileInterceptor('testcar_img'))
  // uploadFile2(@UploadedFile(new FileTransform(false ,0.5,['jpeg','png'])) 
  // file:  Express.Multer.File,
  // @Body() dto: demoimgtest) {
  //   dto.testcar_createdby= new Date()
  //   dto.testcar_updatedy= new Date()
  //   dto.testcar_img = file && file ? file.path: null;
  //   console.log(dto);
  //   console.log(file);
  //   return this.appService.createdemoimg(dto)
  // }

}
