<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar'
import {ScroollView,Text,View,Image}from 'react-native'
import {link} from 'expo-router'
import {SafeAreaView} from 'react-native-safe-area-context'
import {images}from '../contants'

export default function App (){
  return (

        <Image
        source={images.logo}
        className="w-[300px] h-[85px] pt-10"
        />
        </Image>
        source={images.imagelogo}
        className = "w-[200px] h-[200px]"
        reziseMode= 'contain'
      />
      <View className ="relative mt-5">
        <Text className="text-2xl text-white font-u_bold
        text-center">A Display of Student Innovative Portfolio with Audience-Driven Recognition</Text>
=======
import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Link, router} from 'expo-router';
import { Image } from 'react-native';
import { image } from '../constants';
import CustomButton from '../components/CustomButton';


const index = () => {
  const submit = () =>{ router.push('/(auth)/login') }
  return (
    <View className="flex-1 items-center bg-black">
        <Image source={image.cuttie}
        style={{height: 350, width: 350, marginTop: 120}}/>        
        <View style={{alignItems: "center"}} classname="space-y-4">
          <CustomButton
            title="Login"
            handlePress={submit}
            containerStyles={{width: 150}}
          >
          </CustomButton>
          </View>
      <View className="flex-row top-[140]">
      <Text className="font-medium text-orange-500" style={{fontSize: 15}}>Don't have an account? </Text>
      <Link className="font-medium text-orange-500 underline" style={{fontSize: 15}} href="/signup">Sign Up</Link>
>>>>>>> 5602f6a (First Commit)
      </View>
    </View>
  )
}

<<<<<<< HEAD
export default index

// const styles = StyleSheet.create({
//  container:{
//        desplay:'flex',
//        flex:1,
//       alignItems:'center',
//       justifyContent:'center',
//     }
// })

=======
export default index
>>>>>>> 5602f6a (First Commit)
