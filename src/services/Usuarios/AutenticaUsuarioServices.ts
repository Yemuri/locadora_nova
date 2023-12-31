import clientePrisma from "../../prisma"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface AutenticarUsuario {
    user_email: string
    user_senha: string
}

class AutenticarUsuarioServices {
    async execute({ user_email, user_senha }: AutenticarUsuario) {
        console.log(user_senha, user_email)
        const usuario = await clientePrisma.user.findFirst({
            where: {
                user_email: user_email
            }
        })

        if (!usuario) {
            throw new Error("Usuário / Senha incorreta");
        }

        const autenticado = await compare(user_senha, usuario.user_senha)
        console.log(autenticado)
        if (!autenticado) {
            throw new Error("Usuário / Senha incorretos");
        }


        const token = sign({
            id: usuario.user_id,
            email: usuario.user_email
        },
            process.env.JWT_SEGREDO, {
            subject: usuario.user_id,
            expiresIn: '1h'
        }

        )

        return {
            id: usuario.user_id,
            email: usuario.user_email,
            token: token
        }

    }
}

export { AutenticarUsuarioServices }