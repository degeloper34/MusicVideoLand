import {FontAwesome} from "@expo/vector-icons";
import {filter} from "lodash";
import {useEffect, useState} from "react";
import {FlatList, Pressable, StyleSheet, TextInput, View} from "react-native";
import {MusicVideo, RootTabScreenProps} from "../../types";
import {CustomText} from "../components/atoms";
import Colors from "../constants/Colors";
import {useAppSelector} from "../hooks/useRedux";

export default function SearchScreen({
  navigation,
}: RootTabScreenProps<"TabSearch">) {
  console.log("Render SearchScreen");
  const [searchedText, setSearchedText] = useState<string>("");
  const [filteredSearchedList, setFilteredSearchedList] = useState([]);

  const musicVideoState = useAppSelector((state) => state?.musicVideoReducer);

  const onChangeSearchText = (text: string) => {
    console.log("text", text);
    console.log("musicVideoState.videoList", musicVideoState?.videoList);
    setSearchedText(text);

    // filter(musicVideoState.videoList, (eachItem: MusicVideo) =>
    //   eachItem.title.toLowerCase().includes(text)
    // );
    let newList = [];

    newList = musicVideoState.videoList.filter((eachItem, index) => {
      console.log("eachItem", eachItem);
      return eachItem.title.toLowerCase().includes(text);
    });

    setFilteredSearchedList(newList);

    // setFilteredSearchedList(
    // musicVideoState.videoList.filter((eachItem) => {
    //   eachItem?.title.includes(text);
    // })
    // );
  };

  const onPressFilter = () => {
    navigation.navigate("Modal");
  };

  useEffect(() => {
    let newList = [];

    if (musicVideoState?.selectedGenreId !== -1) {
      newList = musicVideoState.videoList.filter((eachItem) => {
        return eachItem?.genre_id === musicVideoState?.selectedGenreId;
      });
    }

    console.log("newList", newList);

    setFilteredSearchedList(newList);
  }, [musicVideoState?.selectedGenreId]);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: Colors.white,
          padding: 10,
          borderRadius: 8,
          marginBottom: 10,
        }}
      >
        <CustomText text={item?.title} type={"medium"} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: 10,
          paddingTop: 20,
          flexDirection: "row",
        }}
      >
        <TextInput
          value={searchedText}
          placeholder="Search..."
          style={{
            backgroundColor: Colors.white,
            borderRadius: 8,
            padding: 10,
            flex: 1,
            marginRight: 10,
          }}
          onChangeText={onChangeSearchText}
          autoFocus={true}
          returnKeyType={"done"}
        />

        <Pressable
          onPress={onPressFilter}
          style={{
            backgroundColor: Colors.white,
            padding: 10,
            borderRadius: 8,
          }}
        >
          <FontAwesome name={"filter"} color={Colors.black} size={20} />
        </Pressable>
      </View>

      <FlatList
        data={filteredSearchedList}
        renderItem={renderItem}
        contentContainerStyle={{paddingTop: 20, paddingHorizontal: 10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});
