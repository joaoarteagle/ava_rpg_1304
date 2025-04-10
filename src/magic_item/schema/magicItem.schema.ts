import * as mongoose from 'mongoose'

export const MagicItemSchema = new mongoose.Schema({
    magicItemName: String,
    magitItemType: {type: String, enum:['WEAPON', 'ARMOR', 'AMULET' ]},
    strength: Number,
    defense: Number,
});