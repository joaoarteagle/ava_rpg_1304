import { Document, Schema } from "mongoose";
import { MagicItem } from "src/magic_item/providers/magicItem.interface";
import { MagicItemSchema } from "src/magic_item/schema/magicItem.schema";


export interface Character extends Document{
    readonly    name: String,
    readonly    adventurousName: String,
    readonly    characterClass: {type: String, enum: ['WARRIOR', 'MAGE', 'ARCHER', 'ROGUE', 'BARD']},
    readonly    characterLevel: Number,
    readonly    magicItems: [MagicItem],
    readonly    strength: Number,
    readonly    defense: Number,

}