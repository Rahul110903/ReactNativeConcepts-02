import React from "react"
import { RefreshControl } from "react-native"
import {Text,View} from "react-native"

class Increment extends React.Component{


    constructor(){
        super()
        this.state={
            name:"rahul",
            age:"20"
        }
    }
    render(){
        return(
            <View>
                <Text style={{color:"red", fontSize:30}}>Hahahahahaha</Text>
            </View>
        )
    }
}
export default Increment
