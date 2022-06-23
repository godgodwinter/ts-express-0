import { Request, Response } from 'express';
import Authentication from '../utils/Authentication';
const db = require("../db/models");

// DUMMY DATA

class AuthController {
    register = async (req: Request, res: Response): Promise<Response> => {
        let { username, password } = req.body;
        const hashPassword: string = await Authentication.passwordHash(password);

        await db.user.create({
            username,
            password: hashPassword
        })

        return res.send("Registrasi success!");
    }
    login = async (req: Request, res: Response): Promise<Response> => {
        let { username, password } = req.body;

        const user = await db.user.findOne({
            where: { username }
        })
        if (user == null) {
            return res.send("Username tidak ditemukan!");
        }
        let compare = await Authentication.passwordCompare(password, user.password);

        if (compare) {
            let token = Authentication.generateToken(user.id, username);
            return res.send({
                token
            })
        }

        return res.send("Authentication failed!");

    }

    profile = (req: Request, res: Response): Response => {
        return res.send(req.app.locals.credential);
    }

}

export default new AuthController();