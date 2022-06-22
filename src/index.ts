import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser"; //untuk menampilkan data request berbentuk json
import morgan from "morgan"; //untukk logger / melihat riwayat yang di konsumsi API


class App {
    public app: Application
    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
    }

    protected plugins(): void {
        this.app.use(bodyParser.json());
        this.app.use(morgan("dev"));
    }

    protected routes(): void {
        this.app.route("/").get((req: Request, res: Response) => {
            res.send('Ini Express dengan TS');
        })

        this.app.route("/users").post((req: Request, res: Response) => {
            res.send(req.body);
        })
    }
}


const port: number = 8000;
const app = new App().app;
app.listen(port, () => {
    console.log(`Aplikasi ini berjalan di port ${port}`);

});

// const app = express();

// app.route("/").get((req, res) => {
//     res.send("hi NGAB");
// })

// app.listen(8000);