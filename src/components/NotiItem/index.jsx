import React from "react";
import { View, Text, Image } from "react-native";

const NotiItem = (props) => {
  const { item } = props;
  console.log(item);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flex: 3,
        }}
      >
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            marginRight: 16,
          }}
          source={{
            uri: item.avatar,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "#000",
          }}
        >
          {item.display_name}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flex: 4,
        }}
      >
        {item.type === "like" ? (
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              color: "#797979",
            }}
          >
            liked your post
          </Text>
        ) : (
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              color: "#797979",
            }}
          >
            commented your post
          </Text>
        )}
        <View>
          <Image
            style={{ width: 70, height: 70 }}
            source={{
              uri: item.items,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default NotiItem;
