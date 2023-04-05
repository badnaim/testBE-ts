"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const db = mongoose_1.default.connect(`${process.env.MONGODB_SECRET_KEY}`).then((res) => {
    return console.log("mongoDB connected");
}).catch((err) => {
    console.log(err);
});
exports.default = db;
