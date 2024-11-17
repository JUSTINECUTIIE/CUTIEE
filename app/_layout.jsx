import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Stack,SplashScreen} from 'expo-router';
import {useFonts} from 'expo-font'
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();


const Mainlayout= () =>{
    const[fontsLoaded,error]= useFonts({
            "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
            "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
            "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
            "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
            "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
            "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
            "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
            "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
            "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
<<<<<<< HEAD
=======
            "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
>>>>>>> 5602f6a (First Commit)
          });
          
          useEffect(() => {
            if (error) throw error;
          
            if (fontsLoaded) {
              SplashScreen.hideAsync();
            }
          }, [fontsLoaded, error]);
          
          if (!fontsLoaded && !error) {
            return null;
          }
          
        
    
    
    return (
<<<<<<< HEAD
        <Stack>
            <Stack.Screen name='index'options={{headShown:false}}/>
        </Stack>
=======
      <>
        <Stack>
            <Stack.Screen name='index'options={{headerShown:false}}/>
            <Stack.Screen name='(tabs)'options={{headerShown:false}}/>
            <Stack.Screen name='(auth)'options={{headerShown:false}}/>
        </Stack>
        <StatusBar backgroundColor="black" style="light"/>
      </>
>>>>>>> 5602f6a (First Commit)
    )
} 


export default Mainlayout


