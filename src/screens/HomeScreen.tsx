import {useEffect} from "react";
import {FlatList, Image, StyleSheet, View} from "react-native";
import {MusicVideo} from "../../types";
import {CustomText} from "../components/atoms";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import {useAppDispatch, useAppSelector} from "../hooks/useRedux";
import {getMusicVideo} from "../store/actions";
import musicVideoHelper from "../utils/musicVideoHelper";

export default function HomeScreen() {
  console.log("Render HomeScreen");

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
      <FlatList
        data={Object.keys(musicVideoState?.musicVideoList)}
        renderItem={renderGenreItem}
        initialNumToRender={10}
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
