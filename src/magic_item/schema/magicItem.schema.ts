import * as mongoose from 'mongoose'

export const MagicItemSchema = new mongoose.Schema({
    magicItemName: String,
    magicItemType: {type: String, enum:['WEAPON', 'ARMOR', 'AMULET' ]},
    strength: Number,
    defense: Number,
});