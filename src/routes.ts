import { Router } from "express"
import { CriarFilmesController } from "./controllers/Filmes/CriarFilmesController"
import { ListarFilmesController } from "./controllers/Filmes/ListarFilmesController"
import { CriarGeneroController } from "./controllers/Genero/CriarGeneroController"



const rota = Router()


//Filmes
rota.post('/CriarFilme', new CriarFilmesController().handle)
rota.get('/ListarFilmes', new ListarFilmesController().handle)

//Generos
rota.post('/CriarGenero', new CriarGeneroController().handle)

export { rota }