import moment from 'moment-timezone'
import 'moment/locale/vi'
import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { apiContext } from "../../contexts/api.context";


const CommentModal = (props) => {
  const { showModal, setShowModal, onTouchOutside, post } = props;


  
  const windowHeight = Dimensions.get("window").height;
  const renderOutsideTouchable = (onTouchOutside) => {
    const view = <View style={{ flex: 1, width: "100%" }} />;
    if (!onTouchOutside) return view;
    return (
      <TouchableWithoutFeedback
        onPress={onTouchOutside}
        style={{ flex: 1, width: "100%" }}
      >
        {view}
      </TouchableWithoutFeedback>
    );
  };
  // render comments

  const [comments, setComments] = useState(props.comments);

  const [content, setContent] = useState("");
  const handleComment = () => {
    let data = {
      id_post: post.id,
      content,
    };
    console.log(data);
    apiContext.createCommentPost(data).then((res) => {
      let newComments = {
        avatar: props.infoUser.avatar,
        display_name: props.infoUser.display_name,
        content: data.content,
      };
      setComments((preComments) => [...preComments, newComments]);
      setContent("");
    });
  };
 
  return (
    <Modal
      animationType={"fade"}
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        setShowModal(false);
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#000000AA",
          justifyContent: "flex-end",
          height: "100%",
        }}
      >
        {renderOutsideTouchable(onTouchOutside)}
        <View
          style={{
            backgroundColor: "#fff",
            width: "100%",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            paddingHorizontal: 24,
            maxHeight: windowHeight * 0.5,
            paddingBottom: 80,
          }}
        >
          <View style={{ height: "100%" }}>
            <Text
              style={{
                color: "#182E44",
                fontSize: 18,
                fontWeight: "600",
                margin: 15,
                textAlign: "center",
              }}
            >
              Comments
            </Text>

            {Array.isArray(comments) && comments.length > 0 ? (
              <ScrollView style={{ width: "100%", height: "100%" }}>
                {comments.map((item, index) => {
                  return (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        marginVertical: 16,
                      }}
                      key={index}
                    >
                      <Image
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 18,
                          borderColor: "#ccc",
                          marginRight: 16,
                        }}
                        source={item.avatar}
                      />
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          flex: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: "600",
                            color: "#000",
                          }}
                        >
                          {item.display_name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "500",
                            color: "#797979",
                          }}
                        >
                          {item.content}
                        </Text>
                      </View>
                      <Text>
                        {moment(item.created_at)
                          .startOf("minute")
                          .fromNow()}
                      </Text>
                    </View>
                  );
                })}
              </ScrollView>
            ) : (
              <View
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: 60,
                }}
              >
                <Text>Being the first person comments this post!</Text>
              </View>
            )}
          </View>
        </View>
        <View
          style={{
            width: "100%",
            position: "absolute",
            bottom: 0,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 16,
            borderTopWidth: 0.5,
            borderTopColor: "#ccc",
          }}
        >
          <Image
            style={{ width: 36, height: 36, borderRadius: 30, marginRight: 16 }}
            source={{
              uri: props.infoUser.avatar,
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderWidth: 1,
              borderColor: "#ccc",
              borderStyle: "solid",
              borderRadius: 24,
              paddingHorizontal: 16,
              paddingVertical: 8,
              flex: 1,
            }}
          >
            <TextInput
              style={{ fontSize: 16, width: "100%" }}
              placeholder="Add comment"
              value={content}
              onChange={(e) => setContent(e.nativeEvent.text)}
            />
            <TouchableWithoutFeedback onPress={handleComment}>
              <Feather name="send" size={24} color="black" />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CommentModal;
