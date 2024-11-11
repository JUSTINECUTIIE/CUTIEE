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
      </View>
    </View>
  )
}

export default index

// const styles = StyleSheet.create({
//  container:{
//        desplay:'flex',
//        flex:1,
//       alignItems:'center',
//       justifyContent:'center',
//     }
// })

