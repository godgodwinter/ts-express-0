"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.routes();
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send('Ini Express dengan TS');
        });
    }
}
const port = 8000;
const app = new App().app;
app.listen(port, () => {
    console.log(`Aplikasi ini berjalan di port ${port}`);
});
// const app = express();
// app.route("/").get((req, res) => {
//     res.send("hi NGAB");
// })
// app.listen(8000);
