import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Billboard {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  image: string;
}
