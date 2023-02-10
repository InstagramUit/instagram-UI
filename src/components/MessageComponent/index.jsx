import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { apiContext } from "../../contexts/api.context";
import * as moment from "moment";

const MessageComponent = (props) => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      let result = await apiContext.getInfoUser();
      // setPosts(result.data?.posts || []);
      setUserInfo(result.data);
    };
    fetchData().catch((err) => console.log(err));
  }, []);

  const isUser = userInfo.id === props.item.from_id ? true : false;
  const [avatar, setAvatar] = useState(props.avt);
  const time = moment(new Date(props.item.created_at)).utc().format("hh:mm");
  return (
    <View>
      {isUser ? (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingVertical: 8,
            paddingHorizontal: 16,
          }}
        >
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                maxWidth: "80%",
                backgroundColor: "#006600",
                padding: 15,
                borderRadius: 10,
                marginBottom: 2,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: "white",
                }}
              >
                {props.item.content
                  ? props.item.content
                  : "Tap to start chatting"}
              </Text>
            </View>
            <View>
              <Text>{time}</Text>
            </View>
          </View>
        </View>
      ) : (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingVertical: 8,
            paddingHorizontal: 16,
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
            {!avatar ? (
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
                style={{ width: "100%", height: "100%" }}
                source={{
                  uri: avatar,
                }}
              />
            )}
          </View>
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                maxWidth: "80%",
                backgroundColor: "#006600",
                padding: 15,
                borderRadius: 10,
                marginBottom: 2,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: "white",
                }}
              >
                {props.item.content
                  ? props.item.content
                  : "Tap to start chatting"}
              </Text>
            </View>
            <View>
              <Text>{time}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default MessageComponent;
