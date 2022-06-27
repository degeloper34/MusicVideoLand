import {FontAwesome} from "@expo/vector-icons";
import {FlatList, Pressable, StyleSheet, View} from "react-native";
import {Genre, RootStackScreenProps} from "../../types";
import {CustomText} from "../components/atoms";
import Colors from "../constants/Colors";
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
    padding: 20,
  },
  txtClearFilter: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  btnRenderItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 8,
    padding: 10,
    flex: 1,
  },
  iconCheck: {
    padding: 5,
    marginRight: 5,
  },
});
