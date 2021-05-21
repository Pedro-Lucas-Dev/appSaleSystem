import React, { useState } from "react";
import { Text, View } from "react-native";
import Input from "../../../components/Input";
import Layout from "../../../components/Layout";
import { styles } from "./styles";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const updateLoginData = (id, value) => {
    setLoginData({ ...loginData, [id]: value });
  };

  return (
    <Layout>
      <Text>Welcome</Text>
      <View style={styles.InputContainer}>
        <Input
          placeholder="email"
          value={loginData.email}
          onChangeText={(inputName) => updateLoginData("email", inputName)}
        />
        <Input
          placeholder="senha"
          value={loginData.password}
          onChangeText={(inputName) => updateLoginData("password", inputName)}
          secureTextEntry
        />
      </View>
    </Layout>
  );
};
export default Login;
