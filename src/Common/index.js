import React from 'react';
// import {StatusBar} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Image, Keyboard, TouchableWithoutFeedback, View, Text, TouchableOpacity, PixelRatio, Dimensions } from 'react-native';


export const responsiveHP = (size) => {
    if (Platform.OS == 'ios') {
        const statusbarheight = typeof getStatusBarHeight() === "number" ? parseInt(getStatusBarHeight()) : 0
        const elemHeight = typeof size === "number" ? size : parseFloat(size);
        return PixelRatio.roundToNearestPixel((Dimensions.get('screen').height - statusbarheight) * elemHeight / 100);
    } else {
        return hp(size)
    }
}

/**
 * 
 * @param pass value in persant 
 * @returns null data View 
 * Ex: <VerticalSpace height={'9.4%'} />
 */

export const VerticalSpace = (props) => {
    return (
        <View style={{ height: responsiveHP(props.height) }} />
    )
}

export const DismissKeyboard = ({ children }) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{ flex: 1 }}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    );
}

// export const StatusBarView = (props) => {
//     console.log("props",props)
//     return (
//         <StatusBar barStyle={props.barContent} backgroundColor={props.barBgColor} />
//     )
// }

