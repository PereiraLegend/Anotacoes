import React, { useState } from "react";
import { View, Text, TextInput, Button , StyleSheet, Vibration, TouchableOpacity, Keyboard, Pressable, FlatList } from "react-native";
import Resultado from "./resultado";
import 'tailwindcss/tailwind.css';


export default function Formulario() {

    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [messageResultImc, setMessageResultImc] = useState("Preencha o formulário para obter os resultados")
    const [imc, setImc] = useState(null)
    const [botaotexto, setBotaotexto] = useState("Calcular")
    const [errorMensage, setErrormensage] = useState(null)
    {/**Trabalhando com lista logo abaixo */}
    const [imcLista, setImclista] = useState([])

    function imcCalculo() {
        {/**Uma regra é sempre pensar no usuário e para fazer isso tenho que prever comportamentos do mesmo, como por exemplo colocar a virgula e não o ponto, o que pode dar erro, por isso logo abaixo eu ponho a mesma */}
        let alturaf = altura.replace(",",".")
        let pesof = peso.replace(",",".")
        let totalImc =  (pesof / (alturaf * alturaf)).toFixed(2)
        console.log("total imc: " + totalImc)
        {/**Para gerar a lista de 'histórico de imcs' eu crio o id unico através da data logo abaixo */}
        setImclista( (arr) => [...arr, {id: new Date().getTime(), imc: totalImc}]) 
        setImc(totalImc)

    }

    function verificationImc() {
        if(imc==null){
            Vibration.vibrate()
            {/**Utilizando o comando 'Vibration.vibrate()' eu faço com que o celular vibre, e nesse contexto ele vibra ao deixar de digitar um campo */}
            setErrormensage("campo obrigatório*")
        }
    }

    function validationImc() {
        {/**Isso aqui vai verificar se o valor da altura e peso não está vazio */ }
        console.log(imcLista)
        if (peso != null && altura != null) {
            imcCalculo()
            setAltura(null)
            setPeso(null)
            setMessageResultImc("Seu imc é igual: ")
            setBotaotexto("Calcular novamente")
            setErrormensage(null)
        }
        else {
            verificationImc()
            setImc(null)
            setBotaotexto("Calcular")
            setMessageResultImc("Preencha o peso e a altura")
        }
    }

    return (
        <Pressable onPress={Keyboard.dismiss}> 
            {/** Utilizando o pressable eu torno toda a área pressionável e chamando o 'Keyboard.dismiss' eu faço com ao tocar fora do teclado ele recue*/}
            {/**Aqui eu crio o formulário */}
            { imc == null ? 
            <View className="rounded-xl bg-gray-400 p-[50px] w-[300px]">
                <Text className="text-xl" >Altura:</Text>
                <Text className=" text-red-600"> {errorMensage} </Text>
                {/**Aqui chamo a máquina de estados do react para mudar o estado do texto */}
                <TextInput className="text-xl border rounded-lg p-[5px] mb-[10px]" onChangeText={setAltura} value={altura} placeholder="Ex.: 1.75" keyboardType="numeric" />

                <Text className="text-xl">Peso:</Text>
                <Text className="text-red-600"> {errorMensage} </Text>
                <TextInput className="text-xl border rounded-lg p-[5px] mb-[10px]" onChangeText={setPeso} value={peso} placeholder="Ex.: 74.3" keyboardType="numeric" />

                <TouchableOpacity onPress={() => validationImc()} className="bg-yellow-300 rounded-lg h-[38px] flex items-center justify-center">
                    <Text className="font-bold text-lg">{botaotexto}</Text>
                </TouchableOpacity>
                {/**'TouchableOpacity' é melhor para construir botões principalmente para formulários*/}
            </View>
            :
            <View/>
            }

            {/**Com essa parte de baixo, a condição, a caixa resultado aparece apenas quando o imc for diferente de nulo */}
            { imc != null ? 
            <View className="mt-[30px] text-xl flex justify-center items-center rounded-xl bg-slate-300 h-[300px] w-[300px]">
                {/**</View><Text className="text-xl">O Resultado é: </Text>*/}
                <Text className="text-xl">
                    <Resultado className="text-xl" messageResultImc={messageResultImc} resultImc={imc} />
                </Text>
                <TouchableOpacity onPress={() => validationImc()} className="bg-yellow-300 rounded-lg h-[38px] flex items-center justify-center mt-[20px]">
                    <Text className="font-bold text-lg">{botaotexto}</Text>
                </TouchableOpacity>
            </View>
            : 
            <View/>
            }
            
            {/** Criando lista logo abaixo, passo o data, o item a ser renderizado, e a chave de extração */}
            <FlatList className="" data={imcLista.reverse()} renderItem={
                ({item}) => {
                    return( 
                        <Text className="flex items-center bg-blue-300 mt-1 rounded-lg p-[5px]">
                            <Text className="text-lg font-bold">Resultado imc = {item.imc}</Text>
                        </Text>
                        )
                }}

                keyExtractor={((item)=>{
                    item.id
                })}
            />

        </Pressable>
    )
}

const style = StyleSheet.create({
    btn:{
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF043",
        paddingTop: 14,
        paddingBottom: 14,
    },
    txtbtn:{
        fontSize: 40,
        color: "#fff",
    },
})