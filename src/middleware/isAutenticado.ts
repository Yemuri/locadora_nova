import { Request, Response, NextFunction } from "express"
import { verify } from 'jsonwebtoken'

interface Payload {
    sub: string
}

export function isAutenticado(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const autToken = req.headers.authorization
    if (!autToken) {
        return res.status(401).end()
    }
    const [, token] = autToken.split(' ')

    try {
        const { sub }: Payload = verify(
            token,
            process.env.JWT_SEGREDO
        ) as Payload
        console.log(sub)

        return next()


    } catch (err) {
        return res.status(401).end()
    }




}