import React, {useEffect, useCallback,useState} from 'react';
import {Text, View,FlatList} from 'react-native';
import { useTheme } from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {changeTabTitle,changeStatusBar} from '../Store/Actions/common';
import {useIsFocused, useFocusEffect} from '@react-navigation/native';
import {getUserList} from '../Apis/Auth';

const Profile = () => {
  const dispatch = useDispatch();
  const { ApiList,colors } = useTheme();

  const[userData,setUserData] = useState({})
  

   getAllUserList=async()=>{
    let userAllData = await getUserList(ApiList.userList);

    if(userAllData){
      setUserData(userAllData)
    }

  }

  statusBar=async()=>{
    await dispatch(changeStatusBar({ 
      backgroundColor:colors?.purple,
      barStyle:"light-content"
    }))
  }

  useFocusEffect(
    useCallback(() => {
      // console.log('Screen was focused');
      statusBar()
      getAllUserList()
      return () => {
        // console.log('Screen was unfocused');
      };
    }, [])
  );

  const renderItem = ({ item }) => {
    
    return(
      <Text title={item.email} />
    )
  }

  return (
    
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>User Data</Text>
       <FlatList
        data={userData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
       />
    </View>
  );
};

export default Profile;
