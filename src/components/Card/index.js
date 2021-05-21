import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

const Card = ({ children }) => {
  return <View style={styles.Card}>{children}</View>;
};
export default Card;
