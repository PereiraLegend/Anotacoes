import React from "react";
import { View, Text, Image } from "react-native";

export default function ItemCotacao(){
    return (
        <View className="w-[95%] h-auto bg-blue-300 ml-[3%] mb-[15px] rounded-[10px] flex-row items-center p-[10px]">
            <View className="w-[36%] h-[100%] flex-row items-center">
                <View className="flex flex-row items-center">
                    <Image className="w-[40px] h-[40px] ml-[2px]" source={require("../../../img/bitcoin.png")}/>
                    <Text className="">08/04/2024</Text>
                </View>

                <View className="flex items-end">
                    <Text className="">$ 533331.052</Text>
                </View>    
            </View>
        </View>
    )
}