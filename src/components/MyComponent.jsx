import React from "react";
import { View } from "react-native";
import { makeStyles, Text, Button, useThemeMode } from "@rneui/themed";
import { Input } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function App() {
    const styles = useStyles();
    const { setMode, mode } = useThemeMode();

    const handleOnPress = () => {
        setMode(mode === "dark" ? "light" : "dark");
    };

    return (
        <View style={styles.container}>
            <Text h3>Start Using RNE </Text>
            <Text style={styles.text}>
                Open up App.tsx to start working on your app!
            </Text>
            <Button onPress={handleOnPress}>Switch Theme</Button>
            <Input
                placeholder='BASIC INPUT'
            />
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
            <FontAwesome.Button name="facebook" backgroundColor="#3b5998" >
                Login with Facebook
            </FontAwesome.Button>
        </View>

    );
}

const useStyles = makeStyles((theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        marginVertical: theme.spacing.lg,
    },
}));
