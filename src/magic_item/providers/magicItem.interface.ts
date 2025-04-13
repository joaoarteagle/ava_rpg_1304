import { Document, Schema } from "mongoose";


export interface MagicItem extends Document{
    readonly    itemId: { type: Schema.Types.UUID},
    readonly    magicItemName: String,
    readonly    magicItemType: {type: String, enum: ['WARRIOR', 'MAGE', 'ARCHER', 'ROGUE', 'BARD']},
    readonly    strength: Number,
    readonly    defense: Number,

}