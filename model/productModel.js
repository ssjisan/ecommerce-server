import mongoose from "mongoose";
import { ObjectId } from mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            trim:true,
            required:true,
            maxlength:160,
        },
        slug:{
            type:String,
            trim:true,
            lowercase:true
        },
        description:{
            type:String,
            required:true,
            maxlength:2000
        },
        price:{
            type:Number,
            trim:true,
            required:true
        },
        category:{
            type: ObjectId,
            "ref":"Category"
        },
        quantity:{
            type:Number
        },
        sold:{
            type:Number,
            default:0
        },
        photo:{
            data:Buffer,
            contentType:String
        },
        shipping:{
            type:Boolean,
            default:false
        }

    },{timestamps:true}
)