import { Request, Response } from "express"
import { CriarFilmesServices } from "../../services/Filmes/CriarFilmesServices"

class CriarFilmesController {
    async handle(req: Request, res: Response) {
        const { filmes_titulo, filmes_diretor, campoGeneroId } = req.body


        const criarFilmesServices = new CriarFilmesServices()
        const filmes = await criarFilmesServices.execute({
            filmes_titulo, filmes_diretor, campoGeneroId
        })
        return res.json(filmes)

    }
}

export { CriarFilmesController }