import React, { useState } from "react"
import {View,Text,Button} from "react-native"

const Name=()=>{
    const [name,setname]=useState("Abhishek")

    const handleClick=()=>{
        setname("Kartik")
    }

    return(
        <View>
        <Text style={{fontSize:50}}>{name}</Text>
            <Button onPress={()=>handleClick()} title="Updata Name"></Button>
        </View>
    )
}
export default Name