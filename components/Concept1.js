import React from "react"
import {Alert, Button, Text,View} from "react-native"

const Concept1=()=>{
    let data=10;
    const handleCLick=(name)=>{
        data=5;
        console.warn(data)
    }
    return(
        <View>
            <Text style={{fontSize:30}}>My Name is Rahul</Text>
            <Button title="Press Here" color="red" onPress={()=>handleCLick("Kartik")}></Button>
        </View>
    )
}
export default Concept1;