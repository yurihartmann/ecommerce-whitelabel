import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillboardsModule } from './billboards/billboards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Billboard } from './billboards/entities/billboard.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.db',
      synchronize: true,
      entities: [Billboard],
    }),
    BillboardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
