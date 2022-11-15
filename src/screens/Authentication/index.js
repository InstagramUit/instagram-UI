import React from "react";
import { SafeAreaView, Text, View, Button } from "react-native";

const Authentication = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button
        title="Sign In"
        onPress={() =>
          navigation.navigate("MainScreen", {
            screen: "Home",
          })
        }
        style={{ backgroundColor: "#000" }}
      />
      <Text onPress={() => navigation.push("SignUp")}>Sign In</Text>
    </SafeAreaView>
  );
};

export default Authentication;
