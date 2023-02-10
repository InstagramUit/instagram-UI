import * as React from "react";
import "./src/config/global.config";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./src/screens/Profile";
import Authentication from "./src/screens/Authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider } from "react-native-ios-kit";
import logo from "./assets/logo.jpg";
import MainLayout from "./src/layout/MainLayout";
import store from "./store";
import { Provider } from "react-redux";
import * as moment from "moment";

// moment.locale("vi");

const Stack = createNativeStackNavigator();
const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Authentication" component={Authentication} />
            <Stack.Screen name="MainScreen" component={MainLayout} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}
