import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import IController from './ControllerInterface';

class UserController implements IController {
    index(req: Request, res: Response): Response {
        return res.send("Ini adalah End Point Index")
    }
    create(req: Request, res: Response): Response {

        return res.send(req.body)
    }
    show(req: Request, res: Response): Response {
        throw new Error('Method not implemented.');
    }
    update(req: Request, res: Response): Response {
        throw new Error('Method not implemented.');
    }
    delete(req: Request, res: Response): Response {
        throw new Error('Method not implemented.');
    }

}

export default new UserController();