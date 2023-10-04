import { Request, Response } from "express"
import { ListarFilmesServices } from "../../services/Filmes/ListarFilmesServices"



class ListarFilmesController {
    async handle(req: Request, res: Response) {
        const listarFilmesServices = new ListarFilmesServices()
        const filmes = await listarFilmesServices.execute()
        return res.json(filmes)
    }
}


export { ListarFilmesController }