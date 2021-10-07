import React from "react";
import {StatusBar} from 'react-native';
import { useTheme } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';


const Loader = (props) =>{
    //use clobal way static data
    const { colors } = useTheme();
    return(
        <LinearGradient colors={[colors.gradient_color1,colors.gradient_color2,colors.gradient_color3]}
            style={{flex:1}}
            useAngle= {true}
            angle= {180}
            start={{x: 0, y: 0}} end={{x: 0, y: 1.0}}
            locations={[0,0.65,1]} 
        >
            <StatusBar backgroundColor={'transparent'} translucent />
            <LottieView source={require('../Assets/infinity-loop.json')} autoPlay loop />
        </LinearGradient>    
    )
}

export default Loader;