import React, { useState, useEffect } from "react";
import { Button, Image, View, StyleSheet, SafeAreaView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { PageControlView } from "react-native-ios-kit";
import { Dimensions } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useHeaderHeight } from "@react-navigation/elements";

const NewPost = () => {
  const windowHeight = Dimensions.get("screen").height;
  const bottomTabHeight = useBottomTabBarHeight();
  const headerHeight = useHeaderHeight();
  const [images, setImages] = useState([]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      // allowsEditing: true,
      // aspect: [4, 3],
      // quality: 5,
      selectionLimit: 5,
    });

    console.log(result);

    if (!result.canceled) {
      setImages(result.assets);
    }
  };

  return (
    <SafeAreaView>
      <Button title="Pick an image from camera roll" onPress={pickImage} />

      {/* {images.map((item) => {
        return (
          <Image
            source={{ uri: item.uri }}
            style={{ width: 200, height: 200 }}
          />
        );
      })} */}
      <PageControlView
        defaultPage={1}
        style={{ display: "flex" }}
        containerStyle={{
          width: "100%",
          height: windowHeight - headerHeight - bottomTabHeight,
        }}
      >
        {images.map((item) => {
          // if (item.type == "image") {
          return (
            <Image
              style={{ height: "100%" }}
              resizeMethod="scale"
              resizeMode="cover"
              source={{
                uri: item.uri,
              }}
            />
          );
          // } else if (item.type == "video") {
          //   return (
          //     <Video
          //       ref={ref}
          //       style={{
          //         width: "100%",
          //         height: "100%",
          //         justifyContent: "center",
          //       }}
          //       resizeMethod="scale"
          //       resizeMode="contain"
          //       shouldPlay
          //       source={{
          //         uri: item.url,
          //       }}
          //       videoStyle={{ position: "relative" }}
          //       isLooping
          //       shouldRasterizeIOS={true}
          //     />
          //   );
          // }
        })}
      </PageControlView>
    </SafeAreaView>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "fill",
    resizeMethod: "scale",
  },
});
