import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-ios-kit'

const FollowingScreen = () => {
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
      <View>
        <Button
            style={{
                backgroundColor: '#000000',
                color: '#808080',
                borderRadius: 8,
                border: '#808080',
            }}
            >
                Unfollow
        </Button>
      </View>
    </View>
  )
}

export default FollowingScreen