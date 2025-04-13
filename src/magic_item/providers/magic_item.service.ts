import { Inject, Injectable } from '@nestjs/common';
import { CreateCharacterDto } from 'src/character/DTO/createCharacter.dto';
import { CreateMagicItemDto } from '../DTO/createMagicItem.dto';
import { Model } from 'mongoose';
import { MagicItem } from './magicItem.interface';


@Injectable()
export class MagicItemService {
   constructor(
      @Inject('MAGIC_ITEM_MODEL')
      private magicItemModel: Model<MagicItem>,
    ){}




  async create(createMagicItemDto: CreateMagicItemDto): Promise<MagicItem> {
    const magicItem = new this.magicItemModel(createMagicItemDto);

    return magicItem.save() ;
  }

  async findAll() {
    return await this.magicItemModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} magicItem`;
  }

  update(id: number, updateMagicItemDto: any) {
    return `This action updates a #${id} magicItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} magicItem`;
  }
}
