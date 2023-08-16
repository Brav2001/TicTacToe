import { TouchableHighlight,Text,StyleSheet } from "react-native"

const ButtonReplay=({press=()=>{},title})=>{
    return(
        <TouchableHighlight
            onPress={press}
            style={styles.container}
            underlayColor={'#DE7015'}
        >
            <Text style={styles.legend}>{title}</Text>
        </TouchableHighlight>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'red',
        height:45,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        marginTop:50,
        width:'50%'
    },
    legend:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'
    }
})

export default ButtonReplay