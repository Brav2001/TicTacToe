import {Circle} from "react-native-svg";
import Animated from 'react-native-reanimated';
import { FadeIn,FadeOut } from 'react-native-reanimated';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircleSelector =({height,width,x,y, strokeWidth})=>{
    

    return(
        <AnimatedCircle cx={width/2+x} cy={height/2+y} r={height*0.35} fill={'transparent'} stroke={"#008E3A"} strokeWidth={strokeWidth} entering={FadeIn} exiting={FadeOut}/>
    )
}

export default CircleSelector;