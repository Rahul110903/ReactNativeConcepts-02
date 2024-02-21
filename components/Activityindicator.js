import React, {useState}from "react"
import {View,Text, ActivityIndicator, StyleSheet,Button} from "react-native"

const Activityindicator=()=>{
    const [toggle,settoggle]=useState(false)

    const loader=()=>{
        setTimeout(() => {
            console.warn("API fetched")
            settoggle(false)
        }, 5000);
        settoggle(true)
    }
    return(
        <View style={styles.main}>
        {
            toggle ? <ActivityIndicator size={"xlarge"}/> : null
        }
            <View style={{marginTop:20}}><Button title="Loader" onPress={loader}></Button></View>
        </View>
    )
}
const styles=StyleSheet.create({
    main:{
        // flex:1,
        // alignItems:"center",
        // justifyContent:"center",

    }
})
export default Activityindicator