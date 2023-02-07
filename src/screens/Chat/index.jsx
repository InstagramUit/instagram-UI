import React from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ChatComponent from "../../components/ChatComponent";

const Chat = ({ navigation }) => {
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
          Chats
        </Text>
      </View>
      <ScrollView>
        <ChatComponent navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;
