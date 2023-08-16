import { View,Text,StyleSheet } from "react-native";
import Table from "../components/Table";
import Constants from "expo-constants"

const Home= ()=>{
    return (
        <View style={styles.container}>
            <Table/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        marginTop:Constants.statusBarHeight,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Home;