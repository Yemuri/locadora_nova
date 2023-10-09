import clientePrisma from "../../prisma";
import { hash } from "bcryptjs";

interface AlterarUsuario {
    id: string
    alteraNome: string
    alteraEmail: string
    alteraSenha: string
}


class AlterarUsuarioServices {
    async execute({ id, alteraNome, alteraEmail, alteraSenha }: AlterarUsuario) {
        const senhaCrip = await hash(alteraSenha, 8)
        const data = new Date(Date.now())
        await clientePrisma.user.update({
            where: {
                user_id: id
            },
            data: {
                user_nome: alteraNome,
                user_email: alteraEmail,
                user_senha: senhaCrip,
                update_at: data
            }
        })

        return { dados: 'Dados alterados com Sucesso' }
    }
}

export { AlterarUsuarioServices }