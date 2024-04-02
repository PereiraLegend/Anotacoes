import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { useEffect, useState, useRef } from 'react';
import { FontAwesome } from "@expo/vector-icons"

export default function App() {
  {/**Para utilizar a câmera, eu importo ela e crio uma máquina de estados padrão do react, e dentro do use state eu falo que por padrão ele vai carregar a câmera traseira, como dita a sintaxe abaixo*/ }
  const [type, setType] = useState(Camera.Constants.Type.back)
  
  {/**Para retirar uma foto eu uso: */}
  const camRef = useRef(null)

  {/** Para capturar uma foto eu preciso armazenala para isso eu crio abaixo */}
  const [capturedPhoto, setCapturedPhoto] = useState(null)
  
  {/**Abrir modal para tirar uma foto */}
  const [open, setOpen] = useState(false)

  {/**Preciso de uma const que vai solicitar a permissão para o usuário, e depois um useEffect para validar essa solicitação para o usuário*/ }
  const [hasPermission, setHasPermission] = useState(null)
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>Acesso Negado</Text>
  }

  {/**Logo abaixo eu crio uma função que vai setar o local para onde a foto que foi retirada vai */}
  async function takePicture() {
    if(camRef){
      const data = await camRef.current.takePictureAsync()
      setCapturedPhoto(data.uri)
      setOpen(true)
      console.log(data)
    }
  }
  return (
    <SafeAreaView className=" bg-[#fff] flex-1 items-center justify-center" >
      <Text className="text+-green-400 font-bold text-3xl">Testando a Câmera</Text>
      <Camera type={type} className="w-[100%] h-[75%]" ref={camRef}>
        {/**Aqui dentro eu crio os botões para trocar a câmera ou para tirar a foto */}
        <View className="flex-1 bg-transparent flex-row">
          <TouchableOpacity className="absolute bottom-[50px] left-[30px] justify-center items-center bg-[#fff] m-[20px] h-[50px] w-[50px] rounded-lg" onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            )
          }}>
            <FontAwesome name='exchange' size={23} color='red'></FontAwesome>
          </TouchableOpacity>

          <TouchableOpacity className="absolute bottom-[50px] right-[30px] justify-center items-center bg-red-500 m-[20px] h-[50px] w-[50px] rounded-lg" onPress={takePicture}>
            <FontAwesome name='camera' size={23} color='white'></FontAwesome>
          </TouchableOpacity>
        </View>
      </Camera>
      
      { capturedPhoto && (
        <Modal animationType='slide' transparent={true} visible={open}>
          <View className="flex-1 justify-end items-center m-[20px]">
            <TouchableOpacity className="absolute top-[10px] left-[2px] m-[10px]" onPress={()=>{setOpen(false)}}>
              <FontAwesome name='close' size={50} color="red"></FontAwesome>
            </TouchableOpacity>

              <Image className="w-[100%] h-[400px] " source={{ uri : capturedPhoto }}/>
            </View>
        </Modal>
      )}
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
