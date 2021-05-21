import { Platform, StatusBar } from "react-native";

export const styles = {
  LayoutContainer: {
    flex: 1,
    backgroundColor: "#05D4FE",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 70,
  },
};
