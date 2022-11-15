import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Button from "@ant-design/react-native/lib/button";

const SignIn = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button
        onPress={() =>
          navigation.navigate("MainScreen", {
            screen: "Home",
          })
        }
      >
        Sign In
      </Button>
      {/* <Button
        title="Sign In"
        onPress={() =>
          navigation.navigate("MainScreen", {
            screen: "Home",
          })
        }
        style={{ backgroundColor: "#000" }}
      /> */}
      <Text onPress={() => navigation.push("SignUp")}>Sign In</Text>
    </SafeAreaView>
  );
};

export default SignIn;
