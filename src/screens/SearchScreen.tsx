import {FontAwesome} from "@expo/vector-icons";
import {useEffect, useState} from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import {MusicVideo, MusicVideoList, RootTabScreenProps} from "../../types";
import {CustomText} from "../components/atoms";
import Colors from "../constants/Colors";
import {useAppSelector} from "../hooks/useRedux";
import musicVideoHelper from "../utils/musicVideoHelper";
import searchHelper from "../utils/searchHelper";

export default function SearchScreen({
  navigation,
}: RootTabScreenProps<"TabSearch">) {
  console.log("Render SearchScreen");
  const [searchedText, setSearchedText] = useState<string>("");
  const [filteredSearchedList, setFilteredSearchedList] =
    useState<MusicVideoList>([]);

  const {musicVideoList} = useAppSelector((state) => state?.musicVideoReducer);
  const {selectedGenreId} = useAppSelector((state) => state?.searchReducer);

  const onChangeSearchText = (text: string) => {
    setSearchedText(text);

    const searchedMusicVideoListByTitle = searchHelper.searchMusicVideoByTitle(
      musicVideoList,
      text
    );

    setFilteredSearchedList(searchedMusicVideoListByTitle);
  };

  const onPressFilter = () => {
    navigation.navigate("Modal");
  };

  useEffect(() => {
    console.log("useEffect SearchScreen");

    const musicVideoListByGenreId = musicVideoHelper.findMusicVideosByGenreId(
      musicVideoList,
      selectedGenreId
    );

    setFilteredSearchedList(musicVideoListByGenreId);
  }, [selectedGenreId]);

  const renderItem = ({item}: {item: MusicVideo}) => {
    return (
      <View style={styles.viewRenderItem}>
        <Image
          source={{uri: item.image_url}}
          resizeMode={"cover"}
          style={styles.imgMusicVideo}
          defaultSource={require("../assets/images/icon.png")}
        />
        <CustomText
          text={item?.title}
          type={"medium"}
          fontSize={14}
          numberOfLines={1}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewSearchFilter}>
        <TextInput
          value={searchedText}
          placeholder="Search by title"
          style={styles.txtInputSearch}
          onChangeText={onChangeSearchText}
          autoFocus={true}
          returnKeyType={"done"}
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          maxLength={30}
        />

        <Pressable onPress={onPressFilter} style={styles.btnFilter}>
          <FontAwesome name={"filter"} color={Colors.black} size={20} />
        </Pressable>
      </View>

      <FlatList
        data={filteredSearchedList}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListFilteredSearched}
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
        keyExtractor={(__, index) => String(index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  viewSearchFilter: {
    paddingHorizontal: 10,
    paddingTop: 20,
    flexDirection: "row",
  },
  txtInputSearch: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 10,
    flex: 1,
    marginRight: 10,
  },
  btnFilter: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 8,
  },
  flatListFilteredSearched: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  imgMusicVideo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  viewRenderItem: {
    borderWidth: 1,
    borderColor: Colors.white,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
});
