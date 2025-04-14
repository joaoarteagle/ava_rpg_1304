import * as mongoose from 'mongoose';
import { MagicItemSchema } from 'src/magic_item/schema/magicItem.schema';


export const CharacterSchema = new mongoose.Schema({
    name: String,
    adventurousName: String,
    characterClass: {type: String, enum: ['WARRIOR', 'MAGE', 'ARCHER', 'ROGUE', 'BARD']},
    characterLevel: Number,
    magicItems: [MagicItemSchema],
    strength: Number,
    defense: Number,
});