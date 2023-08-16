import {TouchableHighlight,StyleSheet,useWindowDimensions,Text} from 'react-native';
import { Svg } from 'react-native-svg';
import CruzSelector from './CruzSelector';
import CircleSelector from './CircleSelector';

const ViewTurn =({turn,setTurn,clickedBoxes,win})=>{
    const {width}=useWindowDimensions();
    return(
        <TouchableHighlight style={styles.container} 
        underlayColor={''}
        onPress={()=>{
            if(clickedBoxes.length==0){
                setTurn(!turn);
            }
        }}>
            {win
            ?
            <>
            <Text style={styles.legend}>¡Ganador!</Text>
            <Svg>
                {win.turn==='X'
                    ?<CruzSelector x={width*0.17} y={5} width={50} height={50} strokeWidth={15}/>
                :<CircleSelector x={-5} y={5} width={width/2} height={50} strokeWidth={13}/>}
            </Svg>
            </>
            :clickedBoxes.length==9?
                <>
                <Text style={styles.legend}>¡Empate!</Text>
                <Svg>
                    <CruzSelector x={5} y={5} width={50} height={50} strokeWidth={15}/>
                    <CircleSelector x={50} y={5} width={width*0.5} height={50} strokeWidth={13}/>
                </Svg>
                </>
                :<Svg>
                    {turn
                        ?<CruzSelector x={width*0.17} y={5} width={50} height={50} strokeWidth={15}/>
                    :<CircleSelector x={-5} y={5} width={width*0.5} height={50} strokeWidth={13}/>}
                </Svg>
            }
        </TouchableHighlight>
    )
}

const styles=StyleSheet.create({
    container:{
        height:60,
        justifyContent:'center',
        alignItems:'center',
        width:'50%',
        borderRadius:30,
        marginBottom:50
    },
    legend:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'
    }
})

export default ViewTurn