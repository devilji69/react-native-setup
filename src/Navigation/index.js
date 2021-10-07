import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import Home from '../Screens/Home';
import SkeletonView from '../Screens/Demo/SkeletonView';
import SideMenu from './SideMenu';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

// import TabMenu from './TabMenu';

const Stack = createNativeStackNavigator();

// console.log('notes==', notes);

const Navigation = () => {
  const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`

  stopSplashScreen = () => {
    if (navigationRef.isReady()) {
      SplashScreen.hide();
    }
  };

  const reduxData = useSelector(state => state);
  // console.log('reduxData===>', reduxData);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef} onReady={stopSplashScreen()}>
        <SafeAreaView
          style={{flex: 1}}
          edges={['top', 'left', 'right', 'bottom']}>
          <StatusBar
            barStyle={reduxData?.CommonReducer?.statusBar?.barStyle}
            backgroundColor={
              reduxData?.CommonReducer?.statusBar?.backgroundColor
            }
          />

          <Stack.Navigator
            initialRouteName="SideMenu"
            screenOptions={{headerTitleAlign: 'center'}}>
            <Stack.Screen
              name="SideMenu"
              component={SideMenu}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SkeletonView" component={SkeletonView} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default Navigation;
