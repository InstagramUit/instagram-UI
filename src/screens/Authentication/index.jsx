import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Button } from "react-native-ios-kit";
import Header from "../../components/Header";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const Authentication = ({ navigation }) => {
  const [active, setActive] = useState(true);

  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
      {/* <Header /> */}
      <View
        style={{
          //   height: "100%",
          width: 161,
          display: "flex",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 16,
        }}
      >
        <Image
          style={{ width: "100%", height: 36 }}
          source="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        />
      </View>
      <View>
        <View style={styles.authen_heading}>
          <TouchableOpacity
            style={styles.btn_heading}
            onPress={() => setActive(true)}
          >
            <Text
              style={[
                styles.btn_heading_text,
                {
                  paddingBottom: 8,
                  color: active ? "#0D8BE7" : "#000000",
                  borderBottomWidth: active ? 1 : 0,
                  borderBottomColor: active ? "#0D8BE7" : "#000000",
                },
              ]}
            >
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn_heading}
            onPress={() => setActive(false)}
          >
            <Text
              style={[
                styles.btn_heading_text,
                {
                  paddingBottom: 8,
                  color: !active ? "#0D8BE7" : "#000000",
                  borderBottomWidth: !active ? 1 : 0,
                  borderBottomColor: !active ? "#0D8BE7" : "#000000",
                },
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        {active ? (
          <SignIn navigation={navigation} />
        ) : (
          <SignUp navigation={navigation} />
        )}
        <View
          style={{ display: "flex", alignItems: "center", marginVertical: 16 }}
        >
          <Image
            style={{ height: 1 }}
            source={require("../../../assets/line.jpg")}
          />
          <Text>or</Text>
          <Image source={require("../../../assets/line.jpg")} />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 28, height: 28, marginHorizontal: 16 }}
            source={require("../../../assets/facebook.png")}
          />
          <Image
            style={{ width: 28, height: 28, marginHorizontal: 16 }}
            source={require("../../../assets/google.jpg")}
          />
          <Image
            style={{ width: 28, height: 28, marginHorizontal: 16 }}
            source={require("../../../assets/twitter.jpg")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  authen_heading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 24,
  },
  btn_heading: {
    flex: 1,
    padding: 16,
  },
  btn_heading_text: {
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
  },
  container: {
    paddingVertical: 16,
    paddingHorizontal: 36,
  },
  input_container: {
    marginTop: 24,
  },
  input: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontWeight: "400",
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#0D8BE7",
    // shadowOffset: {
    //   width: 2,
    //   height: 2,
    // },
    // shadowColor: "#0D8BE7",
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    borderRadius: 4,
    overflow: "hidden",
    overlayColor: "none",
    marginTop: 8,
  },
  btn: {
    width: "100%",
    borderRadius: 24,
    padding: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#0D8BE7",
    color: "#ffffff",
  },
  btn_text: {
    fontWeight: "500",
    fontSize: 16,
    color: "#ffffff",
  },
});
