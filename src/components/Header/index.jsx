import React from "react";
import { View, Image, StyleSheet } from "react-native";
import logo from "../../../assets/logo.jpg";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    shadowOffset: "1,1",
    shadowColor: "rgba(0,0,0,0.5)",
  },
  logo: {
    marginLeft: 16,
  },
});

export default Header;
