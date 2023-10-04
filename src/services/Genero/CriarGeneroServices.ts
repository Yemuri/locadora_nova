import clientePrisma from "../../prisma"

interface CriarGenero {
    genero_nome: string
}


class CriarGeneroServices {
    async execute({ genero_nome }: CriarGenero) {
        if (!genero_nome) {
            throw new Error("Campo em Branco");

        }

        await clientePrisma.genero.create({
            data: {
                genero_nome: genero_nome
            }
        })
        return { dados: 'Genero Criado' }

    }
}



export { CriarGeneroServices }