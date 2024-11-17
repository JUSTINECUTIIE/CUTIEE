import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Post = () => {
  return (
    <ScrollView>
        <View className="flex-row ml-3 mt-5">
            <Image source={require('../assets/images/hans.jpg')}
                style={{height: 38, width: 38, borderRadius: 50}}/>
            <Text className="ml-2" style={{fontSize: 14}}>hansoyyyyy</Text>
            <Text className="ml-2" style={{fontSize: 10, position: "absolute", top: 17, left: 38}}>James Arthur - Car's Outside</Text>
                <Image source={require('../assets/icons/dots.png')}
                    style={{ position: "absolute", height: 20, width: 15, top: 9, left: 310}}/>
                <Image source={require('../assets/images/pic1.jpg')}
                    style={{height: 360, width: 360, top: 50, right: 130}}/>
        </View>
    </ScrollView>
  )
}

export default Post

const styles = StyleSheet.create({})