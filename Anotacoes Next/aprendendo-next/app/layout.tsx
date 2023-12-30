import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'APi Teste Estudo', //Aqui defino o titulo real da página quando navegamos // No caso se eu deixar isso definido apenas no layout principal vai ficar para todo o site, e se eu quiser definir um titulo diferente para cada aba eu defini isso nos arquivos layouts de cada pasta rota
  description: 'Generated by create next app',// Aqui mostra a descrição da página abaixo do link
  //Ver https://www.youtube.com/watch?v=Sbl04kOL1dM no minuto 59:00
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}