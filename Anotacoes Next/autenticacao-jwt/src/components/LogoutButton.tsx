"use client"
import { signOut } from "next-auth/react"

export default function LogoutButton() {
    return(
        <div>
            <button className="btn btn-outline bg-slate-400" onClick={() => signOut({ callbackUrl: '/' })}>Sair</button>
        </div>
    )
}