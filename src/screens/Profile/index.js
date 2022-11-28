import { Video } from "expo-av";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
// import { Button } from "react-native-ios-kit";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import Gradient from "react-native-css-gradient";

const Profile = ({ navigation }) => {
  const gradient = `linear-gradient(to top, black, white )`;
  const subInfo = [
    {
      number: 100,
      title: "Posts",
    },
    {
      number: 100,
      title: "Followers",
    },
    {
      number: 100,
      title: "Following",
    },
  ];
  const [DATA, setData] = useState([
    {
      id: 1,
      urls: [
        {
          type: "image",
          url: "https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg",
        },
        {
          type: "image",
          url: "https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg",
        },
        {
          type: "video",
          url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",
        },
      ],
      username: "keem_liennn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisleros, pulvinar facilisis justo mollis, auctor consequat urna...",
      user_avt:
        "https://www.allkpop.com/upload/2022/06/content/050039/1654403969-yuta-universe-283-29.jpg",
      likes: 123,
      isLiked: false,
      comments: [""],
    },
    {
      id: 2,
      urls: [
        {
          type: "image",
          url: "https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg",
        },
        {
          type: "image",
          url: "https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg",
        },
        {
          type: "video",
          url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",
        },
      ],
      username: "keem_liennn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisleros, pulvinar facilisis justo mollis, auctor consequat urna...",
      user_avt:
        "https://www.allkpop.com/upload/2022/06/content/050039/1654403969-yuta-universe-283-29.jpg",
      likes: 123,
      isLiked: false,
      comments: [""],
    },
    {
      id: 3,
      urls: [
        {
          type: "image",
          url: "https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg",
        },
        {
          type: "image",
          url: "https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg",
        },
        {
          type: "video",
          url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",
        },
      ],
      username: "keem_liennn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisleros, pulvinar facilisis justo mollis, auctor consequat urna...",
      user_avt:
        "https://www.allkpop.com/upload/2022/06/content/050039/1654403969-yuta-universe-283-29.jpg",
      likes: 123,
      isLiked: false,
      comments: [""],
    },
    {
      id: 4,
      urls: [
        {
          type: "image",
          url: "https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg",
        },
        {
          type: "image",
          url: "https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg",
        },
        {
          type: "video",
          url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",
        },
      ],
      username: "keem_liennn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisleros, pulvinar facilisis justo mollis, auctor consequat urna...",
      user_avt:
        "https://www.allkpop.com/upload/2022/06/content/050039/1654403969-yuta-universe-283-29.jpg",
      likes: 123,
      isLiked: false,
      comments: [""],
    },
    {
      id: 1,
      urls: [
        {
          type: "image",
          url: "https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg",
        },
        {
          type: "image",
          url: "https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg",
        },
        {
          type: "video",
          url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",
        },
      ],
      username: "keem_liennn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisleros, pulvinar facilisis justo mollis, auctor consequat urna...",
      user_avt:
        "https://www.allkpop.com/upload/2022/06/content/050039/1654403969-yuta-universe-283-29.jpg",
      likes: 123,
      isLiked: false,
      comments: [""],
    },
    {
      id: 2,
      urls: [
        {
          type: "image",
          url: "https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg",
        },
        {
          type: "image",
          url: "https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg",
        },
        {
          type: "video",
          url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",
        },
      ],
      username: "keem_liennn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisleros, pulvinar facilisis justo mollis, auctor consequat urna...",
      user_avt:
        "https://www.allkpop.com/upload/2022/06/content/050039/1654403969-yuta-universe-283-29.jpg",
      likes: 123,
      isLiked: false,
      comments: [""],
    },
    {
      id: 3,
      urls: [
        {
          type: "image",
          url: "https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg",
        },
        {
          type: "image",
          url: "https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg",
        },
        {
          type: "video",
          url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",
        },
      ],
      username: "keem_liennn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisleros, pulvinar facilisis justo mollis, auctor consequat urna...",
      user_avt:
        "https://www.allkpop.com/upload/2022/06/content/050039/1654403969-yuta-universe-283-29.jpg",
      likes: 123,
      isLiked: false,
      comments: [""],
    },
    {
      id: 4,
      urls: [
        {
          type: "image",
          url: "https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg",
        },
        {
          type: "image",
          url: "https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg",
        },
        {
          type: "video",
          url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",
        },
      ],
      username: "keem_liennn",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisleros, pulvinar facilisis justo mollis, auctor consequat urna...",
      user_avt:
        "https://www.allkpop.com/upload/2022/06/content/050039/1654403969-yuta-universe-283-29.jpg",
      likes: 123,
      isLiked: false,
      comments: [""],
    },
  ]);
  return (
    <SafeAreaView style={{ width: "100%", height: "100%", flex: 1 }}>
      <View style={styles.header_container}>
        <Image
          style={{ width: "100%", height: 240 }}
          source={{
            uri: "https://vtv1.mediacdn.vn/zoom/700_438/2020/6/10/5aedc4ae46ab8-sehun-1-600x450-15917615965621479454230.jpg",
          }}
        />
        <TouchableOpacity
          style={styles.setting}
          onPress={() => {
            console.log("test :>> ", test);
            navigation.navigate("ProfileSetting");
          }}
        >
          <AntDesign name="setting" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.info_container}>
          <View style={{ marginBottom: 16 }}>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                borderWidth: 1,
                borderColor: "#ffffff",
              }}
              source={{
                uri: "https://i.pinimg.com/736x/a9/1b/46/a91b46190f00a3442ff2ba5e9ee7178f.jpg",
              }}
            />
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "500" }}>
              Keem_Liennn
            </Text>
          </View>
          <View style={styles.sub_info}>
            {subInfo.map((item) => {
              return (
                <View style={styles.sub_info_item}>
                  <Text
                    style={{ color: "#fff", fontSize: 16, fontWeight: "500" }}
                  >
                    {item.number}
                  </Text>
                  <Text
                    style={{ color: "#fff", fontSize: 14, fontWeight: "400" }}
                  >
                    {item.title}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
        <Gradient
          gradient={gradient}
          style={[styles.layer, { width: "100%", height: 240 }]}
        />
      </View>
      <ScrollView
        style={{ width: "100%", height: "100%" }}
        contentContainerStyle={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 16,
        }}
      >
        {DATA.map((item) => {
          if (item.urls[0].type == "image") {
            return (
              <TouchableOpacity
                style={{
                  width: 160,
                  height: 160,
                  borderRadius: 8,
                  overflow: "hidden",
                  marginHorizontal: 16,
                  marginVertical: 16,
                }}
              >
                <Image
                  style={styles.img}
                  resizeMethod="scale"
                  resizeMode="cover"
                  source={{
                    uri: item.urls[0].url,
                  }}
                />
              </TouchableOpacity>
            );
          } else if (item.urls[0].type == "video") {
            return (
              <TouchableOpacity
                style={{
                  width: 160,
                  height: 160,
                  borderRadius: 8,
                  overflow: "hidden",
                  marginHorizontal: 16,
                  marginVertical: 16,
                }}
              >
                <Video
                  style={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                  }}
                  resizeMethod="scale"
                  resizeMode="contain"
                  shouldPlay
                  source={{
                    uri: "https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh.jpg",
                  }}
                  videoStyle={{ position: "relative" }}
                  isLooping
                  shouldRasterizeIOS={true}
                />
              </TouchableOpacity>
            );
          }
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header_container: {
    width: "100%",
    height: 240,
  },
  layer: {
    position: "absolute",
    bottom: 0,
    opacity: 0.3,
    zIndex: 1,
  },
  info_container: {
    position: "absolute",
    bottom: 24,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },
  sub_info: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    marginHorizontal: 32,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 8,
  },
  sub_info_item: {
    minWidth: 100,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  setting: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 24,
    height: 24,
  },
});
