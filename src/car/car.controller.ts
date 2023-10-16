import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { CarService } from './car.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FileTransform } from 'src/common/pipes/parse-file.pipe';
import { log } from 'console';
import { editFileName } from 'src/utils/randomFileNameCreator';
import { CarDto } from './dto/car.dto';

@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}

  @Post('create-car')
  // @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FilesInterceptor('attachments', 1, {
      storage: diskStorage({
        destination: './uploads/cars',
        filename: editFileName,
      }),
    }),
  )
  async createCar(
    @Body() dto: CarDto,
    @UploadedFiles(new FileTransform(false, 5, ['jpeg', 'png']))
    file: Express.Multer.File[],
  ) {
    dto.car_image = file[0].path;
    dto.car_created_at = new Date();
    // console.log("dto",dto);
    const { data, err } = await this.carService.createCar(dto);
    // return this.carService.createCar(dto)
    if (err) {
      console.log('err', err);

      throw new HttpException('failed to create car', 400);
    }
    return {
      success: true,
      data,
    };
  }

  @Patch('update-car/:id')
  async updateCar(@Body() udto: CarDto, @Param('id', ParseIntPipe) id: Number) {
    const { data, err } = await this.carService.updateCar(udto, id);
    console.log('dto', err);
    if (err) {
      throw new HttpException('failed to update car', 400);
    }
    return {
      success: true,
      data,
    };
    //    return this.carService.updateCar(udto,id)
  }

  @Get('getall-car')
  async getAllCars() {
    const { data, err } = await this.carService.getAllCar();
    if (err) {
      throw new HttpException('failed to get cars', 400);
    }
    return {
      success: true,
      data,
    };
  }

  @Get('getone-car/:id')
  async getOneCar(@Body() @Param('id', ParseIntPipe) id: Number) {
    const { data, err } = await this.carService.getOneCar(id);
    if (err) {
      throw new HttpException('failed to getone car', 400);
    }
    return {
      success: true,
      data,
    };
  }

  @Delete('delete-car/:id')
  async deleteCar(@Body() @Param('id', ParseIntPipe) id: Number) {
    const { data, err } = await this.carService.deleteCar(id);
    if (err) {
      throw new HttpException('failed to delete car', 400);
    }
    return {
      success: true,
      data,
    };
  }
}
