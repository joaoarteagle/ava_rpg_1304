import { Module } from '@nestjs/common';
import { MagicItemService } from './providers/magic_item.service';
import { MagicItemController } from './magic_item.controller';
import { magicItemProviders } from './providers/magicItem.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [MagicItemController],
  providers: [MagicItemService,
    ...magicItemProviders,
  ],
})
export class MagicItemModule {}
