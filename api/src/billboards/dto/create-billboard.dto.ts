import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateBillboardDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'Coleção de Verão' })
  title: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'base64:png:xxx' })
  image: string;
}
