import { Connection } from "mongoose";
import { MagicItemSchema } from "../schema/magicItem.schema";


export const magicItemProviders = [
    {
        provide: 'MAGIC_ITEM_MODEL',
        useFactory: (connection: Connection) => connection.model('MagicItem', MagicItemSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];