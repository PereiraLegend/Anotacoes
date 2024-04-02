import React from "react";
import { View, Text } from "react-native";

{/**Essa propriedade 'route' abaixo serve para passar dados, nesse caso em json, uma vez que eu passo um dado 'route' eu sou obrigado a passar mais dados*/}
export default function Informacoes({ navigation,route }){
    return (
        <View>
            {/**Chamando o route eu passo dados, e caso não tenha dados a serem passados eu passo o '?' depois da palavra 'params' e assim caso haja um dado vazio ele não vai danificar o códigoe não vai exibir nada*/}
            <Text>Nome: {route.params?.nome}</Text>
            <Text>Telefone: {route.params?.telefone}</Text>
            <Text>Endereço: {route.params?.endereco}</Text>
            <Text>Nº: {route.params?.numero}</Text>
            <Text>Profissao: {route.params?.profissao}</Text>
            <Text>Email: {route.params?.email}</Text>
            <Text onPress={() => navigation.navigate('Contato')} className='text-blue-600'>Contatos...</Text>
        </View>
    )
}