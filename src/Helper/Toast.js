
import React from 'react';
import Toast from 'react-native-toast-message';
 
export const showBottomTost=(props)=>{

    return ( 
        Toast.show({
            ...props,
            position:'bottom',
            bottomOffset: 10,
        })
    )
}
