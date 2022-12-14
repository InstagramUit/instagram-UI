import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { PageControlView } from "react-native-ios-kit";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-ios-kit";
import { Dimensions } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useHeaderHeight } from "@react-navigation/elements";
import { Video } from "expo-av";
import { useDispatch, useSelector } from "react-redux";
import { apiContext } from "../../../contexts/api.context";
import CommentModal from "../../../components/CommentModal";

const Post = (props) => {
  // redux
  const user = useSelector((state) => state.user);
  // props, state
  const { post } = props;
  const ref = useRef(null);
  const windowHeight = Dimensions.get("screen").height;
  const bottomTabHeight = useBottomTabBarHeight();
  const headerHeight = useHeaderHeight();

  const [like, setLike] = useState(false);
  const [totalLikes, setTotalLikes] = useState(post.totalLikes);
  const [totalComments, setTotalComments] = useState(post.totalComments);
  const [follow, setFollow] = useState(false);
  const handleFollow = () => {};
  const handleLike = () => {
    try {
      let newLike = !like;
      apiContext.setLikePost(post.id, newLike).then((res) => {
        console.log("thay doi like thanh cong.");
        setLike(newLike);
        setTotalLikes(
          newLike ? Number(totalLikes) + 1 : Number(totalLikes) - 1
        );
      });
    } catch (error) {
      console.log(error);
      Alert.alert("Có lỗi xảy ra.");
    }
  };

  useEffect(() => {
    let isLike = post.likes.some((like) => like.id_user == user.id);
    setLike(isLike);
    setFollow(post.follow);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
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
        {Array.isArray(post.items) &&
          post.items.length > 0 &&
          post.items.map((item, index) => {
            if (item.type == "image") {
              return (
                <Image
                  key={index}
                  style={styles.img}
                  resizeMethod="scale"
                  resizeMode="center"
                  source={{
                    uri: item.src,
                  }}
                />
              );
            } else if (item.type == "video") {
              return (
                <Video
                  key={index}
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
                    uri: item.src,
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
        <Text style={styles.name}>@{post.display_name}</Text>
        <Text style={styles.description}>{post.description}</Text>
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
          // gap: 16,
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
              uri:
                post.avatar ||
                "https://res.cloudinary.com/dhz4hr8dq/image/upload/v1669695868/images_xigv3c.jpg",
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
              backgroundColor: follow ? "blue" : "red",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={handleFollow}
          >
            <AntDesign
              name={follow ? "check" : "plus"}
              size={14}
              color="white"
            />
          </Button>
        </View>
        <View style={{ display: "flex", alignItems: "center", marginTop: 16 }}>
          <TouchableOpacity onPress={handleLike}>
            <AntDesign name="heart" size={24} color={like ? "red" : "white"} />
          </TouchableOpacity>
          <Text style={{ color: "white" }}>{totalLikes}</Text>
        </View>
        <View style={{ display: "flex", alignItems: "center", marginTop: 16 }}>
          <TouchableWithoutFeedback onPress={handleShowModal}>
            <AntDesign name="message1" size={24} color="white" />
          </TouchableWithoutFeedback>
          <Text style={{ color: "white" }}>{totalComments}</Text>
          <CommentModal
            showModal={showModal}
            setShowModal={setShowModal}
            onTouchOutside={handleCloseModal}
            comments={post.comments}
            userAvt={post.avatar}
            post={post}
          />
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
    fontSize: 18,
    fontWeight: "400",
    color: "#fff",
    marginTop: 8,
    lineHeight: 21,
  },
});

export default Post;
