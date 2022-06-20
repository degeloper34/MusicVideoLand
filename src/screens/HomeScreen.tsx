import {FontAwesome} from "@expo/vector-icons";
import {useContext, useEffect, useState} from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {useQuery} from "react-query";
import {MusicVideo, RootTabScreenProps} from "../../types";
import {getMusicVideos} from "../api/requestApi";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import {MainContext} from "../context/mainContext";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabHome">) {
  const context = useContext(MainContext);

  const {data, isLoading} = useQuery("musicVideos", getMusicVideos);

  const [videoList, setVideoList] = useState<MusicVideo[]>([]);

  useEffect(() => {
    if (context?.selectedGenreId === -1) {
      setVideoList(data?.videos);
    } else {
      const filteredVideoList = data?.videos.filter(
        (eachMusicVideo: MusicVideo) =>
          eachMusicVideo.genre_id === context?.selectedGenreId
      );

      setVideoList(filteredVideoList);
    }
  }, [context?.selectedGenreId, isLoading]);

  const renderItem = ({item, index}: {item: MusicVideo; index: number}) => {
    return (
      <View
        key={index}
        style={{
          width: "48%",
          height: Layout.window.height / 4,
          borderWidth: 1,
          borderColor: Colors.white,
          marginRight: index % 2 === 0 ? 10 : 0,
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
            <Text style={{color: Colors.white}} numberOfLines={1}>
              {item.title}
            </Text>
          </View>
          <Text style={{color: Colors.white}} numberOfLines={1}>
            {item.artist}
          </Text>
          <Text style={{color: Colors.white}}>{item.release_year}</Text>
        </View>
      </View>
    );
  };

  const onPressFilter = () => {
    navigation.navigate("Modal", {
      genreList: data?.genres,
    });
  };

  const onChangeSearchText = (text: string) => {};

  if (isLoading) {
    return (
      <View style={{flex: 1, backgroundColor: Colors.black}}>
        <ActivityIndicator
          size={"large"}
          color={Colors.white}
          style={{flex: 1, justifyContent: "center"}}
        />
      </View>
    );
  }

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
        data={videoList}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{marginBottom: 10}}
        initialNumToRender={10}
        contentContainerStyle={{paddingHorizontal: 10}}
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
