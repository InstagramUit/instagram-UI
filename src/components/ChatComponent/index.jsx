import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import * as moment from "moment";

const ChatComponent = (props) => {
  const [messages, setMessages] = useState(props.item.message);

  const time = moment(new Date(messages[0].created_at)).utc().format("hh:mm");

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
        props.navigation.navigate("Messaging", {
          user: props.item.user,
          messages: props.item.message,
        });
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
          overflow: "hidden",
        }}
      >
        {props.item.user.avatar ? (
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{
              uri: props.item.user.avatar,
            }}
          />
        ) : (
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
            {props.item.user.display_name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              opacity: 0.7,
            }}
          >
            {messages ? messages[0].content : "Tap to start chatting"}
          </Text>
        </View>
        <View>
          <Text>{messages ? time : "now"}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatComponent;
