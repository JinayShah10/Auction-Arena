const mongoose = require("mongoose")

const FranchiseSchema = mongoose.Schema({
    roomId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"AuctionRoom",
        required:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:null,
    },
    name:{
        type:String,
        required:true,
        trim:true,
    },
    botArchetype:{
        type:String,
        default:null,
        enum:["AGGRESSIVE","CONSERVATIVE","BALANCED",null],
    },
    remainingPurse:{
        type:Number,
        required:true,
        min:0,
    },
    totalPlayers:{
        type:Number,
        default:0,
    },
    overseasCount:{
        type:Number,
        default:0,
    },

},{timestamps:true})

FranchiseSchema.index({ roomId: 1, name: 1 }, { unique: true });

module.exports = mongoose.model("Franchise",FranchiseSchema);