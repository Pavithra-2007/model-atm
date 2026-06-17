const moongoose = require('mongoose');
const accountSchema = new moongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    accountNumber: {
        type: String,
        required: true,
        unique: true,
    },
    pin: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        default: 0,
    },
});
module.exports = moongoose.model("Account", accountSchema);