import clientePrisma from "../../prisma"

interface CriarFilmes {
    filmes_titulo: string,
    filmes_diretor: string
    campoGeneroId: string

}

class CriarFilmesServices {
    async execute({ filmes_titulo, filmes_diretor, campoGeneroId }: CriarFilmes) {
        if (!filmes_titulo || !filmes_diretor || !campoGeneroId) {
            throw new Error("Existem campos em Branco");

        }
        await clientePrisma.filmes.create({
            data: {
                filmes_titulo: filmes_titulo,
                filmes_diretor: filmes_diretor,
                campoGeneroId: campoGeneroId

            }
        })
        return { dados: 'Filme cadastrado com sucesso!' }

    }
}

export { CriarFilmesServices }