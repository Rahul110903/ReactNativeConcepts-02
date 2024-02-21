import React from "react"
import {Text,View,Platform, StyleSheet} from "react-native"

const Platfor=()=>{
    return(
        <View>
            <Text style={{fontSize:30}}>Platform : {Platform.OS}</Text>
            {
                {/* Platform.OS=="android" ? <View style={{backgroundColor:"red" ,height:100,width:100}}></View> : <View style={{backgroundColor:"blue" ,height:100,width:100}}></View> */}
            }
            <View style={[styles.main.color, styles.main.box]}></View>
        </View>
    )
}
const styles=StyleSheet.create({
    main:{
        color:Platform.OS=="android" ? "orange" : "yellow",
        box:{
            heigh:100,
            width:100,
        }
    }
})
export default Platfor