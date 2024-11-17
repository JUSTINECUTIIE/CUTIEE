import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { icons } from '../constants'


const FormField = ({title, value, placeholder, handleChangeText, 
    otherStyles, ...props}) => {

        const [showPassword, setshowPassword] = useState(false)
  return (
    <View className= {`space-y-2 ${otherStyles}`}>
      <Text className = "text-base text-white font-pmedium">
        {title}
    </Text>

    <View className ="border border-[#B562D9] w-full h-14 px-4 bg-none
    rounded-md focus:border-secondary-500 items-center flex-row">
        <TextInput 
        className = "flex-1 text-white"
        value = {value}
        placeholder = {placeholder}
        placeholderTextColor = "white"
        onChangeText = {handleChangeText}
        secureTextEntry = {title === 'Password' && !showPassword}
        />
        
    {title === 'Password' && (
        <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>

            <Image source={!showPassword ? icons.eye : icons.eyeHide}
                className = "w-6 h-6"
                resizeMode="contain"
                style={{tintColor: "white"}}
            />

        </TouchableOpacity>
    )}

    </View>
    </View>
  )
}

export default FormField