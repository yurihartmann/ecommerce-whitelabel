import { PartialType } from '@nestjs/mapped-types';
import { CreateBillboardDto } from './create-billboard.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBillboardDto extends PartialType(CreateBillboardDto) {
  @ApiProperty({ example: 'Coleção de Verão', required: false })
  title?: string;

  @ApiProperty({ example: 'base64:png:xxx', required: false })
  image?: string;
}
