import {FontAwesome} from "@expo/vector-icons";
import {FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import {Genre, RootStackScreenProps} from "../../types";
import Colors from "../constants/Colors";
import {useAppDispatch, useAppSelector} from "../hooks/useRedux";
import {setSelectedGenre} from "../store/actions";

export default function ModalScreen({
  navigation,
}: RootStackScreenProps<"Modal">) {
  const musicVideoState = useAppSelector((state) => state?.musicVideoReducer);

  const dispatch = useAppDispatch();

  const setGenre = (genreObj: Genre) => dispatch(setSelectedGenre(genreObj));

  const renderItem = ({item}: {item: Genre}) => {
    return (
      <Pressable
        onPress={() => {
          setGenre(item);
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
            name={
              item.id === musicVideoState.selectedGenre.id
                ? "check-circle"
                : "circle"
            }
            size={25}
            color={Colors.white}
          />
        </View>
        <Text style={{color: Colors.white}}>{item.name}</Text>
      </Pressable>
    );
  };

  const onPressClearFilter = () => {
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={musicVideoState?.genreList}
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
});
