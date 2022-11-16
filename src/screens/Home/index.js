import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";



const Home = () => {
    const [data, setData] = useState([])
    const getMovies = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <SafeAreaView>
            <Text>hieu</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title} hieu</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
};

export default Home;
