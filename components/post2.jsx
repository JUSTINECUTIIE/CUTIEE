import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Post2 = () => {
  return (
    <ScrollView>
        <View className="flex-row ml-3 mt-3">
            <Image source={require('../assets/images/don.jpg')}
                style={{height: 38, width: 38, borderRadius: 50}}/>
            <Text className="ml-2" style={{fontSize: 14}}>donnymarco</Text>
            <Text className="ml-2" style={{fontSize: 10, position: "absolute", top: 17, left: 38}}>TJ Monterde - Palagi</Text>
                <Image source={require('../assets/icons/dots.png')}
                    style={{ position: "absolute", height: 20, width: 15, top: 9, left: 310}}/>
                <Image source={require('../assets/images/don.jpg')}
                    style={{height: 360, width: 360, top: 50, right: 140}}/>
        </View>
    </ScrollView>
  )
}

export default Post2

const styles = StyleSheet.create({})