import React,{useState,useEffect} from 'react';
import {Rect} from "react-native-svg"
import CruzSelector from './CruzSelector';
import CircleSelector from './CircleSelector';



const Box =({width,height,x,y,number,turn,setTurn,reload,win,setterClickedBoxes=()=>{}})=>{
    const [clicked, setClicked]=useState(false);
    const [content, setContent]=useState();

    useEffect(()=>{
        if(reload==true){
            setClicked(false)
            setContent(null)
        }
    },[reload])

    return(
                <>
                <Rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill={'transparent'}
                    onPress={()=>{
                        if(!clicked && !win){
                            setClicked(true);
                            setTurn(!turn);
                            setContent(turn ?'X':'O');
                            setterClickedBoxes(number,turn ?'X':'O',x,y);
                        }
                    }}
                    
                />
                {
                    clicked?
                        content==='X'
                            ?<CruzSelector  width={width} height={height} x={x} y={y} strokeWidth={20}/>
                            :content==='O'
                                ?<CircleSelector width={width} height={height} x={x} y={y} strokeWidth={20}/>
                                :null
                        :null
                }
                </>
                

    )
}

export default Box;