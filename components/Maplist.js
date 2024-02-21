import React from "react"
import {Text,View} from "react-native"

const Maplist=()=>{

    const users=[
        {
            id:1,
            name:"rahul",
            age:20,
            profession:"Software Developer"
        },
        {
            id:2,
            name:"kartik",
            age:22,
            profession:"UI/UX Developer"
        },
        {
            id:3,
            name:"Abhishek",
            age:22,
            profession:"Machine Learning"
        },
        {
            id:4,
            name:"Shivam",
            age:21,
            profession:"Software Developer"
        }
    ]
    return(
        <>
        <Text style={{fontSize:30}}>List with Map Function</Text>
        <View style={{marginTop:40}}>
            {
                users.map((element)=><Text style={{fontSize:30, backgroundColor:"lightblue", marginBottom:5}}>{element.name}</Text>)
            }
        </View>
        </>
    )
}
export default Maplist