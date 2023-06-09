"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movie_model_1 = __importDefault(require("../model/movie-model"));
const movieRouter = express_1.default.Router();
movieRouter.get("/movies", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("movies get request");
    const getMovies = yield movie_model_1.default.findOne({});
    if (getMovies) {
        res.status(200).send(getMovies);
    }
    else {
        res.send(400).send({ message: "movieRouter has problem" });
    }
}));
exports.default = movieRouter;
