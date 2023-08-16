import {Line} from 'react-native-svg';
import Animated from 'react-native-reanimated';
import { FadeIn,FadeOut } from 'react-native-reanimated';

const AnimatedLine = Animated.createAnimatedComponent(Line);

const WinLine=({win,divX,divY})=>{
    return(
        <AnimatedLine x1={win.x1+divX/2} y1={win.y1+divY/2} x2={win.x2+divX/2} y2={win.y2+divY/2} stroke={win.turn==='X'?'#F83157':'#00B048'} 

        strokeWidth={10} strokeLinecap='round'
        entering={FadeIn} exiting={FadeOut}
        />
    )
}

export default WinLine