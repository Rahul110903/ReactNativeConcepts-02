
import React from "react"
import {Text,View,Button,StyleSheet, ScrollView} from "react-native"

const Layout=()=>{

    return(
        <View>
                <View style={{flex:1, backgroundColor:"blue"}}>
                    <Text>Hello World</Text>
                </View>    
        </View>
    )
}

const styles=StyleSheet.create({
    items:{
        color:"black",
        backgroundColor:"blue",
        fontSize:30,
        margin:5,
        textAlign:"center",
        textAlignVertical:"center",
        height:100,
        width:100,
    }
})
export default Layout;
