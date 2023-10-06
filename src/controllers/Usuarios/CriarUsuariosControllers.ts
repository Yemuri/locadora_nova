import { Response, Request } from "express"
import { CriarUsuarioServices } from "../../services/Usuarios/CriarUsuariosServices"



class CriarUsuarioController {
    async handle(req: Request, res: Response) {
        const { user_nome, user_email, user_senha } = req.body

        const criarUsuarioServices = new CriarUsuarioServices()
        const usuarios = await criarUsuarioServices.execute({
            user_nome,
            user_email,
            user_senha
        })
        return res.json(usuarios)


    }
}


export { CriarUsuarioController }