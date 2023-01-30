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
import Post from "./components/Post";
import { apiContext } from "../../contexts/api.context";

const Home = () => {
  const [posts, setPosts] = useState([]);
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
  ]);
  useEffect(() => {
    const fetchData = async () => {
      let result = await apiContext.getPosts();
      setPosts(result.data?.posts || []);
    };
    fetchData().catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: "black",
      }}
    >
      {/* <Header /> */}
      <FlatList
        data={posts}
        // pagingEnabled
        renderItem={(item) => {
          return <Post post={item.item} key={item.index} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Home;
