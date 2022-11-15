import React, { useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import API from "../../services/API.context";
import { useDispatch, useSelector } from "react-redux";
import getPosts from "../../services/API.context";

const api = new API();

const Home = () => {
  const dispatch = useDispatch();
  const data1 = useSelector((state) => state.postReducer.listPosts);
  useEffect(() => {
    dispatch(getPosts("https://jsonplaceholder.typicode.com/posts"));
  }, []);

  // const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView>
      {/* <Grid columns={2} style={styles.header}>
        <Grid.Item>
          <Text>ahihi</Text>
        </Grid.Item>
        <Grid.Item style={styles.header__right}>
          <Badge content="5">
            <FontAwesome5 name="bell" size={24} color="black" />
          </Badge>
        </Grid.Item>
      </Grid> */}
      {console.log("data1 :>> ", data1)}

      <FlatList
        style={styles.list__posts}
        data={data1}
        renderItem={({ item }) => (
          <View style={styles.item__post}>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* {data.map((post) => {
        return (
          <View>
            <Text>{post.title}</Text>
          </View>
        );
      })} */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    backgroundColor: "#fff",
  },
  header__right: {
    textAlign: "right",
  },
  list__posts: {
    // marginTop: "60px",
  },
  item__post: {
    height: "100%",
  },
});
