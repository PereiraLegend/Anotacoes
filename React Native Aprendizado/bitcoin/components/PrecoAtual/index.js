import React from "react";
import { View, Text } from "react-native";

export default function PrecoAtual(){
    return(
        <View className='w-[100%] h-auto items-center'>
            <Text className='text-red-400 text-3xl font-bold pt-20'>Preco Atual: R$ 50.000</Text>
            <Text className='text-white text-sm font-bold'>Última cotação</Text>
        </View>
    )
}