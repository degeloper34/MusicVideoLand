import {useEffect, useState} from "react";
import {
  ActivityIndicator,
  Animated,
  FlatList,
  Image,
  StyleSheet,
  View,
} from "react-native";
import {Genre, MusicVideo} from "../../types";
import {CustomText} from "../components/atoms";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import {useAppDispatch, useAppSelector} from "../hooks/useRedux";
import {getMusicVideo} from "../store/actions";
import musicVideoHelper from "../utils/musicVideoHelper";

export default function HomeScreen() {
  const {musicVideoList, genreList, loading} = useAppSelector(
    (state) => state?.musicVideoReducer
  );

  const dispatch = useAppDispatch();
  const fetchMusicVideo = () => dispatch(getMusicVideo());

  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    fetchMusicVideo();
  }, []);

  useEffect(() => {
    if (!loading) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }).start();
    }
  }, [loading]);

  const {
    container,
    flatListGenres,
    txtGenreName,
    flatListMusicVideos,
    viewMusicVideoItem,
    imgMusicVideo,
    viewMusicVideoBody,
    txtMusicVideoTitle,
    activityIndicator,
  } = styles;

  const renderGenreItem = ({item}: {item: Genre}) => {
    const musicVideosByGenreId = musicVideoHelper.findMusicVideosByGenreId(
      musicVideoList,
      item?.id
    );

    if (musicVideosByGenreId.length === 0) return null;
    return (
      <>
        <CustomText
          text={item?.name}
          type={"bold"}
          fontSize={16}
          style={txtGenreName}
        />

        <FlatList
          data={musicVideosByGenreId}
          renderItem={renderMusicVideoItem}
          initialNumToRender={5}
          keyExtractor={(__, index) => String(index)}
          contentContainerStyle={flatListMusicVideos}
          horizontal
          showsHorizontalScrollIndicator={false}
          removeClippedSubviews
        />
      </>
    );
  };

  const renderMusicVideoItem = ({item}: {item: MusicVideo}) => {
    return (
      <View style={viewMusicVideoItem}>
        <Image
          source={{uri: item.image_url}}
          style={imgMusicVideo}
          resizeMode={"cover"}
          defaultSource={require("../assets/images/icon.png")}
        />
        <View style={viewMusicVideoBody}>
          <CustomText
            text={item?.title}
            type={"medium"}
            numberOfLines={1}
            style={txtMusicVideoTitle}
          />

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

  if (loading) {
    return (
      <ActivityIndicator
        size={"large"}
        color={Colors.white}
        style={activityIndicator}
      />
    );
  }

  return (
    <View style={container}>
      <Animated.FlatList
        data={genreList}
        renderItem={renderGenreItem}
        keyExtractor={(__, index) => String(index)}
        initialNumToRender={5}
        style={[flatListGenres, {opacity: fadeAnim}]}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.black,
  },
  flatListMusicVideos: {
    paddingHorizontal: Layout.s,
    paddingBottom: Layout.l,
    marginBottom: Layout.l,
  },
  flatListGenres: {
    paddingTop: Layout.l,
  },
  txtGenreName: {
    padding: Layout.s,
  },
  viewMusicVideoItem: {
    width: Layout.window.width / 3,
    height: Layout.window.height / 4,
    borderWidth: 1,
    borderColor: Colors.white,
    marginRight: Layout.s,
    borderRadius: 8,
    overflow: "hidden",
  },
  imgMusicVideo: {
    flex: 2,
  },
  viewMusicVideoBody: {
    flex: 1,
    padding: Layout.s,
  },
  txtMusicVideoTitle: {
    flex: 1,
  },
});
