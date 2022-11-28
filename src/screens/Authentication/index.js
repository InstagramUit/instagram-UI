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
import API from "../../services/API.context";

const api = new API();
const Authentication = ({ navigation }) => {
  const [active, setActive] = useState(true);

  const handleLogin = () => {
    api
      .UserLogin("bibi030301@gmail.com", "123123")
      .then((res) => console.log("res >> ", res));
  };
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
      <Header />
      <View>
        <View style={styles.authen_heading}>
          {/* <View
            style={styles.btn_heading}
            accessibilityRole="button"
            // onPress={() =>
            //   navigation.navigate("MainScreen", {
            //     screen: "Home",
            //   })
            // }
          >
            <Text style={styles.btn_heading_text}>Sign In</Text>
          </View> */}
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
          <View style={styles.container}>
            <View>
              <View>
                <Text>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                />
              </View>
              <View style={styles.input_container}>
                <Text>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                />
              </View>
              <View style={{ alignItems: "flex-end", marginTop: 16 }}>
                <Text>Forgot Password?</Text>
              </View>
            </View>
            <View style={{ marginTop: 24 }}>
              <Button
                style={styles.btn}
                onPress={handleLogin}
                // onPress={() => {
                //   navigation.navigate("MainScreen", {
                //     screen: "Home",
                //   });
                // }}
                children={
                  <Text style={[styles.btn_text, { letterSpacing: 1 }]}>
                    Sign In
                  </Text>
                }
              ></Button>
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <View>
              <View>
                <Text>Username</Text>
                <TextInput style={styles.input} placeholder="Enter your name" />
              </View>
              <View style={styles.input_container}>
                <Text>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                />
              </View>
              <View style={styles.input_container}>
                <Text>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                />
              </View>
              <View style={styles.input_container}>
                <Text>Confirm Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                />
              </View>
            </View>
            <View style={{ marginTop: 24 }}>
              <Button
                style={styles.btn}
                onPress={() => {
                  navigation.navigate("MainScreen", {
                    screen: "Home",
                  });
                }}
                children={
                  <Text style={[styles.btn_text, { letterSpacing: 1 }]}>
                    Sign Up
                  </Text>
                }
              ></Button>
            </View>
          </View>
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
      {/* <Button
        inline
        rounded
        onPress={() =>
          navigation.navigate("MainScreen", {
            screen: "Home",
          })
        }
      >
        Button (inline/rounded)
      </Button> */}
      {/* <Text onPress={() => navigation.push("SignUp")}>Sign In</Text> */}
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
    height: "100%",
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
