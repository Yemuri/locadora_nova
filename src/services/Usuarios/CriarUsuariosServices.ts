import clientePrisma from "../../prisma"
import { hash } from 'bcryptjs'

interface CriarUsuario {
    user_nome: string,
    user_email: string,
    user_senha: string

}



class CriarUsuarioServices {
    async execute({ user_nome, user_email, user_senha }: CriarUsuario) {
        if (!user_nome || !user_email || !user_senha) {
            throw new Error("Campos em branco não são permitidos");
        }

        const emailCadastrado = await clientePrisma.user.findFirst({
            where: {
                user_email: user_email
            }
        })
        if (emailCadastrado) {
            throw new Error("Email já está cadastrado");
        }
        const senhaCrip = await hash(user_senha, 8)
        const usuario = await clientePrisma.user.create({
            data: {
                user_nome: user_nome,
                user_email: user_email,
                user_senha: senhaCrip
            },
            select: {
                user_id: true,
                user_nome: true,
                user_email: true,
                user_senha: true
            }
        })
        return { dados: usuario }
    }
}

export { CriarUsuarioServices }