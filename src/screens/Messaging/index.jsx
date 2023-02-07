import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import MessageComponent from "../../components/MessageComponent";

const Messaging = ({ navigation }) => {
  const [message, setMessage] = useState("");
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 16,
        }}
      >
        <TouchableOpacity>
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={() => {
              console.log("test");
              navigation.goBack();
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "500",
          }}
        >
          Username
        </Text>
      </View>
      <ScrollView>
        <MessageComponent />
      </ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}
      >
        <TextInput
          style={{
            flex: 1,
            padding: 8,
            borderWidth: 1,
            borderColor: "#ccc",
            marginRight: 16,
            borderRadius: 8,
          }}
          placeholder="Messaging..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            console.log(message);
            setMessage("");
          }}
        >
          <Feather name="send" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Messaging;
