import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import Resultado from "./resultado";

export default function Formulario(){
    
    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [messageResultImc, setMessageResultImc] = useState("Preencha o formulário para obter os resultados")
    const [imc, setImc] = useState(null)
    const [botaotexto, setBotaotexto] = useState("Calcular")

    function imcCalculo(){
        return setImc( (peso/(altura*altura)).toFixed(2))
    }

    function validationImc(){ {/**Isso aqui vai verificar se o valor da altura e peso não está vazio */}
        if (peso != null && altura != null){
            imcCalculo()
            setAltura(null)
            setPeso(null)
            setMessageResultImc("Seu imc é igual: ")
            setBotaotexto("Calcular novamente")
            return
        }
        setImc(null)
        setBotaotexto("Calcular")
        setMessageResultImc("Preencha o peso e a altura")
    }

    return(
        <View>
            {/**Aqui eu crio o formulário */}
            <View className="bg-gray-400">
                <Text className="" >Altura:</Text>
                <TextInput onChangeText={setAltura} value={altura} placeholder="Ex.: 1.75" keyboardType="numeric"/> 

                <Text>Peso:</Text>
                <TextInput onChangeText={setPeso} value={peso} placeholder="Ex.: 74.3" keyboardType="numeric"/>

                <Button onPress={() => validationImc()} title={botaotexto}/>
            </View>
            <View>
                <Text>O Resultado é: </Text>
                <Text>
                    <Resultado messageResultImc={messageResultImc} resultImc={imc} />

                </Text>
            </View>
        </View>
    )
}