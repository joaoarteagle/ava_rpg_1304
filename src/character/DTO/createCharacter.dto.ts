import { ApiProperty } from "@nestjs/swagger";
import { CreateMagicItemDto } from "src/magic_item/DTO/createMagicItem.dto";
import { CharacterClass } from "./characterClass.enum";



export class CreateCharacterDto{
        @ApiProperty({required: true, default: `João Paulo`})
        name: String;

        @ApiProperty({required: true, default: `NEGÃO GUERREIRO`})
        adventurousName: String;

        @ApiProperty({required: true, enum: CharacterClass, enumName: 'CharacterClass', default: 'WARRIOR'})
        characterClass: CharacterClass;
       
        @ApiProperty({required: true, default: 5})
        characterLevel: Number;

        @ApiProperty({required: true, default: 5})
        strength: Number;

        @ApiProperty({ required: true, default: [{
                magicItemName: 'ARMA SUPREMA',
                magitItemType: 'WEAPON',
                strength: 5,
                defense: 5,
        }]})
        magicItems: [CreateMagicItemDto];

        @ApiProperty({required: true, default: 5})
        defense: Number;
}