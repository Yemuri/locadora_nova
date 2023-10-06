import clientePrisma from "../../prisma"

class ListarUsuarioServices {
    async execute() {
        const usuario = await clientePrisma.user.findMany({})
        return (usuario)
    }
}

export { ListarUsuarioServices }