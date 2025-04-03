import { ApiProperty } from "@nestjs/swagger";
import { IsString} from "class-validator";

export class CrearBeneficiarioDto {

    @ApiProperty()
    @IsString({message: 'Debe ser tipo string',}) 
    idencliente:string;

    @ApiProperty()
    @IsString({message: 'Debe ser tipo string',})    
    idenbeneficiario:string;

    @ApiProperty()
    @IsString({message: 'Debe ser tipo string',})    
    nombrebeneficiario:string;


}