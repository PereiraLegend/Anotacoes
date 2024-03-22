import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './components/titulo';
import Formulario from './components/formulario';

export default function App() {
  return (
    <View className="flex-1 bg-[#fff] justify-center items-center">
      <Text className="text-2xl">Lucas</Text>
      <Titulo/>
      <Formulario/>
      <StatusBar style="auto" />
    </View>
  );
}