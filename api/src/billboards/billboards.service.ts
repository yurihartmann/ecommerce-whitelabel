import { Injectable } from '@nestjs/common';
import { CreateBillboardDto } from './dto/create-billboard.dto';
import { UpdateBillboardDto } from './dto/update-billboard.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Billboard } from './entities/billboard.entity';
import { EntityNotFoundError, Repository } from 'typeorm';

@Injectable()
export class BillboardsService {
  @InjectRepository(Billboard)
  private billboard_repo: Repository<Billboard>;

  create(createBillboardDto: CreateBillboardDto): Promise<Billboard> {
    const new_billboard = new Billboard(createBillboardDto);
    return this.billboard_repo.save(new_billboard);
  }

  findAll(): Promise<Billboard[]> {
    return this.billboard_repo.find();
  }

  findOne(id: string) {
    return this.billboard_repo.findOneOrFail({ where: { id: id } });
  }

  async update(
    id: string,
    updateBillboardDto: UpdateBillboardDto,
  ): Promise<Billboard | void> {
    const billboard = await this.billboard_repo.findOneOrFail({
      where: { id: id },
    });

    Object.assign(billboard, updateBillboardDto);

    return this.billboard_repo.save(billboard);
  }

  remove(id: string): void {
    this.billboard_repo.delete({ id: id });
  }
}
