import { Injectable } from '@nestjs/common';
import { CreateMagicItemDto } from './dto/create-magic_item.dto';
import { UpdateMagicItemDto } from './dto/update-magic_item.dto';

@Injectable()
export class MagicItemService {
  create(createMagicItemDto: CreateMagicItemDto) {
    return 'This action adds a new magicItem';
  }

  findAll() {
    return `This action returns all magicItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} magicItem`;
  }

  update(id: number, updateMagicItemDto: UpdateMagicItemDto) {
    return `This action updates a #${id} magicItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} magicItem`;
  }
}
