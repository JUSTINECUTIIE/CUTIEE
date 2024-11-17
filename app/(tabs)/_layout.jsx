<<<<<<< HEAD
import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from '../../contants'
import { Image } from 'react-native'


const TabIcon = ({icon, color, name, focused}) => {

    return (
        <View>
            <Image 
            source={icon}
            resizeMode= "contain"
            tintColor={color}
            className = "w-7 h-7"/>
            
        </View>
    )


}




const TabsLayout = () => {
    
  return (
    <Tabs>
        <Tabs.Screen 
        name='home'
        options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
                <TabIcon 
                icon = {icons.home}
                color= {color}
                name= "Home"
                focused= {focused}
                />
            )
        }}/>

<Tabs.Screen 
        name='bookmark'
        options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
                <TabIcon 
                icon = {icons.bookmark}
                color= {color}
                name= "Bookmark"
                focused= {focused}
                />
            )
        }}/>


<Tabs.Screen 
        name='create'
        options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
                <TabIcon 
                icon = {icons.create}
                color= {color}
                name= "Create"
                focused= {focused}
                />
            )
        }}/>


<Tabs.Screen 
        name='profile'
        options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
                <TabIcon 
                icon = {icons.profile}
                color= {color}
                name= "Profile"
                focused= {focused}
                />
            )
        }}/>


    </Tabs>
  )
}

export default TabsLayout
=======
import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import { Tabs, Redirect, Stack } from 'expo-router'
import {icons} from '../../constants'

const TabIcon = ({icon, color, name, focused}) =>{
  return(
    <View className="flex items-center justify-center">
      <Image
        source={icon}
        resizeMode="contain"
        className="w-6 h-6"
        tintColor={color}
      />
      <Text
        className={`${focused ? "font-ksemibold" : "font-kregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
    
  )
  
}

const TabLayout = () => {
  return (
   <>
    <Tabs
    screenOptions={{
          tabBarActiveTintColor: "#f97316",
          tabBarInactiveTintColor: "black",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "white",
            borderTopWidth: .4,
            borderTopColor: "#84907C",
            height: 60,
          },
        }}>


      <Tabs.Screen
        name="home"
        options={{
          title:'Home',
          headerShown: false,
          tabBarIcon:({color,focused})=>(
           <TabIcon
            icon={icons.home}
            color={color}
            name=""
            focused={focused}
           />
          )
        }}
      />

    <Tabs.Screen
        name="profile"
        options={{
          title:'Profile',
          headerShown:false,
          tabBarIcon:({color, focused})=>(
           <TabIcon
            icon={icons.profile}
            color={color}
            name=""
            focused={focused}
           />
          )
        }}
      />
      
    </Tabs>
    <StatusBar backgroundColor="black" style="light"/>
   </>
  )
}

export default TabLayout
>>>>>>> 5602f6a (First Commit)
