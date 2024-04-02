import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contato from './pages/contatos';
import Informacoes from './pages/informacoes';
import Main from './pages/main';

{/**Para eu colocar um menu inferior: */}
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

{/**Antes sempre temos que criar uma const stack */}
const Stack = createNativeStackNavigator()
{/**Menu inferior de navagação */}
const Tab = createBottomTabNavigator()

{/**Navegação em baixo 'bottom' */}
function Tabs(){
  return(
    <Tab.Navigator>
      <Tab.Screen name='Main' component={Main}/>
      <Tab.Screen name='Contacts' component={Contato}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={Tabs}/>
        <Stack.Screen name='Informacoes' component={Informacoes}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

{/**Utilizando Drawer: 

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Contato from './pages/contatos';
import Informacoes from './pages/informacoes';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Contato' component={Contato}/>
        <Drawer.Screen name='Informacoes' component={Informacoes}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
*/}