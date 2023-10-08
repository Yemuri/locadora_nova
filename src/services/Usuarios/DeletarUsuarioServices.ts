import clientePrisma from "../../prisma";

interface DeletarUsuarios {
    apagar: string
}

class DeletarUsuarioServices {
    async execute({ apagar }: DeletarUsuarios) {
        const id_test = await clientePrisma.user.findFirst({
            where: {
                user_id: apagar
            }
        })

        if (!id_test) {
            return { info: 'Id não encontrado' }
        }
        await clientePrisma.user.delete({
            where: {
                user_id: apagar
            }
        })

        return { dados: 'Registro apagado com sucesso' }


    }
}

export { DeletarUsuarioServices }