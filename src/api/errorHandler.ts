import {AxiosError} from "axios";
import {Alert} from "react-native";

//Can handle errors by ErrorCode or ErrorMessage with errorHandler function

export function errorHandler(error: AxiosError, message: string) {
  Alert.alert("Something went wrong", message);

  return null;
}
