import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString} from "class-validator";

export class CrudOficinaDto {

    @ApiProperty()
    @IsString({message: 'Debe ser tipo string',}) 
    operacion:string;

    @ApiProperty()
    @IsNumber()   
    codiofic:number;

    @ApiProperty()
    @IsString({message: 'Debe ser tipo string',})    
    descofic:string;


}