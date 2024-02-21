import React,{useState} from "react"
import {StyleSheet, Text,TouchableOpacity,View} from "react-native"

const Radiobuttons=()=>{
    const [toggle,settoggle]=useState(0)
    return(
        <View style={styles.Box}>
            <TouchableOpacity style={styles.wrapping} onPress={()=>settoggle(1)}>
                <View style={styles.circle}>
                {
                    toggle==1 ? <View style={styles.marking}></View> : null
                }
                </View>
                <Text style={styles.button}>Radio 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.wrapping} onPress={()=>settoggle(2)}>
                <View style={styles.circle}>
                {
                    toggle==2 ? <View style={styles.marking}></View> : null
                }
                </View>
                <Text style={styles.button}>Radio 2</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    Box:{
        alignItems:"center",
        justifyContent:"center",
    },
    button:{
        fontSize:30
    },
    circle:{
        height:40,
        width:40,
        borderColor:"black",
        borderWidth:2,
        borderRadius:20,
    },
    wrapping:{
        flexDirection:"row",
        margin:10
    },
    marking:{
        height:28,
        width:28,
        backgroundColor:"black",
        borderRadius:20,
        margin:4
    }

})
export default Radiobuttons