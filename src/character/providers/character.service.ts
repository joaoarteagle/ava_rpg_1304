import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Character } from './character.interface';
import { CreateCharacterDto } from '../DTO/createCharacter.dto';


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

  async findOne(id: string) {
    return this.characterModel.findOne({_id: id});
  }

  async update(id: number, adventurousName: string) {
    return await this.characterModel.findByIdAndUpdate(
      id,
      {$set: {adventurousName}},
      {new: true}

    );
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
