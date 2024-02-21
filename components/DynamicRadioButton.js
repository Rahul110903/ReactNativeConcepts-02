import React , {useState} from "react"
import {Text,View,StyleSheet,TouchableOpacity} from "react-native"

const DynamicRadioButtons=()=>{
    const [toggle,settoggle]=useState(0)
    const users=[
        {
            id:1,
            name:"Rahul"
        },
        {
            id:2,
            name:"Shivam"
        },
        {
            id:3,
            name:"Ritu"
        },
        {
            id:4,
            name:"Sonali"
        },
        {
            id:5,
            name:"Yash Aggarwal"
        }
    ]
    return(
        <View style={styles.Box}>
        {
            users.map((element,index)=>{
            <TouchableOpacity onPress={()=>settoggle(element.id)} key={index}>
            <View style={styles.wrapping}>
                
            </View>
                <View style={styles.circle}>
                {
                    toggle==element.id ? <View style={styles.marking}></View> : null
                }
                </View>
                <Text style={styles.button}>{element.name}</Text>
            </TouchableOpacity>
            })
        }
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

export default DynamicRadioButtons