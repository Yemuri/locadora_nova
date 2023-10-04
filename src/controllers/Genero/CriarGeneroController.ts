import { Request, Response } from "express"
import { CriarGeneroServices } from "../../services/Genero/CriarGeneroServices"

class CriarGeneroController {
    async handle(req: Request, res: Response) {
        const { genero_nome } = req.body

        const criarGeneroServices = new CriarGeneroServices()
        const genero = await criarGeneroServices.execute({
            genero_nome
        })

        return res.json(genero)



    }
}

export { CriarGeneroController }