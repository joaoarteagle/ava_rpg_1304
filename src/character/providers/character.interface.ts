import { Document, Schema } from "mongoose";
import { MagicItemSchema } from "src/magic_item/schema/magicItem.schema";


export interface Character extends Document{
    readonly    userId: { type: Schema.Types.UUID},
    readonly    name: String,
    readonly    adventurousName: String,
    readonly    characterClass: {type: String, enum: ['WARRIOR', 'MAGE', 'ARCHER', 'ROGUE', 'BARD']},
    readonly    characterLevel: Number,
    readonly    magicItems: typeof MagicItemSchema,
    readonly    strength: Number,
    readonly    defense: Number,

}