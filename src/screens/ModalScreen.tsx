import {FontAwesome} from "@expo/vector-icons";
import {FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import {Genre, RootStackScreenProps} from "../../types";
import Colors from "../constants/Colors";

export default function ModalScreen({
  navigation,
  route,
}: RootStackScreenProps<"Modal">) {
  const {genreList, selectedGenreId, setSelectedGenreId} = route.params;

  const renderItem = ({item}: {item: Genre}) => {
    return (
      <Pressable
        onPress={() => {
          setSelectedGenreId(item.id);
          navigation.pop();
        }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
          flex: 1,
        }}
      >
        <View style={{padding: 5, marginRight: 5}}>
          <FontAwesome
            name={item.id === selectedGenreId ? "check-circle" : "circle"}
            size={25}
            color={Colors.white}
          />
        </View>
        <Text style={{color: Colors.white}}>{item.name}</Text>
      </Pressable>
    );
  };

  const onPressClearFilter = () => {
    setSelectedGenreId(-1);
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={genreList}
        renderItem={renderItem}
        numColumns={2}
        ListFooterComponent={
          <Pressable
            style={{
              alignItems: "center",
            }}
            onPress={onPressClearFilter}
          >
            <Text
              style={{color: Colors.white, textDecorationLine: "underline"}}
            >
              Clear Filter
            </Text>
          </Pressable>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.black,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
