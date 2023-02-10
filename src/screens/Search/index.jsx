import React from "react";
import { SearchBar } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
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
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
