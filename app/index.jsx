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
      </View>
    </View>
  )
}

export default index