const mongoose = require("mongoose");

const BidRecordSchema = mongoose.Schema(
    {
        roomId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "AuctionRoom",
            required: true,
        },
        playerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RoomPlayer",
            required: true,
        },
        franchiseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Franchise",
            required: true,
        },
        amount: {
            type: Number,
            required: true,
            min: 0,
        },
        idempotencyKey: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { timestamps: true }
);

BidRecordSchema.index({ roomId: 1, idempotencyKey: 1 }, { unique: true });
BidRecordSchema.index({ roomId: 1, playerId: 1, createdAt: -1 });

module.exports = mongoose.model("BidRecord", BidRecordSchema);
