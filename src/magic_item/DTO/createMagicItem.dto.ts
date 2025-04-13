import { ApiProperty } from "@nestjs/swagger";
import { MagicItemType } from "./magicItemTypeEnum";



export class CreateMagicItemDto{
    @ApiProperty({required: true, default: 'SUPER ARMA'})
    magicItemName: String;
    
    @ApiProperty({required: true, default: 'ARMOR'})
    magitItemType: MagicItemType;

    @ApiProperty({required: true, default: 5})
    strength: Number;
    
    @ApiProperty({required: true, default: 5})
    defense: Number;
}