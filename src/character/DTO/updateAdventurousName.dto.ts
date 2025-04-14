  import { ApiProperty } from "@nestjs/swagger"
  export class UpdateAdventurousName{
        @ApiProperty({required: true, type: String})
        userId;

        @ApiProperty({required: true, default: 'NOVO NOME DE AVENTUREIRO'})
        adventurousName: String;
    }