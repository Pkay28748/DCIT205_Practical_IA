const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const PatientSchema = new Schema({
    name:{
        type:String,
        required:true 
    },
    price:{
        type:Number,
        required:true
    },



})

const Patient= mongoose.model('patient',PatientSchema);
module.exports=Patient;