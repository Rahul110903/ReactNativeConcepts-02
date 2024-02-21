import React from "react"
import {StatusBar, Text,View} from "react-native"

const Statusbar=()=>{
    return(
        <View>
           <StatusBar backgroundColor="yellow" barStyle="dark-content" hidden={false}>
           </StatusBar> 
        </View>
    )
}
export default Statusbar