import { IsNotEmpty, IsString, IsNumber } from "class-validator"

export class customerDto{
    @IsNotEmpty()
    @IsString() 
    customer_name:string

    @IsNotEmpty()
    @IsNumber()
   customer_car_id:number
   
   customer_created_by:number
   customer_updated_by:number
   customer_created_at:Date
   customer_updated_at:Date
    // car_image:any
    }