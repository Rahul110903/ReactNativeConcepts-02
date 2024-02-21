import React, { useEffect, useState } from "react"
import {Text,View,Button} from "react-native"

const Useeffect=()=>{
    const [count,setcount]=useState(0)
    const [number,setnumber]=useState(100)
    const handleClick={
        counter:()=> setcount(count+1),
        numbers:()=> setnumber(number+1),
    }

    useEffect(()=>{
        console.warn("Count is : ",count)
        console.warn("Number is : ",number)
    },[number])
    return(
        <View>
            <Text style={{fontSize:40}}>UseEffect during Mount and Update</Text>

            <Text style={{fontSize:30}}>Increment : {count}</Text>
            <Button title="Inc" onPress={()=>handleClick.counter()}></Button>

            <Text style={{fontSize:30}}>Numbers : {number}</Text>
            <Button title="Inc" onPress={()=>handleClick.numbers()}></Button>
        </View>
    )
}
export default Useeffect