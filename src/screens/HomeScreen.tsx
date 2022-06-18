import {ActivityIndicator, StyleSheet, Text, View} from "react-native";
import {useQuery} from "react-query";
import {getMusicVideos} from "../api/requestApi";
import Colors from "../constants/Colors";

export default function HomeScreen() {
  const {data, isLoading} = useQuery("musicVideos", getMusicVideos);

  console.log("data", data);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Home</Text>
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
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    backgroundColor: Colors.white,
  },
});
