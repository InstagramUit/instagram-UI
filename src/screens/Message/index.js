import { View, Text } from 'react-native'
import React from 'react'

const Message = () => {
  return (
    <View>
      <Text>Message</Text>
    </View>
  )
}

export default Message

const MessageItem = () => {
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
        <View>
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
                color: "#fff",
                marginTop: 8,
                lineHeight: 21,
            }}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
            eros, pulvinar facilisis justo mollis, auctor consequat urna...
            </Text>
        </View>
      </View>
    );
  };