import { Request, Response } from 'express';
import PasswordHash from '../utils/PasswordHash';
const db = require("../db/models");

// DUMMY DATA

class AuthController {
    register = async (req: Request, res: Response): Promise<Response> => {
        let { username, password } = req.body;
        const hashPassword: string = await PasswordHash.hash(password);

        await db.user.create({
            username,
            password: hashPassword
        })

        return res.send("Registrasi success!");
    }
    login = async (req: Request, res: Response): Promise<Response> => {
        let { username, password } = req.body;

        const createdUser = await db.user.create({
            username,
            password
        })

        return res.send(createdUser);
    }

}

export default new AuthController();