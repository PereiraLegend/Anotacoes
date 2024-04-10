import React from 'react';
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
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}$end=${end_date}`
}

{/**Obs.: o safe area view serve mais para evitar que as dimensões extrapolem quando usadas no ios */}
export default function App() {
  return (
    <SafeAreaView className='flex-1 bg-[#000000] items-center' style={styles.container}>
      
      <StatusBar backgroundColor='#f50d41' barStyle="light-content" style="auto" />

      <PrecoAtual/>
      <HistoricoGrafico/>
      <ListaCotacao/>
      <ItemCotacao/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop: Platform.OS === "android" ? 40: 0
  }
})