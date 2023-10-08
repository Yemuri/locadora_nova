import clientePrisma from "../../prisma";

interface ListarUsuario {
    id: string
}


class ListarUsuarioUnicoServices {
    async execute({ id }: ListarUsuario) {
        const resposta = await clientePrisma.user.findUnique({
            where: {
                user_id: id
            },
            select: {
                user_id: true,
                user_nome: true,
                user_email: true
            }
        })

        return resposta

    }
}




export { ListarUsuarioUnicoServices }