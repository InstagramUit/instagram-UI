import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { apiContext } from "../../contexts/api.context";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Button } from "react-native-ios-kit";
import Gradient from "react-native-css-gradient";
import * as ImagePicker from "expo-image-picker";

const ProfileSetting = () => {
  const gradient = `linear-gradient(to top, black, white )`;
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      let result = await apiContext.getInfoUser();
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
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      selectionLimit: 5,
    });

    console.log(result);

    if (!result.canceled) {
      setImages(result.assets);
    }
  };

  return (
    <SafeAreaView style={{ width: "100%", height: "100%", flex: 1 }}>
      <View style={styles.header_container}>
        <Image
          style={{ width: "100%", height: 240 }}
          source={{
            uri: userInfo.avatar,
          }}
        />
        <View style={styles.info_container}>
          <View style={{ marginBottom: 16, alignItems: "center" }}>
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
            <TouchableOpacity style={styles.avt_setting}>
              <MaterialIcons
                name="add-a-photo"
                size={18}
                color="black"
                borderWidth={1}
                borderColor="white"
                onPress={pickImage}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "500",
                marginTop: 8,
              }}
            >
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
      <View>
        <View style={styles.container}>
          {console.log("userInfo", userInfo)}
          <View>
            <View>
              <Text style={styles.text_header}>Username</Text>
              <TextInput
                style={styles.input}
                placeholder={userInfo.display_name}
              />
            </View>
            <View style={styles.input_container}>
              <Text style={styles.text_header}>Email</Text>
              <TextInput style={styles.input} placeholder="Enter your email" />
            </View>
            <View style={styles.input_container}>
              <Text style={styles.text_header}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
              />
            </View>
            <View style={styles.input_container}>
              <Text style={styles.text_header}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
              />
            </View>
          </View>
          <View style={{ marginTop: 24 }}>
            <Button
              style={styles.btn}
              onPress={() => {
                navigation.navigate("MainScreen", {
                  screen: "Home",
                });
              }}
              children={
                <Text style={[styles.btn_text, { letterSpacing: 1 }]}>
                  Save
                </Text>
              }
            ></Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileSetting;

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
  avt_setting: {
    position: "absolute",
    bottom: 18,
    width: 24,
    height: 24,
  },
  setting: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 24,
    height: 24,
  },
  container: {
    paddingVertical: 16,
    paddingHorizontal: 36,
  },
  input_container: {
    marginTop: 24,
  },
  input: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontWeight: "400",
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#0D8BE7",
    // shadowOffset: {
    //   width: 2,
    //   height: 2,
    // },
    // shadowColor: "#0D8BE7",
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    borderRadius: 4,
    overflow: "hidden",
    overlayColor: "none",
    marginTop: 8,
  },
  text_header: {
    fontSize: 16,
    fontWeight: "500",
    color: "#797977",
  },
  btn: {
    width: "100%",
    borderRadius: 24,
    padding: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#0D8BE7",
    color: "#ffffff",
  },
  btn_text: {
    fontWeight: "500",
    fontSize: 16,
    color: "#ffffff",
  },
});
