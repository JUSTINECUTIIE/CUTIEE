import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import CustomButton from '../../components/CustomButton';
import FormField from '../../components/FormField';

const Signup = () => {
  const [isChecked, setCheck] = useState(false);
  const [form, setForm]=useState({
    name:'',
    email:'',
    username:'',
    password:'',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = () =>{ router.push('login') }
  return (
    <View className="flex-1 items-center justify-center bg-black p-4">
      <Text className="font-pmedium mb-8 color-white" style={{fontSize: 60}}>Signup</Text>
      <FormField
        title="Name"
        value={form.name}
        placeholder='Full Name'
        handleChangeText={(e) => setForm({ ...form, name: e })}
      />
      <View className="mt-5"></View>

      <FormField
        title="Username"
        value={form.username}
        placeholder='Username'
        handleChangeText={(e) => setForm({ ...form, username: e })}
      />
      <View className="mt-5"></View>

      <FormField
        title="Email"
        value={form.email}
        placeholder='Email Address'
        handleChangeText={(e) => setForm({ ...form, email: e })}
      />
      <View className="mt-5"></View>
      
      <FormField
        title="Password"
        value={form.password}
        placeholder='Enter your password'
        handleChangeText={(e) => setForm({ ...form, password: e })}
      />
        <View style={{alignItems: "center"}} classname="space-y-4">
          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles={{width: 150, top: 20}}
          >
          </CustomButton>
          </View>
    </View>
  );
};

export default Signup;
