import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MagicItemService } from './providers/magic_item.service';
import { CreateMagicItemDto } from './DTO/createMagicItem.dto';

@Controller('magic-item')
export class MagicItemController {
  constructor(private readonly magicItemService: MagicItemService) {}

  @Post()
  create(@Body() createMagicItemDto: CreateMagicItemDto) {
    return this.magicItemService.create(createMagicItemDto);
  }

  @Get()
  findAll() {
    return this.magicItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.magicItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMagicItemDto:any) {
    return this.magicItemService.update(+id, updateMagicItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.magicItemService.remove(+id);
  }
}
