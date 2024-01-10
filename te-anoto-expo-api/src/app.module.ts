import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './modules/item/item.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './modules/user/user.module';
import { StoreModule } from './modules/store/store.module';
import { StorepriceModule } from './modules/storeprice/storeprice.module';
import { BrandModule } from './modules/brand/brand.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.postgresUsername,
      password: process.env.postgresPassword,
      database: process.env.postgresDB,

      autoLoadModels: true,
      synchronize: true,
    }),
    ItemModule,
    UserModule,
    StoreModule,
    StorepriceModule,
    BrandModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
