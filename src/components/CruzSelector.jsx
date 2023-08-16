
import {Svg, Line } from "react-native-svg"
import Animated from 'react-native-reanimated';
import { FadeIn,FadeOut } from 'react-native-reanimated';

const AnimatedLine = Animated.createAnimatedComponent(Line);



const CruzSelector =({width,height, x, y,strokeWidth})=>{
    return(
        <>
            <AnimatedLine x1={x+(width*0.20)} y1={y+(height*0.20)} x2={x+(width*0.8)}  y2={y+(height*0.8)} strokeWidth={strokeWidth} stroke={'#C40D2F'} strokeLinecap="round" entering={FadeIn} exiting={FadeOut}/>
            <AnimatedLine x1={x+(width*0.8)} y1={y+(height*0.20)} x2={x+(width*0.20)}  y2={y+(height*0.8)} strokeWidth={strokeWidth} stroke={'#C40D2F'} strokeLinecap="round" entering={FadeIn} exiting={FadeOut} />
        </>
    )
}

export default CruzSelector;