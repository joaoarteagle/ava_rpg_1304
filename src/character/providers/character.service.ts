import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Character } from './character.interface';
import { CreateCharacterDto } from '../DTO/createCharacter.dto';
import { UpdateAdventurousName } from '../DTO/updateAdventurousName.dto';
import { throwDeprecation } from 'process';


@Injectable()
export class CharacterService {
  
  constructor(
    @Inject('CHARACTER_MODEL')
    private characterModel: Model<Character>,
  ){}



  async create(createCharacterDto: CreateCharacterDto): Promise<Character> {
    if((createCharacterDto.strength.valueOf() +  createCharacterDto.defense.valueOf()) > 10){
      throw new Error("Soma dos atributos Strength e defense não pode ser maior que 10")

    }
    const character = new this.characterModel(createCharacterDto);
    return character.save();
  }

  async findAll() {
    return this.characterModel.find();
  }

  async findAmulet(id: string){
    return await this.characterModel.findOne(
      {
        _id:id
      },

      {
        magicItems:{
          $elemMatch: {magicItemType: 'AMULET'},
        },
      },
    );
  

  }

  async findAllItems(id: string){
    return await this.characterModel.findById(id).select('magicItems');
  }

  async findOne(id: string) {
    return this.characterModel.findOne({_id: id});
  }

  async updateAdventurousName({userId, adventurousName}: UpdateAdventurousName){
    return await this.characterModel.findByIdAndUpdate(
      userId,
      {$set: {adventurousName}},
      {new: true}

    );
  }

  async removeCharacter(id: string) {
    return await this.characterModel.findByIdAndDelete(id);
  }

  async deleteItemUser(idUser: string, idItem: string){
    const user = await this.characterModel.findById(idUser);

    if(!user) throw new NotFoundException("User Not Found");

    console.log(user.magicItems)

    const itemIndex = user.magicItems.findIndex(
      (item) => item._id?.toString() === idItem,
    );


    if (itemIndex === -1){
      throw new NotFoundException("ITEM NOT FOUND")
    }


    user.magicItems.splice(itemIndex, 1);
     
    await user.save()

    return{ message: 'ITEM REMOVIDO DO PERSONAGEM ' + idUser}
  }


}
