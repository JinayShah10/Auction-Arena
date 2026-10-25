const mongoose = require("mongoose");

const AuctionRoomSchema = mongoose.Schema(
    {
        roomCode:{
            type:String,
            uppercase:true,
            required:true,
            trim:true,
            unique:true,
        },
        mode:{
            type:String,
            required:true,
            trim:true,
            enum:["BOTS","MULTIPLAYER"],
            default:"BOTS",
        },
        teamCapacity:{
            type:Number,
            required:true,
        },
        status:{
            type:String,
            required:true,
            enum:["WAITING_PLAYERS","RUNNING","COMPLETED"],
            default:"WAITING_PLAYERS",
        },
        activePlayerId:{
            type:mongoose.Schema.Types.ObjectId,
            default:null,
        },
        rulesConfig:{
            type:Object,
            required:true,
            default:{
                startingPurse:100,
                minSquad:15,
                maxSquad:18,
                maxOverseas:6,
            }
        },
        version:{
            type:Number,
            default:0,
        },
    },{timestamps:true}
)

module.exports = mongoose.model("AuctionRoom",AuctionRoomSchema);