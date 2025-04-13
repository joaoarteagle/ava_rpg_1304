import { Connection } from "mongoose";
import { CharacterSchema } from "../schema/character.schema";


export const characterProviders = [
    {
        provide: 'CHARACTER_MODEL',
        useFactory: (connection: Connection) => connection.model('Character', CharacterSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];