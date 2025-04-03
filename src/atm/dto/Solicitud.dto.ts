import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsDate} from "class-validator";

export class SolicitudDto {

    @ApiProperty()
    @IsDate()
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    fechaInicio:Date;

    @ApiProperty()
    @IsDate()
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    fechaFin:Date;


}