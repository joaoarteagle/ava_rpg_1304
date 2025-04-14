import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateCharacterDto } from 'src/character/DTO/createCharacter.dto';
import { CreateMagicItemDto } from '../DTO/createMagicItem.dto';
import { Model } from 'mongoose';
import { MagicItem } from './magicItem.interface';
import { MagicItemType } from '../DTO/magicItemTypeEnum';


@Injectable()
export class MagicItemService {
   constructor(
      @Inject('MAGIC_ITEM_MODEL')
      private magicItemModel: Model<MagicItem>,
    ){}

  async adicionarItem(userId: string, dto: CreateMagicItemDto ): Promise<MagicItem>{
    const limit = 1;

    if(dto.magicItemType === MagicItemType.AMULET){
      const qnt = await this.magicItemModel.countDocuments({
        userId, 
        magicItemType: MagicItemType.AMULET,
      });

      if(qnt >= limit){
        throw new BadRequestException("Já possui 1 AMULETO")

      }
    }


    const novoItem = new this.magicItemModel({...dto, userId});
    return novoItem.save();
  }


  async create(createMagicItemDto: CreateMagicItemDto): Promise<MagicItem> {
    const magicItem = new this.magicItemModel(createMagicItemDto);

    return magicItem.save() ;
  }

  async findAll() {
    return await this.magicItemModel.find();
  }

  async findOne(id: string) {
    return await this.magicItemModel.findById(id);
  }

  update(id: number, updateMagicItemDto: any) {
    return `This action updates a #${id} magicItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} magicItem`;
  }
}
