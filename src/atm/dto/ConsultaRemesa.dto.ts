import { ApiProperty } from "@nestjs/swagger";
import { IsString} from "class-validator";

export class ConsultaRemesaDto {

    @ApiProperty()
    @IsString({message: 'Debe ser tipo string',}) 
    corrcode:string;

    @ApiProperty()
    @IsString({message: 'Debe ser tipo string',})    
    remittanceid:string;

    @ApiProperty()
    @IsString({message: 'Debe ser tipo string',})    
    corrreference:string;


}