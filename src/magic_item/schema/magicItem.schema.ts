import * as mongoose from 'mongoose'

export const MagicItemSchema = new mongoose.Schema({
    itemId: { type: mongoose.Schema.Types.UUID},
    magicItemName: String,
    magitItemType: {type: String, enum:['WEAPON', 'ARMOR', 'AMULET' ]},
    strength: Number,
    defense: Number,
});