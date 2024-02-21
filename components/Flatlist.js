// Flatlist is best for looping anything because during scrolling it esare the part that are not showing so it is fast. there are so many features you cam use in flatlist 

import React from "react"
import {View,Text, FlatList, StyleSheet, ScrollView} from "react-native"

const Flatlist=()=>{
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
        },
        {
            id:5,
            name:"rahul",
            age:20,
            profession:"Software Developer"
        },
        {
            id:6,
            name:"kartik",
            age:22,
            profession:"UI/UX Developer"
        },
        {
            id:7,
            name:"Abhishek",
            age:22,
            profession:"Machine Learning"
        },
        {
            id:8,
            name:"Shivam",
            age:21,
            profession:"Software Developer"
        }
    ]
    return(
        <View>
        <Text style={{fontSize:30, marginBottom:50}}>List with Flat List Components</Text>
        <FlatList 
            data={users} 
            renderItem={({item})=><Text style={styles.listBox}>{item.name}</Text>}/>
        </View>
    )
}

const styles=StyleSheet.create({
    listBox:{
        color:"white",
        backgroundColor:"lightblue",
        fontSize:50,
        marginBottom:20
    }
})
export default Flatlist;