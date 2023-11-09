import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillboardsModule } from './billboards/billboards.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.db',
      synchronize: true,
    }),
    BillboardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
