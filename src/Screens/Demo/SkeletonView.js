import React,{useCallback} from "react";
import { View } from "react-native";
import {useFocusEffect} from '@react-navigation/native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import {useSelector, useDispatch} from 'react-redux';
import {changeTabTitle,changeStatusBar} from '../../Store/Actions/common';

const SkeletonView = () => {
  const dispatch = useDispatch();
  useFocusEffect(
    useCallback(() => {
      // console.log('Screen was focused');
      async function statusBar() {
        await dispatch(changeStatusBar({ 
          backgroundColor:"#871348",
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
      <SkeletonPlaceholder>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ width: 60, height: 60, borderRadius: 10 }} />
          <View style={{ marginLeft: 20 }}>
          <View style={{ width: 120, height: 20, borderRadius: 4 }} />
          <View
            style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
          />
        </View>
        </View>
      </SkeletonPlaceholder>
    );
  };


export default SkeletonView;