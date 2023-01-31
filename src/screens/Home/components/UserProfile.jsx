import { Video } from "expo-av";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { apiContext } from "../../../contexts/api.context";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
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
import Post from "./Post";
import Gradient from "react-native-css-gradient";
import { FlatList } from "react-native-gesture-handler";

const UserProfile = (props) => {
  const user_id = props.route.params.user_id;
  console.log("props :>> ", props);
  const gradient = `linear-gradient(to top, black, white )`;
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      let result = await apiContext.getInfoAnotherUser(user_id);
      // setPosts(result.data?.posts || []);
      setUserInfo(result.data);
    };
    fetchData().catch((err) => console.log(err));
  }, []);
  const subInfo = [
    {
      number: userInfo.posts ? userInfo.posts.length : 0,
      title: "Posts",
    },
    {
      number: userInfo.followers ? userInfo.followers.length : 0,
      title: "Followers",
    },
    {
      number: userInfo.followings ? userInfo.followings.length : 0,
      title: "Following",
    },
  ];
  return (
    <SafeAreaView style={{ width: "100%", height: "100%", flex: 1 }}>
      <View style={styles.header_container}>
        <Image
          style={{ width: "100%", height: 240 }}
          source={{
            uri: userInfo.avatar,
          }}
        />
        <TouchableOpacity style={styles.setting}>
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
        <View style={styles.info_container}>
          <View
            style={{
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                borderWidth: 1,
                borderColor: "#ffffff",
              }}
              source={{
                uri: userInfo.avatar,
              }}
            />
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "500" }}>
              {userInfo.display_name}
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
      {userInfo.posts && userInfo.posts.length > 0 ? (
        <ScrollView
          style={{ width: "100%", height: "100%" }}
          contentContainerStyle={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            // marginTop: 16,
          }}
        >
          <FlatList
            data={userInfo.posts}
            // pagingEnabled
            renderItem={(item) => {
              return (
                <Post
                  post={item.item}
                  userName={userInfo.display_name}
                  userAvt={userInfo.avatar}
                  key={item.index}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
          {/* {DATA.map((item) => {
            if (item.urls[0].type == "image") {
              return (
                <TouchableOpacity
                  key={item}
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 8,
                    overflow: "hidden",
                    marginHorizontal: 4,
                    marginVertical: 4,
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
          })} */}
        </ScrollView>
      ) : (
        <View
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather name="camera" size={64} color="#292929" />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            Chưa có bài viết nào!
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default UserProfile;

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
    left: 16,
    width: 24,
    height: 24,
    zIndex: 99999,
  },
});
