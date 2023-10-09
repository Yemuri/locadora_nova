import { Request, Response } from "express";
import { AlterarUsuarioServices } from "../../services/Usuarios/AlterarUsuarioServices";

class AlterarUsuarioController {
    async handle(req: Request, res: Response) {
        const { id, alteraNome, alteraEmail, alteraSenha } = req.body
        const alterarUsuarioServices = new AlterarUsuarioServices()
        const resposta = await alterarUsuarioServices.execute({
            id,
            alteraNome,
            alteraEmail,
            alteraSenha
        })
        return res.json(resposta)
    }
}

export { AlterarUsuarioController }