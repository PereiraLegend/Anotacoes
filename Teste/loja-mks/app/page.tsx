"use client"
import Image from "next/image";
import { useState } from "react"
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider, } from 'react-query'
import Produtos from "./components/produtos/Produtos";

export default function Home() {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <Produtos />
    </QueryClientProvider>
  );
}
