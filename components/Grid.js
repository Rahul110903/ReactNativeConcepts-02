// flexwrap is used when there is no space left then it goes to the next line. if you do not put flex wrap then it continues .

import React from "react"
import {Text,View,Button,StyleSheet, ScrollView} from "react-native"

const Grid=()=>{

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
            <Text style={{fontSize:31}}>Grid With Dynamic Data</Text>
                <View style={{flex:1, flexDirection:"row", flexWrap:"wrap"}}>
                    {
                        users.map((element)=>
                            <Text style={styles.items}>{element.name}</Text>
                        )
                    }
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
export default Grid;
