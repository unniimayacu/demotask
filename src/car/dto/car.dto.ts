import { Transform } from "class-transformer"
import { IsNumber, IsOptional, } from "class-validator"
import { log } from "console"

export class carDto{
@IsOptional()
car_name:number

@IsOptional()
 @Transform(({value})=> {
    log("value", value)
   return Number(value)})
car_price: number

car_createdby:number
car_updatedby:number
car_created_at:Date
car_updated_at:Date
car_image:any
}