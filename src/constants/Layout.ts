import {Dimensions} from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,

  xs: 5,
  s: 10,
  m: 15,
  l: 20,
  xl: 25,
  xxl: 30,
};
