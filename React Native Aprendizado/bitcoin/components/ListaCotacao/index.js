import React, { Fragment } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";

export default function ListaCotacao(){
    return (
        <Fragment>
            {/** O Fragment acima é como se fosse uma View vazia serve mais para não ter que colocar o mesmo componente, mas pode ser substituido por uma nova view facilmente*/}
            <View className="w-[100%] flex-row py-[15px] justify-evenly">
                <TouchableOpacity className="flex w-[50px] h-[30px] bg-[#f50d41] rounded-[50px] items-center justify-center" onPress={()=>{}}><Text className=" text-[#ffffff] font-bold text-[14px]">7D</Text></TouchableOpacity>

                <TouchableOpacity className="flex w-[50px] h-[30px] bg-[#f50d41] rounded-[50px] items-center justify-center" onPress={()=>{}}><Text className=" text-[#ffffff] font-bold text-[14px]">15D</Text></TouchableOpacity>

                <TouchableOpacity className="flex w-[50px] h-[30px] bg-[#f50d41] rounded-[50px] items-center justify-center" onPress={()=>{}}><Text className=" text-[#ffffff] font-bold text-[14px]">1M</Text></TouchableOpacity>

                <TouchableOpacity className="flex w-[50px] h-[30px] bg-[#f50d41] rounded-[50px] items-center justify-center" onPress={()=>{}}><Text className=" text-[#ffffff] font-bold text-[14px]">3M</Text></TouchableOpacity>

                <TouchableOpacity className="flex w-[50px] h-[30px] bg-[#f50d41] rounded-[50px] items-center justify-center" onPress={()=>{}}><Text className=" text-[#ffffff] font-bold text-[14px]">6M</Text></TouchableOpacity>
            </View>
            <ScrollView></ScrollView>
        </Fragment>
    )
}