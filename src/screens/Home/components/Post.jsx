import React, { useEffect, useRef, useState } from "react";
import { CommonActions } from "@react-navigation/native";
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
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Button } from "react-native-ios-kit";
import { Dimensions } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useHeaderHeight } from "@react-navigation/elements";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";
import { useDispatch, useSelector } from "react-redux";
import { apiContext } from "../../../contexts/api.context";
import CommentModal from "../../../components/CommentModal";

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;
const Post = (props) => {
  // redux
  const user = useSelector((state) => state.user);
  // props, state
  const { post, userName, userAvt, navigation } = props;

  const ref = useRef(null);
  const windowHeight = Dimensions.get("screen").height;
  const bottomTabHeight = useBottomTabBarHeight();
  const headerHeight = useHeaderHeight();

  const [like, setLike] = useState(false);
  const [totalLikes, setTotalLikes] = useState(post.totalLikes);
  const [totalComments, setTotalComments] = useState(post.totalComments);
  const [follow, setFollow] = useState(false);

  const [unmutted, setUnmutted] = useState(true);
  const [videoref, setvideoref] = useState(null);
  const [sheetRef, setSheetRef] = useState(useRef(null));
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
    if (post.likes) {
      let isLike = post.likes.some((like) => like.id_user == user.id);
      setLike(isLike);
      setFollow(post.follow);
    }
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
        backgroundColor: "white",
        // height: windowHeight - bottomTabHeight - headerHeight,
        borderBottomWidth: 1,
        borderBottomColor: "#d8d8d8",
        shadowColor: "#d8d8d8",
        shadowOffset: {
          width: "100%",
          height: 1,
        },
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          padding: 16,
        }}
      >
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("UserProfile", {
                user_id: post.id_user,
              });
            }}
          >
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
                  userAvt ||
                  "https://res.cloudinary.com/dhz4hr8dq/image/upload/v1669695868/images_xigv3c.jpg",
              }}
            />
          </TouchableOpacity>
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
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            marginLeft: 16,
            color: "#292929",
          }}
        >
          @{userName}
        </Text>
      </View>
      <PageControlView
        // defaultPage={1}
        // style={{ width: "100%", height: "100%", display: "flex" }}
        // containerStyle={{ height: "100%" }}
        defaultPage={1}
        style={{ display: "flex" }}
        containerStyle={{
          width: "100%",
          height: 300,
          backgroundColor: "#ddd",
        }}
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
                  // height={WINDOW_HEIGHT}
                  source={{
                    uri: item.src,
                  }}
                />
              );
            } else if (item.type == "video") {
              return (
                <View
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <VideoPlayer
                    videoProps={{
                      isLooping: true,
                      shouldPlay: true,
                      resizeMode: Video.RESIZE_MODE_COVER,
                      source: {
                        uri: item.src,
                      },
                      isMuted: unmutted,
                    }}
                    mute={{
                      enterMute: () => setUnmutted(!unmutted),
                      exitMute: () => setUnmutted(!unmutted),
                    }}
                    inFullscreen={false}
                    showControlsOnLoad={true}
                    showFullscreenButton={false}
                    height={WINDOW_WIDTH}
                    width={WINDOW_WIDTH}
                    shouldPlay={true}
                    isLooping={true}
                    style={{
                      aspectRatio: 1 / 1,
                      height: WINDOW_WIDTH,
                      width: WINDOW_WIDTH,
                      backgroundColor: "black",
                    }}
                  />
                  <TouchableOpacity
                    style={{
                      position: "absolute",
                      borderRadius: 500,
                      backgroundColor: "black",
                      width: 40,
                      height: 40,
                      alignItems: "center",
                      justifyContent: "center",
                      margin: 10,
                      bottom: 0,
                      right: 0,
                    }}
                    activeOpacity={1}
                    onPress={() => {
                      setUnmutted(!unmutted);
                    }}
                  >
                    {!unmutted ? (
                      <Feather name="volume-2" size={20} color="white" />
                    ) : (
                      <Feather name="volume-x" size={20} color="white" />
                    )}
                  </TouchableOpacity>
                </View>
              );
            }
          })}
      </PageControlView>
      <View
        style={{
          // position: "absolute",
          // bottom: 80,
          // right: 0,
          // left: 0,
          padding: 16,
        }}
      >
        <Text style={styles.name}>@{userName}</Text>
        <Text style={styles.description}>{post.description}</Text>
      </View>
      <View
        style={{
          position: "absolute",
          top: "25%",
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
    color: "#292929",
  },
  description: {
    fontSize: 18,
    fontWeight: "400",
    color: "#292929",
    marginTop: 8,
    lineHeight: 21,
  },
});

export default Post;
