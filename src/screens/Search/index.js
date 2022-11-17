import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { SearchBar, Collection } from 'react-native-ios-kit';

const Search = () => {

  const [state, setState] = useState('')
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
      <Text>Search</Text>
      <SearchBar
        value={state}
        onValueChange={text => setState({ text })}
        withCancel
        animated 
      />

      <Collection
        numberOfColumns={2}
        data={data}
        // renderItem={item => <Image source={{ uri: item }} />}
        renderItem = {item => <Text>{item.title}</Text>}
        keyExtractor={(item, index) => `${item}_${index}`}
        refreshing={state.refreshing}
        // onRefresh={refresh}
      />
    </SafeAreaView>
  );
};

export default Search;
