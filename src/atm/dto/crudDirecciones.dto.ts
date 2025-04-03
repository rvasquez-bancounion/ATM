import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNumber, IsOptional, IsString} from "class-validator";

export class CrudDireccionesDto {

    @ApiProperty()
    @IsString()
    operacion: string;
  
    @ApiProperty()
    @IsInt()
    codicldi: number;
  
    @ApiProperty()
    @IsInt()
    coditdir: number;
  
    @ApiProperty()
    @IsString()
    direprin: string;
  
    @ApiProperty()
    @IsString()
    nombcall: string;
  
    @ApiProperty()
    @IsString()
    numecall: string;
  
    @ApiProperty()
    @IsString()
    nombedif: string;
  
    @ApiProperty()
    @IsInt()
    numepiso: number;
  
    @ApiProperty()
    @IsString()
    numeapar: string; 
  
    @ApiProperty()
    @IsString()
    @IsOptional()
    aparpost?: string;
  
    @ApiProperty()
    @IsString()
    direrefe: string;
  
    @ApiProperty()
    @IsInt()
    codipais: number;
  
    @ApiProperty()
    @IsInt()
    codiprov: number;
  
    @ApiProperty()
    @IsInt()
    codimuni: number;
  
    @ApiProperty()
    @IsInt()
    codidimu: number;
  
    @ApiProperty()
    @IsInt()
    codisect: number;
  
    @ApiProperty()
    @IsInt()
    codiensa: number;
  
    @ApiProperty()
    @IsString()
    descnota: string;
  
    @ApiProperty()
    @IsInt()
    regiborr: number;
  
    @ApiProperty()
    @IsString()
    identificacion: string; 


}