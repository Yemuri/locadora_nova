import { Router } from "express"
import { CriarFilmesController } from "./controllers/Filmes/CriarFilmesController"
import { ListarFilmesController } from "./controllers/Filmes/ListarFilmesController"
import { CriarGeneroController } from "./controllers/Genero/CriarGeneroController"
import { CriarUsuarioController } from "./controllers/Usuarios/CriarUsuariosControllers"
import { ListarUsuarioController } from "./controllers/Usuarios/ListarUsuariosController"


import { isAutenticado } from "./middleware/isAutenticado"

import { AutenticarUsuarioController } from "./controllers/Usuarios/AutenticaUsuarioController"
const rota = Router()


//Filmes
rota.post('/CriarFilme', new CriarFilmesController().handle)
rota.get('/ListarFilmes', new ListarFilmesController().handle)

//Generos
rota.post('/CriarGenero', new CriarGeneroController().handle)

//Usuários
rota.post('/CriarUsuario', new CriarUsuarioController().handle)
rota.get('/ListarUsuarios', isAutenticado, new ListarUsuarioController().handle)
rota.post('/AutenticarUsuario', new AutenticarUsuarioController().handle)

export { rota }