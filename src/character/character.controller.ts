import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CharacterService } from './providers/character.service';
import { CreateCharacterDto } from './DTO/createCharacter.dto';
import { response } from 'express';
import { UpdateAdventurousName } from './DTO/updateAdventurousName.dto';
import { find } from 'rxjs';
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

  @Get(':id/items')
  findAllItems(@Param('id') id: string){
    return this.characterService.findAllItems(id);
  }

  @Get(':id/AMULET')
  findAmulet(@Param('id') id: string){
    return this.characterService.findAmulet(id);
  }

  @Delete(":idUser/items/:idItem")
  deleteItemUser(@Param('idUser') idUser: string, @Param("idItem") idItem: string){
    return this.characterService.deleteItemUser(idUser, idItem);

  }

  @Put(':id')
  updateAdventurousName(@Param('id') id: string, @Body() {userId, adventurousName}: UpdateAdventurousName) {
    return this.characterService.updateAdventurousName({userId, adventurousName});
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.characterService.removeCharacter(id);
  }
}
