import { Platform, StatusBar } from "react-native";

export const styles = {
  LayoutContainer: {
    flex: 1,
    backgroundColor: "#FF5733",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 70,
  },
};
