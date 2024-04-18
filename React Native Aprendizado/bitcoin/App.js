import React, { useState,useEffect } from 'react';
import { StyleSheet,Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
{/**Obs.: logo acima eu coloque o status bar para ser chamado pelo react ntive e não pelo expo, assim posso controlar ele de uma form melhor */}
import PrecoAtual from './components/PrecoAtual';
import HistoricoGrafico from './components/HitoricoGrafico';
import ListaCotacao from './components/ListaCotacao';
import ItemCotacao from './components/ListaCotacao/ItemCotacao';

{/**Importando a Api */}
function addZero(number){
  if(number <= 9){
    return "0" + number
  }
  else{
    return number
  }
}

function url(qtDias){
  const data = new Date()
  const listUltimosDias = qtDias
  const end_date = `${data.getFullYear}-${addZero(data.getMonth()+1)}-${addZero(data.getDate())}`
  data.setDate(data.getDate() - listUltimosDias)
  const start_date = `${data.getFullYear}-${addZero(data.getMonth()+1)}-${addZero(data.getDate())}`
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`
}

{/**Chamar os valores do gráfico da api: */}
async function getListaPrecoMoedasGrafico(url){
  let responseG = await fetch(url)
  let responseApiG = await responseG.json()
  let selectListaCitacaoG = responseApiG.bpi
  const queryListaMoedas = Object.keys(selectListaCitacaoG).map((key)=>{
      return selectListaCitacaoG[key]
  })
  let dataG = queryListaMoedas
  return dataG
}

{/**Chamar a data e o valor das moedas da api: */}
async function getListaMoedas(url){
  let response = await fetch(url)
  let returnApi = await response.json()
  let selectListaCitacao = returnApi.bpi
  const queryListaMoedas = Object.keys(selectListaCitacao).map((key)=>{
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectListaCitacao[key]
    }
  })
  let data = queryListaMoedas.reverse()
  console.log(data)
  return data
}

{/**Obs.: o safe area view serve mais para evitar que as dimensões extrapolem quando usadas no ios */}
export default function App() {
  const [ListaMoedas, serListaMoedas] = useState([])
  const [GraficoListaMoedas, setGraficoListaMoedas] = useState([0])
  const [Dias, setDias] = useState(30)
  const [UpdateData, setUpdateData] = useState(true)
  const [Preco,setPreco] = useState()

  function updateDias(number){
    setDias(number)
    setUpdateData(true)
  }

  function PrecoCotacao(){
    setPreco(GraficoListaMoedas.pop())
  }

  useEffect(()=>{
    getListaMoedas(url(Dias)).then((data)=>{
      serListaMoedas(data)
    })

    getListaPrecoMoedasGrafico(url(Dias)).then((dataG)=>{
      setGraficoListaMoedas(dataG)
    })
    {/**Para evitar que a chamada de update da data no aplicativo fique em loop e dê erro */}
    PrecoCotacao()
    if(UpdateData){
      setUpdateData(false)
    }
  },[UpdateData])


  return (
    <SafeAreaView className='flex-1 bg-[#000000] items-center' style={styles.container}>
      
      <StatusBar backgroundColor='#f50d41' barStyle="light-content" style="auto" />

      <PrecoAtual ultimaCotacao={Preco}/>
      <HistoricoGrafico infoGraficoData={GraficoListaMoedas}/>
      <ListaCotacao filterDay={updateDias} listTranzacoes={ListaMoedas}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop: Platform.OS === "android" ? 40: 0
  }
})