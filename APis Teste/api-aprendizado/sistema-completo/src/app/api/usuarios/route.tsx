import { NextRequest } from "next/server"

export async function GET(req: NextRequest){
    console.log("Requisição GET")
    return new Response(JSON.stringify({rota:'Usuarios'}), {
        status: 401
    })
}
