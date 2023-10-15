import { Injectable } from '@nestjs/common';

import { customerDto } from './dto/customer.dto';
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

@Injectable()
export class CustomerService {
  async createCustomer(dto: customerDto) {
    try {
      const creatCustomer = await prisma.customer.create({
        data: dto,
      });
      return {
        data: creatCustomer,
        err: null,
      };
    } catch (error) {
      return {
        data: null,
        err: error,
      };
    }
  }

  async updateCustomer(dto: customerDto, id: Number) {
    try {
      const customerup = await prisma.customer.update({
        where: {
          customer_id: id,
        },
        data: dto,
      });
      return {
        data: customerup,
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

  async getAllCustomer() {
    try {
      const CustomerGetall = await prisma.customer.findMany({});
      return {
        data: CustomerGetall,
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

  async getOneCustomer(id: Number) {
    try {
      const CustomerGetone = await prisma.customer.findFirst({
        where: {
          customer_id: id,
        },
      });
      return {
        data: CustomerGetone,
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
  async deleteCustomer(id: Number) {
    try {
      const customerDelete = await prisma.customer.delete({
        where: {
          customer_id: id,
        },
      });
      return {
        data: customerDelete,
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
}
