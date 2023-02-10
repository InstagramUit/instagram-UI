import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { PageControlView } from "react-native-ios-kit";
import { Dimensions } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useHeaderHeight } from "@react-navigation/elements";
import { Button } from "react-native-ios-kit";

import { apiContext } from "../../contexts/api.context";

const NewPost = ({ navigation }) => {
  const windowHeight = Dimensions.get("screen").height;
  const bottomTabHeight = useBottomTabBarHeight();
  const headerHeight = useHeaderHeight();
  const [images, setImages] = useState([
    // {
    // base64:'',
    // uri:'',
    // type:'',
    // src:''
    // }
  ]);
  const [description, setDescription] = useState("");

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let result = await apiContext.getInfoUser();
      // setPosts(result.data?.posts || []);
      setUserInfo(result.data);
    };
    fetchData().catch((err) => console.log(err));
  }, []);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      selectionLimit: 5,
      aspect: [4, 3],
      allowsEditing: true,
      orderedSelection: true,
      base64: true,
    });
    result.assets.map((item) => {
      console.log(item);
      setImages((preImages) => [
        ...preImages,
        {
          base64: item.base64,
          uri: item.uri,
          type: item.uri.includes("video") ? "video" : "image",
          src: item.uri,
        },
      ]);
    });

    if (!result.canceled) {
      // setImages(result.assets);
    }
  };

  const handelCreatePost = () => {
    try {
      let newPost = {
        items: images,
        description: description,
      };
      console.log(newPost);
      apiContext.createPost(newPost).then((res) => {
        console.log(res);
        if (res?.message == "success") {
          // đổi qua trang profile
          navigation.navigate("Profile");
        } else {
          Alert.alert("Có lỗi xảy ra.");
        }
      });
      setImages([]);
      setDescription("");
    } catch (error) {
      console.log(error);
      Alert.alert("Có lỗi xảy ra.");
    }
  };

  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
      {Array.isArray(images) && images.length > 0 ? (
        <PageControlView
          defaultPage={1}
          style={{ display: "flex" }}
          containerStyle={{
            width: "100%",
            height: 300,
          }}
        >
          {images.map((item, index) => {
            return (
              <Image
                key={index}
                style={styles.img}
                resizeMethod="scale"
                resizeMode="center"
                source={{
                  uri: item.uri,
                }}
              />
            );
          })}
        </PageControlView>
      ) : (
        <Image
          style={{ width: "100%", height: 300 }}
          resizeMethod="scale"
          resizeMode="cover"
          source={require("../../../assets/default-thumbnail.jpg")}
        />
      )}
      <View style={{ margin: 24 }}>
        <Button
          style={styles.btn}
          onPress={pickImage}
          children={
            <Text style={[styles.btn_text, { letterSpacing: 1 }]}>
              Pick an image from camera roll
            </Text>
          }
        ></Button>
      </View>
      {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
      <TextInput
        placeholder="Description"
        multiline={true}
        numberOfLines={5}
        onChangeText={(text) => {
          setDescription(text);
        }}
        style={{
          fontSize: 18,
          fontWeight: "400",
          padding: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
          marginBottom: 8,
        }}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: "400",
          marginHorizontal: 16,
          color: "#797979",
        }}
      >
        Your followers can see your posts in their feeds and on your profile.
      </Text>
      <View style={{ margin: 24 }}>
        <Button
          style={styles.btn}
          onPress={handelCreatePost}
          children={
            <Text style={[styles.btn_text, { letterSpacing: 1 }]}>Post</Text>
          }
        ></Button>
      </View>
    </SafeAreaView>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  img: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
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
// Viết cho Hiếu
