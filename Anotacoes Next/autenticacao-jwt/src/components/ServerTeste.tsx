/*
import { fetchServer } from "../app/libs/fetchServer";

export default async function ServerTeste() {
    async function fetchSistemas() {
        "use server"; // Aqui eu renderizo do lado do servidor
        const response = await fetchServer("http://localhost:5001/api/sistemas")
        if (response.status !== 200){
            return { error: response.statusText }
        }
        return response.json()
        
    }
    
    const sistemas = await fetchSistemas()

    return <pre>{JSON.stringify(sistemas, null, 2)}</pre>
}
*/