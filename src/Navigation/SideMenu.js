import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../Screens/Profile';
import SkeletonView from '../Screens/Demo/SkeletonView';
import TabMenu from './TabMenu';
import {useSelector} from 'react-redux';

const Drawer = createDrawerNavigator();

const SideMenu = ({navigation, route}) => {
   const reduxData = useSelector(state => state);
    return (
      <Drawer.Navigator
        initialRouteName="TabMenu"
     
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        }}>
             
        <Drawer.Screen name='Dashbord' component={TabMenu} options={{headerShown:false}}/>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="SkeletonView" component={SkeletonView} />
      </Drawer.Navigator>
    );
};


export default SideMenu;
