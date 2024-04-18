import React from "react";
import { View, Text } from "react-native";

export default function PrecoAtual(props){
    return(
        <View className='w-[100%] h-auto items-center mb-[20px]'>
            <Text className='text-[#f50d41] text-3xl font-bold pt-20'>Preco Atual: {props.ultimaCotacao}</Text>
            <Text className='text-white text-sm font-bold'>Última cotação</Text>
        </View>
    )
}