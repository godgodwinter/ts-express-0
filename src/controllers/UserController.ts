import { Request, Response } from 'express';
import IController from './ControllerInterface';


// DUMMY DATA
let data: any[] = [
    {
        id: 1,
        name: "Paimin"
    },
    {
        id: 2,
        name: "Paijo"
    },
    {
        id: 3,
        name: "Joko"
    },
]
class UserController implements IController {
    index(req: Request, res: Response): Response {
        return res.send(data)
    }
    create(req: Request, res: Response): Response {
        const { id, name } = req.body;
        data.push({
            id,
            name
        });
        return res.send("Create Success");
    }
    show(req: Request, res: Response): Response {
        const { id } = req.params;
        let person = data.find(item => item.id == id);
        return res.send(person);
    }
    update(req: Request, res: Response): Response {
        const { id } = req.params;
        const { name } = req.body;
        let person = data.find(item => item.id == id);
        person.name = name;

        return res.send("Update Success")


    }
    delete(req: Request, res: Response): Response {
        const { id } = req.params;
        let people = data.filter(item => item.id != id); //hanya contoh , jadi tidak dihapus dan hanya difilter selain data tersebut
        return res.send(people);
    }

}

export default new UserController();