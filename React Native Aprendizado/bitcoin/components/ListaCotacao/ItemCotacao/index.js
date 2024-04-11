import React from "react";
import { View, Text, Image } from "react-native";

export default function ItemCotacao(props){
    return (
        <View className="w-[95%] h-auto bg-blue-300 ml-[3%] mb-[15px] rounded-[10px] flex-row items-center p-[10px] justify-between">
            <View className="w-[36%] h-[100%] flex flex-row items-center justify-between">
                <View className="flex-row items-center ">
                    <Image className="w-[40px] h-[40px] ml-[2px]" source={require("../../../img/bitcoin.png")}/>
                    <Text className="">{props.data}</Text>
                </View>

                <View className="items-end">
                    <Text className="font-bold">{props.valor}</Text>
                </View>    
            </View>
        </View>
    )
}