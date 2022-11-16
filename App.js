import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import NewPost from "./src/screens/NewPost";
import FavotitePost from "./src/screens/FavoritePost";
import Profile from "./src/screens/Profile";
import Authentication from "./src/screens/Authentication";
// import SignIn from "./src/screens/Authentication/SignIn";
// import SignUp from "./src/screens/Authentication/SignUp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider } from 'react-native-ios-kit';
const Stack = createNativeStackNavigator();
const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

// const AuthenticationScreen = () => {
//   return (
//     <AuthStack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <AuthStack.Screen
//         name="SignIn"
//         options={{ title: "Sign In" }}
//         component={SignIn}
//       />
//       <AuthStack.Screen
//         name="SignUp"
//         options={{ title: "Sign Up" }}
//         component={SignUp}
//       />
//     </AuthStack.Navigator>
//   );
// };

const MainScreen = () => {
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="Home"
                component={Home}
                options={{
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
                name="FavotitePost"
                component={FavotitePost}
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
                name="Profile"
                component={Profile}
                options={{
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
                {/* <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app hihi!</Text>
        <StatusBar style="auto" />
    </View> */}
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
