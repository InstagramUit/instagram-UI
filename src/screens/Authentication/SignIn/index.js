import React from "react";
import { Button, Text, View } from "react-native";

const SignIn = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Sign In"
        onPress={() =>
          navigation.navigate("MainScreen", {
            screen: "Home",
          })
        }
      />
      <Text onPress={() => navigation.push("SignUp")}>Sign In</Text>
    </View>
  );
};

export default SignIn;
