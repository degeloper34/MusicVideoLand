/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {Entypo, FontAwesome} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import ModalScreen from "../screens/ModalScreen";
import TabOneScreen from "../screens/TabOneScreen";
import SearchScreen from "../screens/SearchScreen";
import HomeScreen from "../screens/HomeScreen";
import {RootStackParamList, RootTabParamList} from "../../types";
import LinkingConfiguration from "./LinkingConfiguration";
import {Pressable} from "react-native";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />

      <Stack.Group
        screenOptions={{presentation: "modal", title: "Select Genre"}}
      >
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <Pressable onPress={() => navigation.pop()}>
                <Entypo name={"cross"} size={25} color={Colors.white} />
              </Pressable>
            ),
            headerStyle: {
              backgroundColor: Colors.black,
            },
            headerTitleStyle: {
              color: Colors.white,
            },
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="TabHome"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.white,
        headerStyle: {
          backgroundColor: Colors.black,
        },
        headerTitleStyle: {
          color: Colors.white,
        },
        tabBarStyle: {
          backgroundColor: Colors.black,
        },
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={{
          title: "</>",
          tabBarIcon: ({color}) => <TabBarIcon name="code" color={color} />,
          tabBarTestID: "TabOne",
        }}
      />
      <BottomTab.Screen
        name="TabHome"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({color}) => <TabBarIcon name="home" color={color} />,
          tabBarTestID: "TabHome",
        }}
      />
      <BottomTab.Screen
        name="TabSearch"
        component={SearchScreen}
        options={{
          title: "Search",
          tabBarIcon: ({color}) => <TabBarIcon name="search" color={color} />,
          tabBarTestID: "TabSearch",
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{marginBottom: -3}} {...props} />;
}
