import React from "react"
import {StyleSheet, Text,TouchableHighlight,View} from "react-native"

const TouchableHighlite=()=>{
    return(
        <View>
            <TouchableHighlight>
                <Text style={[styles.color1,styles.success]}>Success</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.color1,styles.primary]}>Primary</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.color1,styles.warning]}>Warning</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.color1,styles.error]}>Error</Text>
            </TouchableHighlight>

        </View>
    )
}
const styles=StyleSheet.create({
    color1:{
        fontSize:30,
        backgroundColor:"#bbb",
        color:"#fff",
        padding:6,
        borderRadius:10,
        textAlign:"center",
        shadowColor:"black",
        elevation:10,
        shadowOpacity:1,
        margin:10
    },
    success:{
        backgroundColor:"green"
    },
    primary:{
        backgroundColor:"blue"
    },
    warning:{
        backgroundColor:"yellow"
    },
    error:{
        backgroundColor:"red"
    }

})

export default TouchableHighlite