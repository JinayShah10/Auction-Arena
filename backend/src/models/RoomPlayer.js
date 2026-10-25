const mongoose = require("mongoose");

const RoomPlayerSchema = mongoose.Schema(
    {
        roomId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "AuctionRoom",
            required: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        lotOrder: {
            type: Number,
            required: true,
        },
        role: {
            type: String,
            required: true,
            uppercase: true,
            enum: ["BATSMAN", "BOWLER", "ALL_ROUNDER", "WICKET_KEEPER"],
        },
        isOverseas: {
            type: Boolean,
            required: true,
            default: false,
        },
        basePrice: {
            type: Number,
            required: true,
            min: 0,
        },
        status: {
            type: String,
            required: true,
            enum: ["UPCOMING", "LIVE", "CLOSING", "SOLD", "UNSOLD"],
            default: "UPCOMING",
        },
        currentBid: {
            type: Number,
            default: 0,
        },
        leadingFranchiseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Franchise",
            default: null,
        },
        expiresAt: {
            type: Date,
            default: null,
        },
        version: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

RoomPlayerSchema.index({ roomId: 1, status: 1, lotOrder: 1 });

module.exports = mongoose.model("RoomPlayer", RoomPlayerSchema);
