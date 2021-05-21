import React from "react";
import { TextInput } from "react-native";

const Input = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};
export default Input;
