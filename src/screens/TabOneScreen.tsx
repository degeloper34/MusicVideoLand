import {StyleSheet, Text, View} from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.black,
  },
  title: {
    fontSize: Layout.l,
    fontWeight: "bold",
    color: Colors.white,
  },
  separator: {
    marginVertical: Layout.xxl,
    height: 1,
    width: "80%",
    backgroundColor: Colors.white,
  },
});
