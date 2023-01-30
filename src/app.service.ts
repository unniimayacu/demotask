import { Injectable } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client'
import { democar, democustomer, demoimgtest } from './data.dto';
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

@Injectable()
export class AppService {
  async createCar(dto: democar){
    const car = await prisma.test1.create({
   data:dto,
    })
    return car;
  }

  async getCar(id:Number ){
    const car =await prisma.test1.findUnique({
      where :{
        car_id:id
      }
    })
    return car;
  }
  
 async editCar(id:Number, dto :democar){
  const car = await prisma.test1.update({
    where :{
      car_id:id
    },
data: dto
  })
  return car;
 }

 async deleteCar(id:Number ){
  const car= await prisma.test1.delete({
    where :{
      car_id:id
    }
  })
  return car;
 }


// totalPage = (test1.Length + PageSize - 1) / PageSize;
// int pages = ((count - 1) / PAGESIZE) + 1;



 async getallcar(){
  const car= await prisma.test1.findMany({
    // skip: 0,
    // take: 50,
  })
  return car;
 }

 

 async createCustomer(dto: democustomer){
  const customer = await prisma.test2.create({
 data:dto,
  })
  return customer;
}

async getCustomer(custid:Number ){
  const customer = await prisma.test2.findUnique({
    where :{
      customer_id:custid
    },
    include: {
     test1:true
    },
  })
  return customer
}

async createdemoimg(dto: demoimgtest ){
  const dimg = await prisma.testing3.create({
 data:dto,
  })
  return dimg;
}
}
