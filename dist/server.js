"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const process_1 = __importDefault(require("process"));
require("dotenv/config");
const app = (0, express_1.default)();
const port = process_1.default.env.PORT || 3000;
app.set("view engine", "ejs");
app.set("views", path_1.default.resolve("./dist/views"));
//parse urlencoded request bodies
app.use(express_1.default.urlencoded({ extended: false }));
//parse json request bodies
app.use(express_1.default.json());
// Provide the css files as static files
app.use(express_1.default.static(path_1.default.resolve("./public")));
// Gets the main page that includes documentation on request
app.get("/", (_req, res) => {
    console.log("main page GET request recieved!");
    res.render("index", { title: "WIP" });
});
//Initializes the server with the port
app.listen(port, () => {
    console.log(`Server started!\nlocalhost:${port}`);
});
exports.default = app;
