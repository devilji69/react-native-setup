import React, {useEffect, useState, useCallback} from 'react';
import {Text, View, Button} from 'react-native';
import {showBottomTost} from '../Helper/Toast';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import {changeTabTitle,changeStatusBar} from '../Store/Actions/common';
import { useIsFocused ,useFocusEffect } from '@react-navigation/native';
function Home(props) {
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      // console.log('Screen was focused');
      async function statusBar() {
            await dispatch(changeStatusBar({ 
              backgroundColor:"#122354",
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
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Icon name="rocket" size={30} color="#900" />
      <Text>Home Screen</Text>
      <Button
        title="On"
        onPress={() =>
          showBottomTost({
            text1: 'Hello5',
            type: 'info',
            visibilityTime: 4000,
            text2: 'Test demo',
          })
        }
      />
    </View>
  );
}

export default Home;
