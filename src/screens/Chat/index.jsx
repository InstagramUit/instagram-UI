import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import { SearchBar } from "@rneui/themed";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import ChatComponent from "../../components/ChatComponent";
import { apiContext } from "../../contexts/api.context";
import { useEffect } from "react";

const Chat = ({ navigation }) => {
  const [listChat, setListChat] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let result = await apiContext.getMessage();
      console.log(result.data);
      setListChat(result.data);
    };
    fetchData().catch((err) => console.log(err));
  }, []);

  const [search, setSearch] = useState("");
  const [listUsers, setListUsers] = useState("");
  const onChangeSearch = async (value) => {
    try {
      setSearch(value);
      let listUsers = await apiContext.search(value);
      console.log(listUsers.data);
      setListUsers(listUsers.data);
    } catch (error) {
      console.log(error);
      Alert.alert("Search không thành công");
    }
  };

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 16,
        }}
      >
        <TouchableOpacity>
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={() => {
              console.log("test");
              navigation.goBack();
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "500",
          }}
        >
          Chats
        </Text>
      </View>
      <View>
        <SearchBar
          value={search}
          lightTheme={true}
          placeholder="Type Here..."
          onChangeText={(value) => onChangeSearch(value)}
          inputStyle={{
            backgroundColor: "#fff",
            fontSize: 16,
            color: "black",
            outline: "none",
          }}
          rightIconContainerStyle={{ display: "none" }}
          searchIcon={<Ionicons name="search" size={24} color="black" />}
          containerStyle={{ backgroundColor: "#fff", border: "none" }}
          inputContainerStyle={{
            backgroundColor: "#fff",
            borderRadius: 4,
          }}
        />
        <View style={styles.container}>
          <FlatList
            data={listUsers}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingHorizontal: 16,
                    paddingVertical: 4,
                    alignItems: "center",
                    backgroundColor: "white",
                  }}
                  onPress={() => {
                    navigation.navigate("Messaging", {
                      user: item,
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
                        item.avatar ||
                        "https://res.cloudinary.com/dhz4hr8dq/image/upload/v1669695868/images_xigv3c.jpg",
                    }}
                  />
                  <Text style={styles.item}>{item.display_name}</Text>
                  {console.log(item.isFollowing)}
                  {item.isFollowing ? (
                    <View
                      style={{
                        borderRadius: 12,
                        backgroundColor: "blue",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <AntDesign name={"check"} size={14} color="white" />
                    </View>
                  ) : null}
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
      <ScrollView>
        <FlatList
          data={listChat}
          renderItem={(item) => {
            return <ChatComponent item={item.item} navigation={navigation} />;
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
