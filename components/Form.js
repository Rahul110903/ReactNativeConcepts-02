import React, { useState } from "react"
import {Text,View,Button, TextInput, StyleSheet} from "react-native"

const Form=()=>{
    const [name,setname]=useState("")
    return(
        <View>
            
            <Text style={{fontSize:40}}>My name is : {name}</Text>
            <TextInput placeholder="Please Enter Name" style={styles.inputForm} value={name} onChangeText={(text)=>setname(text)}>
            </TextInput>
            <Button title="Clean All" onPress={()=>setname("")}></Button>
        </View>
    )
}

const styles=StyleSheet.create({
    inputForm:{
        color:"blue",
        fontSize:18,
        borderWidth:2,
        marginTop:10,
        marginBottom:10
    }
})

export default Form