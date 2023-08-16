import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import theme from './src/utils/theme';
import Home from './src/views/Home';



export default function App() {
  return (
    <View style={theme.continerPrimary}>
      <Home/>
      <StatusBar style="light" backgroundColor='#0A0746'/>
    </View>
  );
}


