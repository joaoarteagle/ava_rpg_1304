import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './character/character.module';
import { MagicItemModule } from './magic_item/magic_item.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CharacterModule, MagicItemModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
