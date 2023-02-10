import React from "react";
import { SearchBar } from "@rneui/themed";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { apiContext } from "../../contexts/api.context";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  FlatList,
} from "react-native";
const Search = ({ navigation }) => {
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
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
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
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingHorizontal: 16,
                    paddingVertical: 4,
                    alignItems: "center",
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
                  <Text
                    style={styles.item}
                    onPress={() => {
                      navigation.navigate("UserProfile", {
                        user_id: item.id,
                        isFollow: item.isFollowing,
                      });
                    }}
                  >
                    {item.display_name}
                  </Text>
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
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
