import React from "react";
import { View, Text } from "react-native";

{/**Aula: https://www.youtube.com/watch?v=RGp5xdidde8&list=PLdDT8if5attEd4sRnZBIkNihR-_tE612_&index=18 */}
{/**Para fazer a navegação entre as páginas é necessário passar a propriedade navigation na linha abaixo */}
export default function Contato({ navigation }){
    return (
        <View>
            <View>
                <Text>Nome: Maria</Text>
                <Text>Telefone: (XX) XXXXX-XXXX</Text>
                <Text onPress={() => navigation.navigate('Informacoes', {
                    nome: 'maria',
                    telefone: '(11) 11111-1111',
                    endereco: 'Rua dos bobos',
                    numero: '1111',
                    profissao: 'professor',
                    email: 'maria@gmail.com',
                })} className='text-blue-600'>Informacoes...</Text>
            </View>
            <View>
                <Text>Nome: Asta</Text>
                <Text>Telefone: (XX) XXXXX-XXXX</Text>
                <Text onPress={() => navigation.navigate('Informacoes', {
                    nome: 'Asta',
                    telefone: '(22) 22222-2222',
                    endereco: 'Rua dos Palmitos',
                    numero: '2222',
                    profissao: 'Guarda',
                    email: 'asta@gmail.com',
                })} className='text-blue-600'>Informacoes...</Text>
            </View>
            {/**Aqui eu vou passar uma pessoa sem dados */}
            <View>
                <Text>Nome: Raquel</Text>
                <Text>Telefone: (XX) XXXXX-XXXX</Text>
                <Text onPress={() => navigation.navigate('Informacoes')} className='text-blue-600'>Informacoes...</Text>
            </View>
        </View>
    )
}