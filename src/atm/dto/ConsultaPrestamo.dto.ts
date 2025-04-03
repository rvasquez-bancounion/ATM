import { ApiProperty } from "@nestjs/swagger";
import {IsString} from "class-validator";

export class ConsultaPrestamoaDto {

    @ApiProperty()
    @IsString({message: 'Debe ser tipo string',}) 
    tipoFiltro:string;

    @ApiProperty()
    @IsString({message: 'Debe ser tipo string',}) 
    valorConsulta:string;

    @ApiProperty()
    @IsString({message: 'Debe ser tipo string',}) 
    codigoUsuario:string;

    @ApiProperty()
    @IsString({message: 'Debe ser tipo string',}) 
    idSucursal:string;

    @ApiProperty()
    @IsString({message: 'Debe ser tipo string',}) 
    canalEntrada:string;

    


}
