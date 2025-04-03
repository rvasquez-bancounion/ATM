import { ApiProperty } from "@nestjs/swagger";
import { IsString} from "class-validator";

export class CorreoDto {

    @ApiProperty()
    @IsString({message: 'Debe ser tipo string',}) 
    subject:string;

    @ApiProperty()
    @IsString({message: 'Debe ser tipo string',})    
    texto:string;

    @ApiProperty()
    @IsString({message: 'Debe ser tipo string',})    
    cuerpo:string;


}