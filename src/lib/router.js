import React from 'react';  
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';
import FollowersScreen from '../components/Follow/Followers';
import FollowingScreen from "../components/Follow/Following";
  
const AppNavigator = createMaterialTopTabNavigator(  
    {  
        Followers: FollowersScreen,  
        Following: FollowingScreen,
    },  
    {  
        tabBarOptions: {  
            activeTintColor: 'white',  
            showIcon: true,  
            showLabel:false,  
            style: {  
                backgroundColor:'red'  
            }  
        },  
    }  
)  
export default createAppContainer(AppNavigator);  