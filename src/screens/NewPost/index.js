import React from "react";
import { View, Text, Image, StyleSheet  } from "react-native";
import { white } from "react-native-ios-kit/src/styles/colors";
import Ionic from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  stretch: {
    width: '100%',
    height: 300,
    resizeMode: 'stretch',
  },
});

const NewPost = () => {
  return (
    <View style= {{
      width:'100%',
      height:'100%',
      backgroundColor:'white',
      position:'relative',
    }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          paddingVertical: 20,
          position: 'relative',
        }}>
        <Ionic name="arrow-back" style={{
          fontSize:20,
          opacity:0.7,
          position:'absolute',
          zIndex:1,
          left:25,
          color: '#000000',
        }}/>
        <Text
          style={{
            justifyContent: 'center',
            fontSize: 20,
            padding: 4,
            left: 50,
            position: 'absolute',
          }}>New Post</Text>
        <Text
          style={{
            fontSize: 20,
            opacity: 0.7,
            position: 'absolute',
            zIndex: 1,
            right: 25,
            color: '#0D8BE7',
          }}>Next</Text>
      </View>
      <Image
        style={styles.stretch}
        source={require("../../storage/images/cover.png")}>
      </Image>
      <View 
      style={{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        paddingVertical:20,
        position:'relative',        
        backgroundColor:'#000000CC',
      }}>
        <Ionic name="copy-outline" style={{
          fontSize:20,
          opacity:0.7,
          position:'absolute',
          zIndex:1,
          right:25,
          color: white,
        }}/>
        <Text style={{
          justifyContent:'center',
          position:'absolute',
          zIndex:1,
          left:25,
          fontSize:20,
          padding:4,
          paddingLeft:40,
          color: white,
        }}>Recently</Text>
      </View>
    </View>
  );
};

export default NewPost;
