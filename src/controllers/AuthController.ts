import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import IController from './ControllerInterface';


// DUMMY DATA

class AuthController {
    login(req: Request, res: Response): Response {
        return res.send("")
    }
    register(req: Request, res: Response): Response {
        return res.send("")
    }

}

export default new AuthController();