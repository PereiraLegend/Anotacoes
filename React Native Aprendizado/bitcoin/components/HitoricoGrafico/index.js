import React from "react";
import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function HistoricoGrafico(props){
    console.log("Dados do gráfico:", props.infoGraficoData);
    return (
        <View className="w-[90%] h-[220px] bg-slate-600 rounded-lg">
            <LineChart 
            data={{
                datasets:[
                    {
                    data: props.infoGraficoData,
                    },
                ],
            }}
            width={Dimensions.get("window").width}
            height={220}
            yAxisLabel="$"
            xAxisSuffix="K"
            withVerticalLines={false}
            yLabelsOffset={1}
            withVerticalLabels={false}
            chartConfig={{
                backgroundColor:"#000000",
                backgroundGradientFrom:"#232323",
                backgroundGradientTo:"#3F3F3F",
                decimalPlaces:0,
                color:(opacity=1)=> `rgba(255,255,255,${opacity})`,
                labelColor:(opacity=1)=> `rgba(255,255,255,${opacity})`,
                propsForDots:{
                    r:"1",
                    strokeWidth:"1",
                    stroke:"#f50d41",
                },
            }}
            bezier
            />
        </View>
    )
}