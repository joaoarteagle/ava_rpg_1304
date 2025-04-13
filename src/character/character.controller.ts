import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharacterService } from './providers/character.service';
import { CreateCharacterDto } from './DTO/createCharacter.dto';
import { response } from 'express';
@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Post()
  create(@Body() createCharacterDto: CreateCharacterDto) {
    if ((createCharacterDto.strength.valueOf() + createCharacterDto.defense.valueOf()) > 10){
      
      return {
        sucess: false,
        message: "Soma de força e defesa não pode ser maior que 10"
      }
    }


    return this.characterService.create(createCharacterDto);
  }

  @Get()
  findAll() {
    return this.characterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.characterService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCharacterDto: any) {
    return this.characterService.update(+id, updateCharacterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.characterService.remove(+id);
  }
}
