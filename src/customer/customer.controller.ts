import { Body, Controller, Delete, Get, HttpException, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { customerDto } from './dto/customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post('create-customer')
  async createCustomer(@Body() dto: customerDto) {
    dto.customer_created_at = new Date();
    dto.customer_updated_at= new Date()
    dto.customer_created_by= 1
    dto.customer_updated_by=1
    // console.log("dto",dto);
    const { data, err } = await this.customerService.createCustomer(dto);
    // return this.carService.createCar(dto)
    if (err) {
        console.log("erorr",err);
        
      throw new HttpException('failed to create customer', 400);
    }
    return {
      success: true,
      data,
    };
  }

  @Patch('update-customer/:id')
  async updateCar(@Body() udto: customerDto, @Param('id', ParseIntPipe) id: Number) {
    const { data, err } = await this.customerService.updateCustomer(udto, id);
    console.log('dto', err);
    if (err) {
      throw new HttpException('failed to update customer', 400);
    }
    return {
      success: true,
      data,
    };
    //    return this.carService.updateCar(udto,id)
  }

  @Get('getall-customer')
  async getAllCustomer(){
    const {data, err} = await this.customerService.getAllCustomer()
    if(err){
      throw new HttpException("failed to get customer",400)
    }
    return{
      success:true,
      data,
    };
  }

  @Get('getone-customer/:id')
  async getOneCustomer(@Body() @Param('id',ParseIntPipe) id:Number ){
    const {data,err}= await this.customerService.getOneCustomer(id)
    if (err) {
      throw new HttpException('failed to getone customer', 400);
    }
    return {
      success: true,
      data,
    }; 
  }

  @Delete('delete-customer/:id')
  async deleteCar(@Body() @Param('id',ParseIntPipe) id:Number  ){
    const {data,err}= await this.customerService.deleteCustomer(id)
    if (err) {
      throw new HttpException('failed to delete customer', 400);
    }
    return {
      success: true,
      data,
    }; 
  }
}
