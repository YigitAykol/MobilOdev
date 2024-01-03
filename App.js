import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import React, { useState, useEffect } from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation'; // Adjust the path as per your file structure
import {Cart, ProductDetails} from './screens';


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        regular: require("./assets/fonts/Poppins-Regular.ttf"),
        light: require("./assets/fonts/Poppins-Light.ttf"),
        bold: require("./assets/fonts/Poppins-Bold.ttf"),
        medium: require("./assets/fonts/Poppins-Medium.ttf"),
        extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
      });

      setFontsLoaded(true);
      await SplashScreen.hideAsync();
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Bottom Navigation'
          component={BottomTabNavigation}
          options={{headerShown:false}}
        />

        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{headerShown:false}}
        />

        <Stack.Screen
          name='ProductDetails'
          component={ProductDetails}
          options={{headerShown:false}}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    fontFamily: "regular",
    fontSize: 20,
  }
});*/

/*
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import React, { useState, useEffect } from 'react';
import BottomTabNavigation from './path/to/BottomTabNavigation'; // Adjust the path as per your file structure

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        regular: require("./assets/fonts/Poppins-Regular.ttf"),
        light: require("./assets/fonts/Poppins-Light.ttf"),
        bold: require("./assets/fonts/Poppins-Bold.ttf"),
        medium: require("./assets/fonts/Poppins-Medium.ttf"),
        extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
      });

      setFontsLoaded(true);
      await SplashScreen.hideAsync();
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Bottom Navigation'
          component={BottomTabNavigation}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    fontFamily: "regular",
    fontSize: 20,
  }
});*/