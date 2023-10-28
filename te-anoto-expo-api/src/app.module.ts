import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './modules/item/item.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './modules/user/user.module';
import { StoreModule } from './modules/store/store.module';
import { StorepriceModule } from './modules/storeprice/storeprice.module';
import { BrandModule } from './modules/brand/brand.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'TeAnotoExpoDB',
      autoLoadModels: true,
      synchronize: true,
    }),
    ItemModule,
    UserModule,
    StoreModule,
    StorepriceModule,
    BrandModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
