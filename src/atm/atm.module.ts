import { Module } from '@nestjs/common';
import { AtmService } from './atm.service';
import { AtmController } from './atm.controller';
import { ConfigModule } from '@nestjs/config';
import { MailModule } from './mail.module';

@Module({
  imports: [
    MailModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AtmController],
  providers: [AtmService],
})
export class AtmModule {}
