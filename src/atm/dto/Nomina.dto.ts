import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FileUploadDto {
    
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;

  @ApiProperty()
  @IsString()
  nota:string

  @ApiProperty()
  @IsString()
  cuentaEmpresa:string

}