import React from "react";
import { Text, View } from "react-native";
import Layout from "./src/components/Layout";

export default function App() {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </Layout>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
};
