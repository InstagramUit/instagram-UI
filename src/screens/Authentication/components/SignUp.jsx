import React, { useState } from "react";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Alert
} from "react-native";
import { Button } from "react-native-ios-kit";
import ApiContext from "../../../contexts/api.context";

const SignUp = (props) => {
    const api = new ApiContext()
    const [auth, setAuth] = useState({
        display_name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const handleChangeInput = (value, key) => {
        let newAuth = {
            ...auth,
            [key]: value
        }
        setAuth(newAuth);
    }
    const handleSignUp = async () => {
        try {
            if (auth.password !== auth.confirmPassword) {
                Alert.alert('Mật khẩu không trùng khớp.')
            } else if (/\s/g.test(auth.display_name)) {
                Alert.alert('Tên hiển thị không được có khoảng trắng.')
            } else {
                let data = {
                    email: auth.email,
                    display_name: auth.display_name,
                    password: auth.password,
                }
                let result = await api.signUp(data)
                console.log(result);
                Alert.alert('Đăng kí thành công')
                navigation.navigate("MainScreen", {
                    screen: "Home",
                });
            }
        } catch (error) {
            console.log(error);
            Alert.alert('Đăng kí không thành công.')
        }
    }
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.input_container}>
                    <Text>Display Name</Text>
                    <TextInput
                        style={styles.input}
                        defaultValue={auth.display_name}
                        onChangeText={value => handleChangeInput(value, 'display_name')}
                        placeholder="Enter your display name"
                    />
                </View>
                <View style={styles.input_container}>
                    <Text>Email</Text>
                    <TextInput
                        style={styles.input}
                        defaultValue={auth.email}
                        onChangeText={value => handleChangeInput(value, 'email')}
                        placeholder="Enter your email"
                    />
                </View>
                <View style={styles.input_container}>
                    <Text>Password</Text>
                    <TextInput
                        style={styles.input}
                        defaultValue={auth.password}
                        onChangeText={value => handleChangeInput(value, 'password')}
                        placeholder="Enter your password"
                    />
                </View>
                <View style={styles.input_container}>
                    <Text>Confirm Password</Text>
                    <TextInput
                        style={styles.input}
                        defaultValue={auth.confirmPassword}
                        onChangeText={value => handleChangeInput(value, 'confirmPassword')}
                        placeholder="Enter your password"
                    />
                </View>
            </View>
            <View style={{ marginTop: 24 }}>
                <Button
                    style={styles.btn}
                    onPress={handleSignUp}
                    children={
                        <Text style={[styles.btn_text, { letterSpacing: 1 }]}>
                            Sign Up
                        </Text>
                    }
                ></Button>
            </View>
        </View>
    )
}
export default SignUp;


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
