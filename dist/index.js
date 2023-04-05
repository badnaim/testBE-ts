"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const movie_1 = __importDefault(require("./routes/movie"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config/config");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(movie_1.default);
mongoose_1.default.connect(config_1.config.mongo.url, { retryWrites: true, w: 'majority' }).then(() => { console.log('connected'); }).catch(error => { console.log(error); });
app.get('/', (req, res) => {
    res.send('Express + ts server');
});
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});
