import React,{useCallback} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../Screens/Profile';
import { useDispatch} from 'react-redux';
import {changeStatusBar} from '../Store/Actions/common';
import SkeletonView from '../Screens/Demo/SkeletonView';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import {useFocusEffect } from '@react-navigation/native';
const Tab = createBottomTabNavigator();


const TabMenu = ({navigation,route}) => {
const dispatch = useDispatch();
useFocusEffect(
  useCallback(() => {
    // console.log('Screen was focused');
    async function statusBar() {
          await dispatch(changeStatusBar({ 
            backgroundColor:"#00F",
            barStyle:"light-content"
          }))          
        return true;
    }
    statusBar()
    return () => {
      // console.log('Screen was unfocused');
    };
  }, [])
);
  
    return (
        <Tab.Navigator initialRouteName="Home"   
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                  if (route.name === 'DemoLoader') {
                    return (
                      <Ionicons
                        name='pied-piper-alt'
                        size={size}
                        color={color}
                      />
                    );
                  } else if (route.name === 'Profile') {
                    return (
                      <Ionicons
                        name='taxi'
                        size={size}
                        color={color}
                      />
                    );
                  }
                },
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: 'tomato',
              })}
        >
            <Tab.Screen name="DemoLoader" component={SkeletonView} options={{ tabBarLabel: 'SkeletonView' }} />
            <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Profile' }}/>
            
        </Tab.Navigator>
    )
}

export default TabMenu;