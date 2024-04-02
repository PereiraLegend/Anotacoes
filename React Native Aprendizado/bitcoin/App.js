import React from 'react';
import { StyleSheet,Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
{/**Obs.: logo acima eu coloque o status bar para ser chamado pelo react ntive e não pelo expo, assim posso controlar ele de uma form melhor */}
import PrecoAtual from './components/PrecoAtual';

{/**Obs.: o safe area view serve mais para evitar que as dimensões extrapolem quando usadas no ios */}
export default function App() {
  return (
    <SafeAreaView className='flex-1 bg-[#000000]' style={styles.container}>
      
      <StatusBar backgroundColor='#f50d41' barStyle="light-content" style="auto" />

      <PrecoAtual/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop: Platform.OS === "android" ? 40: 0
  }
})