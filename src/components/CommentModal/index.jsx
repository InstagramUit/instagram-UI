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

const CommentModal = ({
  showModal,
  setShowModal,
  onTouchOutside,
  comments,
  userAvt,
}) => {
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

  const windowHeight = Dimensions.get("window").height;

  console.log(userAvt);
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
            paddingHorizontal: 10,
            minHeight: windowHeight * 0.5,
            paddingBottom: 60,
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

            {comments ? (
              <ScrollView style={{ width: "100%", height: "100%" }}>
                {comments.map((item) => {
                  return (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 18,
                          borderColor: "#ccc",
                          marginRight: 16,
                        }}
                        source={item.avt}
                      />
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: "600",
                            color: "#000",
                          }}
                        >
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "500",
                            color: "#797979",
                          }}
                        >
                          {item.comment}
                        </Text>
                      </View>
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
            style={{ width: 36, height: 36, borderRadius: 16, marginRight: 16 }}
            source={{
              uri:
                userAvt ||
                "https://res.cloudinary.com/dhz4hr8dq/image/upload/v1669695868/images_xigv3c.jpg",
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
              style={{ width: "100%", fontSize: 16 }}
              placeholder="Add comment"
            />
            <TouchableWithoutFeedback>
              <Feather name="send" size={24} color="black" />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CommentModal;
