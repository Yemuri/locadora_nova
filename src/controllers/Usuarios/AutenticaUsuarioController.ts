import { Request, Response } from "express"
import { AutenticarUsuarioServices } from "../../services/Usuarios/AutenticaUsuarioServices"


class AutenticarUsuarioController {
    async handle(req: Request, res: Response) {
        const { user_email, user_senha } = req.body
        const autenticarUsuarioServices = new AutenticarUsuarioServices()
        const resposta = await autenticarUsuarioServices.execute({
            user_email, user_senha
        })
        return res.json(resposta)
    }
}

export { AutenticarUsuarioController }