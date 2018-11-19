import  mongoose from 'mongoose';
import { compileFunction } from 'vm';
let Schema = mongoose. Schema;

let ComparePriceSchema = new Schema ({

});


module.exports = mongoose.model('comparePrice', ComparePriceSchema);