import React, {useState,useEffect} from 'react';
import {View,StyleSheet, useWindowDimensions, Button} from "react-native"
import {Line, Svg,} from "react-native-svg";
import Animated from 'react-native-reanimated';
import { FadeIn,FadeOut } from 'react-native-reanimated';
import Box from './Box';
import WinLine from './WinLine';
import ButtonReplay from './ButtonReplay';
import ViewTurn from './ViewTurn';


const AnimatedLine = Animated.createAnimatedComponent(Line);

const Table =()=>{
    const [reload,setReload] = useState(false)
    const [clickedBoxes, setClickedBoxes]=useState([]);
    const [turn, setTurn] = useState(true);
    const [win,setWin]=useState(null);

    const { width} = useWindowDimensions();

   

    
    const margenX=width-30; 
    const margenY=margenX-5;
    const divX=(margenX-20)/3;
    const divY=(margenY-20)/3;

    const Boxes=[];
    const valy=5;

    const setterClickedBoxes = (number, turn,x,y)=>{
        const newSetter=[...clickedBoxes,{id:number, turn: turn,x:x,y:y}];
        setClickedBoxes(newSetter);
    }

    for (let i = 0; i < 3; i++) {
        const valx=5;
        for (let j = 0; j < 3; j++) {
            Boxes.push(<Box width={divX} height={divY} x={(valx+(10*j))+(divX*j)} y={valy+(10*i)+(divY*i)} 
            key={`Box${Boxes.length}`} number={Boxes.length}
            turn={turn}
            setTurn={setTurn}
            clickedBoxes={clickedBoxes}
            reload={reload}
            setterClickedBoxes={setterClickedBoxes}
            win={win}
            />)
        }
    }

    useEffect(()=>{
        if(reload==true){
            setClickedBoxes([]);
            setTurn(true);
            setWin(null);
            setReload(false);

        }
    },[reload])

    const winner = [[0,1,2],[3,4,5],[6,7,8],
                    [0,3,6],[1,4,7],[2,5,8],
                    [0,4,8],[2,4,6]];

    useEffect(()=>{
        if(clickedBoxes.length>=5){
            const lastClicked=clickedBoxes[clickedBoxes.length-1];
            const lastClickedEqualsTurn=clickedBoxes.filter(data=>data.turn===lastClicked.turn);
            winner.find(pattern=>{
                const [a,b,c]=pattern;
                let existA=false;
                let existB=false;
                let existC=false;
                let x1;
                let y1;
                let x2;
                let y2;
                lastClickedEqualsTurn.map(data=>{
                    if(data.id===a){
                        existA=true
                        x1=data.x;
                        y1=data.y
                    }
                    else if(data.id===b){
                        existB=true
                    }
                    else if(data.id===c){
                        existC=true
                        x2=data.x;
                        y2=data.y
                    }
                })

                if(existA && existB && existC){
                    setWin({
                        turn:lastClicked.turn,
                        x1:x1,
                        y1:y1,
                        x2:x2,
                        y2:y2
                    });
                }
            })

        }
    },[clickedBoxes])

    return(
        <View style={[styles.container, {height:margenX}]}>
            <ViewTurn turn={turn} setTurn={setTurn} clickedBoxes={clickedBoxes} win={win}/>
            <Svg>
                <AnimatedLine x1={divX+10} y1="10" x2={divX+10} y2={margenY} stroke="#fff" strokeWidth="10" strokeLinecap="round"  entering={FadeIn} exiting={FadeOut}/>
                <AnimatedLine x1={divX*2+20} y1="10" x2={divX*2+20} y2={margenY} stroke="#fff" strokeWidth="10" strokeLinecap="round"  entering={FadeIn} exiting={FadeOut}/>
                <AnimatedLine x1="10" y1={divY+10} x2={margenX} y2={divY+10} stroke="#fff" strokeWidth="10" strokeLinecap="round"  entering={FadeIn} exiting={FadeOut}/>
                <AnimatedLine x1="10" y1={divY*2+20} x2={margenX} y2={divY*2+20} stroke="#fff" strokeWidth="10" strokeLinecap="round"  entering={FadeIn} exiting={FadeOut}/>

                {Boxes}
                {win ? <WinLine win={win} divX={divX} divY={divY}/>:null}
            </Svg>
            <ButtonReplay title='Reinciar' press={()=>{
                setReload(true);
            }}
            />
            
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width: "100%",
        justifyContent:'center',
        alignItems:'center'
    },
})

export default Table;