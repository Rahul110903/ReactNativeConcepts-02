import React, { useEffect, useState } from "react"
import {Button, Text,View} from "react-native"
import Useeffect from "./Useeffect"

const Unmount_toggle=()=>{
    const [count,setcount]=useState(0)
    const [toggle,settoggle]=useState(true)

    
    return(
        <View>
            <Text style={{fontSize:40}}>Useeffect during Unmount</Text>

            <Text style={{fontSize:30}}>Count : {count}</Text>
            <Button title="Increment" onPress={()=>setcount(count+1)}></Button>
            <View style={{marginTop:10}}>
            <Button title="Invisible" onPress={()=>settoggle(!toggle)}></Button>
            </View>
            
            {
                toggle ? <Name/> : null
            }
        </View>
    )
}
// useeffect is used
const Name=()=>{
    useEffect(()=>{
        return ()=> {console.warn("Useeffect called on unmount")}
    })
    return (
    <View>
        <Text style={{fontSize:20, color:"orange"}}>Hello My Name is Rahul</Text>
    </View>
    )
}
export default Unmount_toggle