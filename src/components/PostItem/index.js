import React, { useRef, useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { PageControlView } from "react-native-ios-kit";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-ios-kit";
import { Dimensions } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useHeaderHeight } from "@react-navigation/elements";
import { Video } from "expo-av";

const PostItem = ({ props }) => {
  const windowHeight = Dimensions.get("screen").height;
  const bottomTabHeight = useBottomTabBarHeight();
  const headerHeight = useHeaderHeight();

  const [like, setLike] = useState(false);

  const ref = useRef(null);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        height: windowHeight - bottomTabHeight - headerHeight,
      }}
    >
      <PageControlView
        defaultPage={1}
        style={{ width: "100%", height: "100%", display: "flex" }}
        containerStyle={{ height: "100%" }}
      >
        {props.urls.map((item) => {
          if (item.type == "image") {
            return (
              <Image
                style={styles.img}
                resizeMethod="scale"
                resizeMode="center"
                source={{
                  uri: item.url,
                }}
              />
            );
          } else if (item.type == "video") {
            return (
              <Video
                ref={ref}
                style={{
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                }}
                resizeMethod="scale"
                resizeMode="contain"
                shouldPlay
                source={{
                  uri: item.url,
                }}
                videoStyle={{ position: "relative" }}
                isLooping
                shouldRasterizeIOS={true}
              />
            );
          }
        })}
      </PageControlView>
      <View
        style={{
          position: "absolute",
          bottom: 80,
          right: 0,
          left: 0,
          padding: 16,
        }}
      >
        <Text style={styles.name}>@keem_liennn</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna...
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          top: "50%",
          right: 0,
          padding: 16,
          // transform: [{ translateY: `-50%` }],
          zIndex: 9999,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
        }}
      >
        <View>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              borderWidth: 1,
              borderColor: "#fff",
            }}
            source={{
              uri: "https://www.allkpop.com/upload/2022/06/content/050039/1654403969-yuta-universe-283-29.jpg",
            }}
          />
          <Button
            style={{
              position: "absolute",
              left: 16,
              bottom: -9,
              paddingVertical: 1,
              paddingHorizontal: 2,
              borderRadius: 12,
              backgroundColor: "#0D8BE7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {}}
          >
            <AntDesign name="plus" size={14} color="white" />
          </Button>
        </View>
        <View style={{ marginTop: 16 }}>
          <TouchableOpacity onPress={() => setLike(!like)}>
            <AntDesign name="heart" size={24} color={like ? "red" : "white"} />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 16 }}>
          <AntDesign name="message1" size={24} color="white" />
        </View>
        <View style={{ marginTop: 16 }}>
          <AntDesign name="sharealt" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#fff",
    marginTop: 8,
    lineHeight: 21,
  },
});

export default PostItem;
