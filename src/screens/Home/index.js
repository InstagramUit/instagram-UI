import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import Header from "../../components/Header";
import PostItem from "../../components/PostItem";

const Home = () => {
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
  ]);
  const getMovies = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    // setData(json);
    // try {
    // } catch (error) {
    //     console.error(error);
    // } finally {
    //     setLoading(false);
    // }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <SafeAreaView style={{ width: "100%", height: "100%", flex: 1 }}>
      {/* <Header /> */}
      <FlatList
        data={DATA}
        pagingEnabled
        renderItem={(item) => {
          return <PostItem props={item.item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Home;
