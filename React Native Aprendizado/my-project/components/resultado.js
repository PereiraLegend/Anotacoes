import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";

export default function Resultado(props){

    {/**Nessa função abaixo eu crio o conteúdo a ser compartilhado com 'Share.share' */}
    const onShare = async () => {
        const result = await Share.share({
            message: "Meu imc hoje é: " + props.resultImc,
        })
    }

    return(
        <View className="text-xl flex items-center justify-center">
            <Text className="text-xl">{props.messageResultImc}</Text>
            <Text className="text-xl">{props.resultImc}</Text>

            {/**Abaixo eu crio uma condicional para mostrar ou não o botão de conpartilhamento */}
            <View >
                {props.resultImc != null ?
                    <TouchableOpacity onPress={onShare} className="bg-yellow-300 rounded-lg p-[5px] mt-[45px]">
                    <Text className="font-bold font-lg">Share</Text>
                    </TouchableOpacity>
                :
                    <View className="unstyled"/>
                }
            </View>
        </View>
    )
}