import { View, Text } from 'react-native'
import React from 'react'

const FollowersScreen = () => {
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
                backgroundColor: '#0D8BE7',
                color: '#000000',
                borderRadius: 8,
            }}
            >
                Follow
        </Button>
      </View>
    </View>
  )
}

export default FollowersScreen