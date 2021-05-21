import React from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";

const Input = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={styles.Input}
    />
  );
};
export default Input;
