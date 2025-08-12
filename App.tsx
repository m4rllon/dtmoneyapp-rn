import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'

import theme from './src/global/styles/theme';
import { Home } from './src/screens/Home';
import { Register } from '@/screens/Register';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_700Bold
  })

  if(!fontsLoaded){
    SplashScreen.preventAutoHideAsync()
  } else {
    SplashScreen.hide()
  }

  return (
    <ThemeProvider theme={theme}>
      <Register/>
    </ThemeProvider>
  );
}
