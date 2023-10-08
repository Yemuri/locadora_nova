import { Request, Response } from "express";
import { DeletarUsuarioServices } from "../../services/Usuarios/DeletarUsuarioServices";


class DeletarUsuarioController {
    async handle(req: Request, res: Response) {
        const { apagar } = req.body
        const deletarUsuarioServices = new DeletarUsuarioServices()
        const remover = await deletarUsuarioServices.execute({
            apagar
        })
        return res.json(remover)
    }
}

export { DeletarUsuarioController }