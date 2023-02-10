import React from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { SearchBar } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { async } from "q";
import {userContext} from "../../contexts/user.context"
const Search = () => {
  const [search, setSearch] = useState("");
  const onChangeText =async (value) =>{
    let listUsers = await userContext.search(value);
    setSearch(listUsers);
  }
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
      <View>
        <SearchBar
          value={search}
          lightTheme={true}
          placeholder="Type Here..."
          onChangeText={(value) => onChangeText(value)}
          inputStyle={{
            backgroundColor: "#fff",
            fontSize: 16,
            color: "#000",
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
      </View>
    </SafeAreaView>
  );
};

export default Search;
