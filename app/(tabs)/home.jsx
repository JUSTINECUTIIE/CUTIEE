import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Story from '../../components/story'
import Post from '../../components/post'
import Post1 from '../../components/post1'
import Post2 from '../../components/post2'

const home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View className="flex-row">
        <Text className="font-lobster text-4xl ml-3">Cuttie</Text>
      </View>
      <Story />
      <Post />
      <Post1 />
      <Post2 />
      </ScrollView>
    </SafeAreaView>

  )
}

export default home