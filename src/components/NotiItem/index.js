import React from "react";
import { View, Text, Image } from "react-native";

const NotiItem = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 16,
        backgroundColor: "#fff",
      }}
    >
      <View>
        <Image
          style={{ width: 60, height: 60, borderRadius: 30 }}
          source={{
            uri: "https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg",
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          color: "#000",
        }}
      >
        yuta__2610
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "400",
          color: "#797979",
        }}
      >
        liked your post
      </Text>
      <View>
        <Image
          style={{ width: 70, height: 70 }}
          source={{
            uri: "https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg",
          }}
        />
      </View>
    </View>
  );
};

export default NotiItem;
