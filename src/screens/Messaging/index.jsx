import React, { useEffect, useState } from "react";
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
import { apiContext } from "../../contexts/api.context";

const Messaging = (props) => {
  console.log(props);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(props.route.params.messages || []);

  const handleMessage = () => {
    setMessages(preMessages=>([
      ...preMessages,
      {
        content: message,
        created_at: new Date().getTime(),
      },
    ]));
    try {
      apiContext
        .createNewMessage(props.route.params.user.id, message)
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
      Alert.alert("Có lỗi xảy ra.");
    }
    setMessage("");
  };
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
              props.navigation.goBack();
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
          {props.route.params.user.display_name}
        </Text>
      </View>
      <ScrollView>
        {messages?.map((item) => {
          return (
            <MessageComponent
              avt={props.route.params.user.avatar}
              item={item}
            />
          );
        })}
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
          placeholder="Typing..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <TouchableOpacity onPress={handleMessage}>
          <Feather name="send" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Messaging;
