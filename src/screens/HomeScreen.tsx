import {FontAwesome} from "@expo/vector-icons";
import {useEffect} from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {MusicVideo, RootTabScreenProps, Genre} from "../../types";
import {CustomText} from "../components/atoms";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import {useAppDispatch, useAppSelector} from "../hooks/useRedux";
import {getMusicVideo} from "../store/actions";
import musicVideoHelper from "../utils/musicVideoHelper";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabHome">) {
  console.log("Render TabHome");

  const musicVideoState = useAppSelector((state) => state?.musicVideoReducer);

  const dispatch = useAppDispatch();

  const fetchMusicVideo = () => dispatch(getMusicVideo());

  useEffect(() => {
    fetchMusicVideo();
  }, []);

  const renderItem = ({item, index}: {item: MusicVideo; index: number}) => {
    return (
      <View
        key={index}
        style={{
          width: Layout.window.width / 3,
          height: Layout.window.height / 4,
          borderWidth: 1,
          borderColor: Colors.white,
          marginRight: 10,
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <Image
          source={{uri: item.image_url}}
          style={{flex: 2}}
          resizeMode={"cover"}
          defaultSource={require("../assets/images/icon.png")}
        />
        <View style={{flex: 1, padding: 10}}>
          <View style={{flex: 1}}>
            <CustomText text={item?.title} type={"medium"} numberOfLines={1} />
          </View>
          <CustomText
            text={item?.artist}
            type={"regular"}
            numberOfLines={1}
            fontSize={12}
          />
          <CustomText
            text={item?.release_year}
            type={"regular"}
            numberOfLines={1}
            textColor={Colors.gray}
            fontSize={10}
          />
        </View>
      </View>
    );
  };

  const onChangeSearchText = (text: string) => {};
  const onPressFilter = () => {
    navigation.navigate("Modal");
  };

  // if (isLoading) {
  //   return (
  //     <View style={{flex: 1, backgroundColor: Colors.black}}>
  //       <ActivityIndicator
  //         size={"large"}
  //         color={Colors.white}
  //         style={{flex: 1, justifyContent: "center"}}
  //       />
  //     </View>
  //   );
  // }

  const renderGenreItem = ({item}: {item: string}) => {
    return (
      <View style={{marginBottom: 20}}>
        <View style={{padding: 10}}>
          <CustomText
            text={musicVideoHelper.findGenreTitleByGenreId(
              musicVideoState?.genreList,
              item
            )}
            type={"bold"}
            fontSize={16}
          />
        </View>

        <FlatList
          data={musicVideoState?.musicVideoList[item]}
          renderItem={renderItem}
          initialNumToRender={10}
          contentContainerStyle={{paddingHorizontal: 10}}
          horizontal
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}
      >
        <TextInput
          placeholder="Search..."
          style={{
            flex: 1,
            backgroundColor: Colors.white,
            marginRight: 10,
            height: "100%",
            borderRadius: 8,
            padding: 10,
          }}
          onChangeText={onChangeSearchText}
        />

        <Pressable
          onPress={onPressFilter}
          style={{backgroundColor: Colors.white, padding: 10, borderRadius: 8}}
        >
          <FontAwesome name={"filter"} color={Colors.black} size={20} />
        </Pressable>
      </View>

      <FlatList
        data={Object.keys(musicVideoState?.musicVideoList)}
        renderItem={renderGenreItem}
        initialNumToRender={10}
      />

      {/* {Object.keys(musicVideoState?.musicVideoList).map(
        (eachGenreId, index) => {
          console.log("eachGenreId", eachGenreId);
          return (
            <View key={index.toString()}>
              <Text style={{color: "white"}}>{eachGenreId}</Text>
            </View>
          );
        }
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});
