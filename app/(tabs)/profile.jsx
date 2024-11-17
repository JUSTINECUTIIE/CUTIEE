<<<<<<< HEAD
import { View, Text } from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <View>
      <Text>profile</Text>
    </View>
  )
}

export default profile
=======
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
  return (
    <SafeAreaView className="bg-black">
      <View className="bg-black">
      <View className="flex-row items-center mt-3 ">
        <Image source={require('../../assets/icons/dots.png')}
        style={{height: 40, width: 40, left: 20}}/>
        <Text className="font-kmedium text-2xl" style={{left: 94, color: "white"}}>Account</Text>
      </View>

      <View className="items-center mt-5">
        <Image source={require('../../assets/images/justine.jpg')}
        style={{height: 90, width: 90, borderRadius: 50}}/>
      </View>

      <View className="mt-8 ml-5">
        <Text className="opacity-50" style={{fontSize: 11, color: "white", fontWeight: 500}}>FULL NAME</Text>
        <Text className="mt-1 color-white" style={{fontWeight: 700, marginBottom: 20}}>Justine Purisima</Text>
      </View>

      <View className="mt-3 ml-5">
        <Text className="opacity-50" style={{fontSize: 11, color: "white", fontWeight: 500}}>GENDER</Text>
        <Text className="mt-1 color-white" style={{fontWeight: 700, marginBottom: 20}}>Male</Text>
        
      </View>

      <View className="mt-3 ml-5">
        <Text className="opacity-50" style={{fontSize: 11, color: "white", fontWeight: 500}}>EMAIL ADDRESS</Text>
        <Text className="mt-1 color-white" style={{fontWeight: 700, marginBottom: 20}}>justinepuris@gmail.com</Text>
        
      </View>

      <View className="mt-3 ml-5">
        <Text className="opacity-50" style={{fontSize: 11, color: "white", fontWeight: 500}}>PASSWORD</Text>
        <Text className="mt-1 color-white top-1" style={{fontWeight: 700, marginBottom: 20}}>•••••••••••••••••</Text>
        
      </View>

      <View className="mt-3 ml-5">
        <Text className="opacity-50" style={{fontSize: 11, color: "white", fontWeight: 500}}>EMAIL ADDRESS</Text>
        <Text className="mt-1 color-white" style={{fontWeight: 700, marginBottom: 20}}>Talavera, Toledo, Cebu</Text>
        
      </View>

      <View className="mt-3 ml-5 mb-10">
        <Text className="opacity-50" style={{fontSize: 11, color: "white", fontWeight: 500}}>MOBILE NUMBER</Text>
        <Text className="mt-1 color-white" style={{fontWeight: 700, marginBottom: 20, marginBottom: 20}}>+63 923 484 9428</Text>
        
      </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})
>>>>>>> 5602f6a (First Commit)
