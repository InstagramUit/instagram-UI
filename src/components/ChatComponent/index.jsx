import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

const ChatComponent = (props) => {
  const [avatar, setAvatar] = useState(true);
  const [messages, setMessages] = useState({});

  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 16,
      }}
      onPress={() => {
        props.navigation.navigate("Messaging");
      }}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 16,
        }}
      >
        {avatar ? (
          <View
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: "50%",
            }}
          >
            <FontAwesome name="user" size={24} color="black" />
          </View>
        ) : (
          <Image
            source={{
              uri: "https://1.vikiplatform.com/pr/23994pr/6ff3202a20.jpg?x=b&s=590x330&q=h&e=t&f=t&cb=1",
            }}
          />
        )}
      </View>
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              marginBottom: 4,
            }}
          >
            Kim Lien
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              opacity: 0.7,
            }}
          >
            {messages?.text ? messages.text : "Tap to start chatting"}
          </Text>
        </View>
        <View>
          <Text>{messages?.time ? messages.time : "now"}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatComponent;
