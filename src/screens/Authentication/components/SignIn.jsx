import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { Button } from "react-native-ios-kit";
import { apiContext } from "../../../contexts/api.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { updateInfoUser } from "../../../features/user";

const SignIn = (props) => {
  // console.log(apiContext);
  // redux
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // props
  const { navigation } = props;
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const handleChangeInput = (value, name) => {
    let newAuth = {
      ...auth,
      [name]: value,
    };
    setAuth(newAuth);
  };
  const handleLogin = async () => {
    try {
      // console.log(auth);
      let result = await apiContext.login(auth);
      let user = result.user;
      dispatch(updateInfoUser(user));
      await AsyncStorage.setItem("access-token", user.accessToken);
      await AsyncStorage.setItem("info-user", JSON.stringify(user));
      Alert.alert("Đăng nhập thành công");
      navigation.navigate("MainScreen", {
        screen: "Home",
      });
    } catch (error) {
      console.log(error);
      Alert.alert("Sai thông tin đăng nhập.");
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            defaultValue={auth.email}
            onChangeText={(value) => handleChangeInput(value, "email")}
            placeholder="Enter your email"
          />
        </View>
        <View style={styles.input_container}>
          <Text>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            defaultValue={auth.password}
            onChangeText={(value) => handleChangeInput(value, "password")}
            placeholder="Enter your password"
          />
        </View>
        <View style={{ alignItems: "flex-end", marginTop: 16 }}>
          <Text>Forgot Password?</Text>
        </View>
      </View>
      <View style={{ marginTop: 24 }}>
        <Button
          style={styles.btn}
          onPress={handleLogin}
          // onPress={() => {
          //   navigation.navigate("MainScreen", {
          //     screen: "Home",
          //   });
          // }}
          children={
            <Text style={[styles.btn_text, { letterSpacing: 1 }]}>Sign In</Text>
          }
        ></Button>
      </View>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  authen_heading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 24,
  },
  btn_heading: {
    flex: 1,
    padding: 16,
  },
  btn_heading_text: {
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
  },
  container: {
    paddingVertical: 16,
    paddingHorizontal: 36,
  },
  input_container: {
    marginTop: 24,
  },
  input: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontWeight: "400",
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#0D8BE7",
    // shadowOffset: {
    //   width: 2,
    //   height: 2,
    // },
    // shadowColor: "#0D8BE7",
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    borderRadius: 4,
    overflow: "hidden",
    overlayColor: "none",
    marginTop: 8,
  },
  btn: {
    width: "100%",
    borderRadius: 24,
    padding: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#0D8BE7",
    color: "#ffffff",
  },
  btn_text: {
    fontWeight: "500",
    fontSize: 16,
    color: "#ffffff",
  },
});
