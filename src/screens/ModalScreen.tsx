import {FontAwesome} from "@expo/vector-icons";
import {FlatList, Pressable, StyleSheet, View} from "react-native";
import {Genre, RootStackScreenProps} from "../../types";
import {CustomText} from "../components/atoms";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import {useAppDispatch, useAppSelector} from "../hooks/useRedux";
import {setSelectedGenreId} from "../store/actions";

export default function ModalScreen({
  navigation,
}: RootStackScreenProps<"Modal">) {
  const {genreList} = useAppSelector((state) => state?.musicVideoReducer);
  const searchState = useAppSelector((state) => state?.searchReducer);

  const dispatch = useAppDispatch();

  const setGenreId = (genreId: number) => dispatch(setSelectedGenreId(genreId));

  const onPressClearFilter = () => {
    setGenreId(-1);
    navigation.pop();
  };

  const {container, btnRenderItem, iconCheck, flatListGenres, txtClearFilter} =
    styles;

  const renderItem = ({item}: {item: Genre}) => {
    return (
      <Pressable
        onPress={() => {
          setGenreId(item?.id);
          navigation.pop();
        }}
        style={btnRenderItem}
      >
        <FontAwesome
          name={
            item?.id === searchState?.selectedGenreId
              ? "check-circle"
              : "circle"
          }
          size={25}
          color={Colors.white}
          style={iconCheck}
        />

        <CustomText
          text={item?.name}
          type={"medium"}
          textColor={Colors.white}
          numberOfLines={1}
        />
      </Pressable>
    );
  };

  return (
    <View style={container}>
      <FlatList
        data={genreList}
        renderItem={renderItem}
        contentContainerStyle={flatListGenres}
        initialNumToRender={10}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Pressable onPress={onPressClearFilter}>
            <CustomText
              text={"Clear Filter"}
              type={"bold"}
              textColor={Colors.white}
              underline
              style={txtClearFilter}
            />
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
  flatListGenres: {
    padding: Layout.l,
  },
  txtClearFilter: {
    alignSelf: "flex-end",
    marginBottom: Layout.l,
  },
  btnRenderItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Layout.s,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 8,
    padding: Layout.s,
    flex: 1,
  },
  iconCheck: {
    padding: Layout.xs,
    marginRight: Layout.xs,
  },
});
