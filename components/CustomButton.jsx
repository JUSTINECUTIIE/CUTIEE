import { Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import React from 'react';

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={isLoading ? null : handlePress}
      activeOpacity={0.7}
      style={[{ paddingVertical: 12, backgroundColor: '#F97316', borderRadius: 13, minHeight: 20, marginTop: 2, borderRadius: 30}, containerStyles]}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={[{ fontSize: 25, fontWeight: "bold", textAlign: 'center', color: "white"}, textStyles]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;