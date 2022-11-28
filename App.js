import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import NewPost from "./src/screens/NewPost";
import Notification from "./src/screens/Notification";
import Profile from "./src/screens/Profile";
import Authentication from "./src/screens/Authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider } from "react-native-ios-kit";
const Stack = createNativeStackNavigator();
const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
import logo from "./assets/logo.jpg";
import ProfileSetting from "./src/screens/ProfileSetting";

const MainScreen = () => {
  return (
    <Tabs.Navigator
    // screenOptions={{
    //   headerShown: false,
    // }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Image source={logo} />,
          tabBarLabel: "",
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name={tabInfo.focused ? "md-home" : "home-outline"}
                size={28}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "",
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name={tabInfo.focused ? "search" : "search-outline"}
                size={28}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="NewPost"
        component={NewPost}
        options={{
          tabBarLabel: "",
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name={tabInfo.focused ? "duplicate" : "duplicate-outline"}
                size={28}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
                // style={{
                //   padding: "8px",
                //   borderWidth: "1px",
                //   borderColor: "red",
                // }}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: "",
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name={tabInfo.focused ? "heart-sharp" : "heart-outline"}
                size={28}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: "Profile",
          tabBarLabel: "",
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name={
                  tabInfo.focused
                    ? "person-circle-sharp"
                    : "person-circle-outline"
                }
                size={28}
                color={tabInfo.focused ? "#006600" : "#8e8e93"}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

const ProfileScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProfileSetting" component={ProfileSetting} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default function App() {
  let user = {
    username: "KimLien",
    password: "123456",
  };

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Authentication" component={Authentication} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
