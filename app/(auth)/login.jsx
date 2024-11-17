import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import CustomButton from '../../components/CustomButton';
import FormField from '../../components/FormField';

const Login = () => {
  const [isChecked, setCheck] = useState(false);
  const [form, setForm]=useState({
    email: '',
    password:''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = () =>{ router.push('/(tabs)/home') }
  return (
    <View className="flex-1 items-center justify-center bg-black p-4">
      <Text className="text-6xl font-pmedium mb-8 color-white">Login</Text>
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

        <View style={{alignItems: "center", marginTop: 50}} classname="space-y-4">
          <CustomButton
            title="Login"
            handlePress={submit}
            containerStyles={{width: 150}}
          >
          </CustomButton>
          </View>
    </View>
  );
};

export default Login;

