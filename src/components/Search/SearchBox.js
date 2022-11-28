import React from 'react';
import { View, TextInput } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const SearchBox = () => {
  return (
    <View 
    style={{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        paddingVertical:10,
        position:'relative',
        // top:30
    }}>
      <Ionic name="search" style={{
        fontSize:20,
        opacity:0.7,
        position:'absolute',
        zIndex:1,
        right:25,
        color:'#0D8BE7'
      }}/>
      <TextInput placeholder="Search" placeholderTextColor="#0D8BE7" style={{
        width:'94%',
        backgroundColor:'#EBEBEB',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        fontSize:20,
        padding:4,
        paddingLeft:40,
      }} />
    </View>
  )
}

export default SearchBox