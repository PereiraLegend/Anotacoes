// Caso eu precise de uma comunicação direta com o servidor
/*
import { getCookie } from "cookies-next"
import { redirect } from "next/navigation"

export const fetchServer = async ( // Aqui eu faço a configuração global do header adicionando globalmente a autenticação da chave global senpre que eu chamar esse método para lidar com apis
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
        return redirect("/") // O fecthServer tem diferença, pois aqui caso dê esse protocolo ele redireciona para a pasta base
    }

    return response
}
*/