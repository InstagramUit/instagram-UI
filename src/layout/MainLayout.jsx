import Home from "../screens/Home";
import Search from "../screens/Search";
import NewPost from "../screens/NewPost";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";
import ProfileSetting from "../screens/ProfileSetting";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, Image } from "react-native";
import logo from "../../assets/logo.jpg";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MainLayout = () => {
  return (
    <Tabs.Navigator>
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
          headerShown: false,
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
export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const ProfileScreen = () => {
  return (
    <Stack.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //   }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileSetting" component={ProfileSetting} />
    </Stack.Navigator>
  );
};
