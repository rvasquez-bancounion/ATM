import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtmModule } from './atm/atm.module';

@Module({
  imports: [

      ConfigModule.forRoot(),

      TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DBIP,
      port: +process.env.DBPORT,
      username: process.env.DBUSER,
      password: process.env.DBPASS,
      database: process.env.DB,
      entities:  [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities:true,
      extra: {
        trustServerCertificate: true,
        requestTimeout:200000
      }
    
    }),

      AtmModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
