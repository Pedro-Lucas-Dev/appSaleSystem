import React, { useState } from "react";
import { Text } from "react-native";
import Input from "../../../components/Input";
import Layout from "../../../components/Layout";

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
    </Layout>
  );
};

export default Login;
