import { Module } from '@nestjs/common';
import { MagicItemService } from './magic_item.service';
import { MagicItemController } from './magic_item.controller';

@Module({
  controllers: [MagicItemController],
  providers: [MagicItemService],
})
export class MagicItemModule {}
