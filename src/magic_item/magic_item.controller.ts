import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MagicItemService } from './providers/magic_item.service';
import { CreateMagicItemDto } from './DTO/createMagicItem.dto';
import { MagicItemType } from './DTO/magicItemTypeEnum';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Controller('magic-item')
export class MagicItemController {
  constructor(private readonly magicItemService: MagicItemService) {}

  @Post()
  create(@Body() createMagicItemDto: CreateMagicItemDto) {
    if(createMagicItemDto.magicItemType === MagicItemType.WEAPON) createMagicItemDto.defense = 0;

    if(createMagicItemDto.magicItemType === MagicItemType.ARMOR) createMagicItemDto.strength = 0;

    if(createMagicItemDto.defense.valueOf() + createMagicItemDto.strength.valueOf() > 10) {
      throw new ExceptionsHandler()
    }
    return this.magicItemService.create(createMagicItemDto);
  }

  @Get()
  findAll() {
    return this.magicItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.magicItemService.findOne(id);
  }

 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.magicItemService.remove(+id);
  }
}
