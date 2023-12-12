// Ao criar uma api aqui eu irei definir uma rota, que no caso do next difere um pouco do convencional

import { NextRequest } from "next/server"

// A diferença é que eu chamo o verbo html dentro do js
// Mais informações e formas avançadas no vídeo: https://www.youtube.com/watch?v=Sbl04kOL1dM minuto 1:08:00
export async function GET(req: NextRequest){
    console.log("Requisição GET")

    return new Response(JSON.stringify({name:'carlos'}), {
        status: 401
    })
}
export async function POST(req: NextRequest){
    const body = await req.json()
    console.log("Requisição POST", body)

    return new Response('OK')
}