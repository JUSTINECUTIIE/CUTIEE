import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Story = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View className="flex-row ml-3">
            <View className="items-center">
            <Image source={require('../assets/images/justine.jpg')}
                style={{height: 70, width: 70, borderRadius: 50}}/>
                <Text>Your Story</Text>
            </View>

            <View className="items-center ml-4">
            <Image source={require('../assets/images/jaylord.jpg')}
                style={{height: 70, width: 70, borderRadius: 50}}/>
                <Text>Jaylord</Text>
            </View>

            <View className="items-center ml-4">
            <Image source={require('../assets/images/hans.jpg')}
                style={{height: 70, width: 70, borderRadius: 50}}/>
                <Text>Hans Uriel</Text>
            </View>

            <View className="items-center ml-4">
            <Image source={require('../assets/images/don.jpg')}
                style={{height: 70, width: 70, borderRadius: 50}}/>
                <Text>Don Charls</Text>
            </View>

            <View className="items-center ml-4">
            <Image source={require('../assets/images/jam.jpg')}
                style={{height: 70, width: 70, borderRadius: 50}}/>
                <Text>Jam Floyd</Text>
            </View>

            <View className="items-center ml-4">
            <Image source={require('../assets/images/nino.jpg')}
                style={{height: 70, width: 70, borderRadius: 50}}/>
                <Text>Niño</Text>
            </View>

            <View className="items-center ml-4">
            <Image source={require('../assets/images/choi.jpg')}
                style={{height: 70, width: 70, borderRadius: 50}}/>
                <Text>James Kent</Text>
            </View>

            <View className="items-center ml-4">
            <Image source={require('../assets/images/jeaver.jpg')}
                style={{height: 70, width: 70, borderRadius: 50}}/>
                <Text>Jeaver</Text>
            </View>
        </View>
    </ScrollView>
  )
}

export default Story

const styles = StyleSheet.create({})