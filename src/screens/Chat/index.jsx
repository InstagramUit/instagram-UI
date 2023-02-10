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
                <Text
                  style={styles.item}
                  onPress={() => {
                    navigation.navigate("Messaging", {
                      user: item,
                    });
                  }}
                >
                  {item.display_name}
                </Text>
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
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
