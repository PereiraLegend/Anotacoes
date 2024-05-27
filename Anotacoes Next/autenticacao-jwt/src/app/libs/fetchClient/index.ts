"use client"
import { getCookie } from "cookies-next"
import { signOut } from "next-auth/react"

export const fetchClient = async ( // Aqui eu faço a configuração global do header adicionando globalmente a autenticação da chave global senpre que eu chamar esse método para lidar com apis
    input: string | URL | Request,
    init?: RequestInit | undefined
): Promise<Response> => {
    const jwt = getCookie("jwt")

    const response = await fetch(input, {
        ...init,
        headers: {
            ...init?.headers,
            ...(jwt && {authorization: `${jwt}`}),
        },
    });

    if (response.status === 401) {
        await signOut()
    }

    return response
}