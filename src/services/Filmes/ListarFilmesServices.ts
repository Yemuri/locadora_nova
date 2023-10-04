import clientePrisma from "../../prisma"

class ListarFilmesServices {
    async execute() {
        const filmes = await clientePrisma.filmes.findMany({})
        return (filmes)
    }
}

export { ListarFilmesServices }