import React from "react"
import {Pressable, StyleSheet, Text,View} from "react-native"

const Press=()=>{
    return(
        <View style={styles.main}>
            <Pressable
            onPressIn={()=>{console.warn("Press in ")}}
            onPressOut={()=>{console.warn("Press out")}}
            onLongPress={()=>{console.log("Long Press")}}
            onPress={()=>{console.log("Press")}} >
                <Text style={{fontSize:30, color:"black"}}>Press Here</Text>
            </Pressable>
        </View>
    )
}

const styles=StyleSheet.create({
    main:{
        alignItems:"center",
        borderWidth:1,
        borderRadius:10,
        backgroundColor:"lightblue",
        shadowColor:"black",
        shadowOpacity:2,
        elevation:10,

    }
})
export default Press