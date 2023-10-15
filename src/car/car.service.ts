import { Injectable } from '@nestjs/common';
import { error, log } from 'console';
import { carDto } from './dto/car.dto';
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

@Injectable()
export class CarService {
  async createCar(dto: carDto) {
    try {
      const car = await prisma.car.create({
        data: dto,
      });
      return {
        data: car,
        err: null,
      };
    } catch (error) {
      return {
        data: null,
        err: error,
      };
    }
  }

  async updateCar(dto: carDto, id: Number) {
    try {
      const carup = await prisma.car.update({
        where: {
          car_id: id,
        },
        data: dto,
      });
      return {
        data: carup,
        err: null,
      };
    } catch (error) {
      console.log(error);
      return {
        data: null,
        err: error,
      };
    }
  }

  async getAllCar() {
    try {
      const carGetall = await prisma.car.findMany({});
      return {
        data: carGetall,
        err: null,
      };
    } catch (error) {
      console.log('error', error);
      return {
        data: null,
        err: error,
      };
    }
  }

  async getOneCar(id: Number) {
    try {
      const carGetone = await prisma.car.findFirst({
        where: {
          car_id: id,
        },
      });
      return {
        data: carGetone,
        err: null,
      };
    } catch (error) {
      console.log('error', error);
      return {
        data: null,
        err: error,
      };
    }
  }

async deleteCar(id:Number){
  try{
    const carDelete = await prisma.car.delete({
      where:{
        car_id:id,
      },
    })
    return{
      data:carDelete,
      err:null,
    }
  } catch (error){
    console.log("error",error);
    return{
      data:null,
      err:error,
    }
    
  }
}

}
