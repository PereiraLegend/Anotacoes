import { Url } from "next/dist/shared/lib/router/router"

export interface ProdutosData {
    id: BigInteger,
    name: string,
    brand: string,
    description: string,
    photo: Url,
    price: number,
}
export interface ProdutosResponse {
    data: ProdutosData[]
}