import express, { Application, Request, Response } from "express";

class App {
    public app: Application
    constructor() {
        this.app = express();
        this.routes();
    }

    protected routes(): void {
        this.app.route("/").get((req: Request, res: Response) => {
            res.send('Ini Express dengan TS');
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