import { Router } from "express"
import { CriarFilmesController } from "./controllers/Filmes/CriarFilmesController"
import { ListarFilmesController } from "./controllers/Filmes/ListarFilmesController"
import { CriarGeneroController } from "./controllers/Genero/CriarGeneroController"
import { CriarUsuarioController } from "./controllers/Usuarios/CriarUsuariosControllers"
import { ListarUsuarioController } from "./controllers/Usuarios/ListarUsuariosController"


import { isAutenticado } from "./middleware/isAutenticado"

import { AutenticarUsuarioController } from "./controllers/Usuarios/AutenticaUsuarioController"
import { ListarUsuarioUnicoController } from "./controllers/Usuarios/ListarUsuarioUnicoController"
import { AlterarUsuarioController } from "./controllers/Usuarios/AlterarUsuarioController"
import { DeletarUsuarioController } from "./controllers/Usuarios/DeletarUsuarioController"
const rota = Router()


//Filmes
rota.post('/CriarFilme', isAutenticado, new CriarFilmesController().handle)
rota.get('/ListarFilmes', isAutenticado, new ListarFilmesController().handle)

//Generos
rota.post('/CriarGenero', isAutenticado, new CriarGeneroController().handle)

//Usuários
rota.post('/CriarUsuario', new CriarUsuarioController().handle)
rota.get('/ListarUsuarios', isAutenticado, new ListarUsuarioController().handle)
rota.get('/ListarUserUnico/:id', isAutenticado, new ListarUsuarioUnicoController().handle)
rota.post('/AutenticarUsuario', new AutenticarUsuarioController().handle)
rota.put('/AlterarUsuario', isAutenticado, new AlterarUsuarioController().handle)
rota.delete('/DeletarUsuario', isAutenticado, new DeletarUsuarioController().handle)

export { rota }