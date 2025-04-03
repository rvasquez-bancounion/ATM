import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class SolicitudRemesaDto {
   
  // @ApiProperty()  
  // @IsString()
  // corrcode: string; 

  // @ApiProperty()
  // @IsNumber()
  // corrSequence: number; 

  // @ApiProperty()
  // @IsString()
  // corrreference: string; 

  @ApiProperty()
  @IsString()
  paycurrency: string;

  @ApiProperty()
  @IsNumber()
  payamount: number;

  @ApiProperty()
  @IsNumber()
  comamount: number;

  @ApiProperty()
  @IsString()
  custcode: string; 

  @ApiProperty()
  @IsString()
  custfname: string;

  @ApiProperty()
  @IsString()
  custlname: string;

  @ApiProperty()
  @IsString()
  custaddress: string;

  @ApiProperty()
  @IsString()
  custcity: string;

  @ApiProperty()
  @IsString()
  custstate: string;

  @ApiProperty()
  @IsString()
  custzip: string;

  @ApiProperty()
  @IsString()
  custcountry: string;

  @ApiProperty()
  @IsString()
  custphone: string;

  @ApiProperty()
  @IsString()
  custidname: string;

  @ApiProperty()
  @IsString()
  custidnumber: string;

  @ApiProperty()
  @IsString()
  trnmessage: string;

  @ApiProperty()
  @IsString()
  bencode: string;

  @ApiProperty()
  @IsString()
  benfname: string;

  @ApiProperty()
  @IsString()
  benlname: string; 

  @ApiProperty()
  @IsString()
  benaddress: string; 

  @ApiProperty()
  @IsString()
  bensector: string; 

  @ApiProperty()
  @IsString()
  benaddrref: string;

  @ApiProperty()
  @IsString()
  bencity: string; 

  @ApiProperty()
  @IsString()
  benstate: string; 

  @ApiProperty()
  @IsString()
  benzip: string; 

  @ApiProperty()
  @IsString()
  bencountry: string; 

  @ApiProperty()
  @IsString()
  benphone1: string; 

  @ApiProperty()
  @IsString()
  benphone2: string;

  @ApiProperty()
  @IsString()
  trncode: string; 

  @ApiProperty()
  @IsString()
  @IsOptional()
  bankname?: string; 

  @ApiProperty()
  @IsString()
  @IsOptional()
  bankacc?: string; 

  @ApiProperty()
  @IsString()
  deliverytype: string; 

  @ApiProperty()
  @IsString()
  @IsOptional()
  payercode?: string; 

  
  @ApiProperty()
  @IsString()
  idtransacion: string; 
}
