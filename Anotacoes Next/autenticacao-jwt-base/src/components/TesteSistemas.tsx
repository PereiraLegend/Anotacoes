"use client";
import { useEffect, useState } from "react";
import { fetchClient } from "@/app/libs/fetchClient";

export default function TesteSistemas() {
    const [sistemas, setSistemas] = useState([]);

    useEffect(() => {
        const fetchSistemas = async () => {
            try {
                const response = await fetchClient("http://localhost:5001/api/sistema");
                console.log("API status resposta:", response.status);
                if (response.status === 200) {
                    const data = await response.json();
                    console.log("Dados Recebidos:", data);
                    // Verificação do formato de resposta
                    if (Array.isArray(data)) {
                        setSistemas(data); // Se a resposta for diretamente um array
                    } else if (data && Array.isArray(data.data)) {
                        setSistemas(data.data); // Se a resposta tiver uma propriedade 'data' que é um array
                    } else {
                        console.warn("Formato de dados inesperado:", data);
                    }
                } else {
                    console.error("Faha ao buscar sistemas:", response.status, response.statusText);
                }
            } catch (error) {
                console.error("Erro ao buscar sistemas:", error);
            }
        };

        fetchSistemas();
    }, []);

    console.log("Current state of sistemas:", sistemas);

    return <pre>{JSON.stringify(sistemas, null, 2)}</pre>;
}
