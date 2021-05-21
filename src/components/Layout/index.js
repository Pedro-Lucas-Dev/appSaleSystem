import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

const Layout = ({ children }) => {
  return <View style={styles.LayoutContainer}>{children}</View>;
};
export default Layout;
