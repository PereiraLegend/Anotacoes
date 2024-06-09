"use client"
import { getCookie } from "cookies-next"
import { signOut } from "next-auth/react"

export const fetchClient = async (
    input: string | URL | Request,
    init?: RequestInit | undefined
): Promise<Response> => {
    const jwt = getCookie("jwt")

    const response = await fetch(input, {
        ...init,
        headers: {
            ...init?.headers,
            ...(jwt && { authorization: `${jwt}` }),
        },
    });

    if (response.status === 401) {
        await signOut()
    }

    return response
}