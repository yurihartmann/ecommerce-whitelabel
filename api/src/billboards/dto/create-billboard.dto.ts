import { ApiProperty } from '@nestjs/swagger';

export class CreateBillboardDto {
  @ApiProperty({ example: 'Coleção de Verão' })
  title: string;
}
