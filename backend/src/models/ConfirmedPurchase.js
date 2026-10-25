const mongoose = require("mongoose");

const ConfirmedPurchaseSchema = mongoose.Schema(
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
        finalPrice: {
            type: Number,
            required: true,
            min: 0,
        },
        settledAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

ConfirmedPurchaseSchema.index({ roomId: 1, playerId: 1 }, { unique: true });

module.exports = mongoose.model("ConfirmedPurchase", ConfirmedPurchaseSchema);
