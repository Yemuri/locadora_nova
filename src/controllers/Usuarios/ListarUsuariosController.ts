import { Response, Request } from "express"
import { ListarUsuarioServices } from "../../services/Usuarios/ListarUsuarioServices"

class ListarUsuarioController {
    async handle(req: Request, res: Response) {
        const listarUsuarioServices = new ListarUsuarioServices()
        const usuario = await listarUsuarioServices.execute()
        return res.json(usuario)
    }
}

export { ListarUsuarioController }