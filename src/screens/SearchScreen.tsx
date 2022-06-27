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
import Layout from "../constants/Layout";
import {useAppSelector} from "../hooks/useRedux";
import musicVideoHelper from "../utils/musicVideoHelper";
import searchHelper from "../utils/searchHelper";

export default function SearchScreen({
  navigation,
}: RootTabScreenProps<"TabSearch">) {
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
    paddingHorizontal: Layout.s,
    paddingTop: Layout.l,
    flexDirection: "row",
  },
  txtInputSearch: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: Layout.s,
    flex: 1,
    marginRight: Layout.s,
  },
  btnFilter: {
    backgroundColor: Colors.white,
    padding: Layout.s,
    borderRadius: 8,
  },
  flatListFilteredSearched: {
    paddingTop: Layout.l,
    paddingHorizontal: Layout.s,
  },
  imgMusicVideo: {
    width: 50,
    height: 50,
    borderRadius: Layout.xl,
    marginRight: Layout.s,
  },
  viewRenderItem: {
    borderWidth: 1,
    borderColor: Colors.white,
    padding: Layout.s,
    borderRadius: 8,
    marginBottom: Layout.s,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
});
