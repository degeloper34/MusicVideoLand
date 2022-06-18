import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {useQuery} from "react-query";
import {MusicVideo} from "../../types";
import {getMusicVideos} from "../api/requestApi";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

export default function HomeScreen() {
  const {data, isLoading} = useQuery("musicVideos", getMusicVideos);

  console.log("data", data);

  const renderItem = ({item, index}: {item: MusicVideo; index: number}) => {
    return (
      <View
        key={index}
        style={{
          flex: 1,
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

  console.log("isLoading", isLoading);

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
      <FlatList
        data={data?.videos}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{marginBottom: 10}}
        initialNumToRender={10}
        contentContainerStyle={{paddingTop: 10, paddingHorizontal: 10}}
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
