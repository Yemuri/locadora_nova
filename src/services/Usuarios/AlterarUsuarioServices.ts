import clientePrisma from "../../prisma";

interface AlterarUsuario {
    id: string
    alteraNome: string
    alteraEmail: string
}

class AlterarUsuarioServices {
    async execute({ id, alteraNome, alteraEmail }: AlterarUsuario) {
        const data = new Date(Date.now())
        await clientePrisma.user.update({
            where: {
                user_id: id
            },
            data: {
                user_nome: alteraNome,
                user_email: alteraEmail,
                update_at: data
            }
        })

        return { dados: 'Dados alterados com Sucesso' }
    }
}

export { AlterarUsuarioServices }