import React from "react"
import {View,Text,SectionList} from "react-native"

const Sectionlist=()=>{
    
    const users=[
        {
            name:"Rahul",
            age:20,
            data:["lalantop","iraaaday"],  //data word is important to write 
        },
        {
            name:"Shivam",
            age:20,
            data:["rahul","shivam"],
        },
        {
            name:"Sonali",
            age:20,
            data:["pubg","kartik","abhishek"],
        }
    ]

    return(
        <View>
        <Text style={{fontSize:30}}>Section List in React Native</Text>
            <SectionList sections={users} renderItem={({item})=>
                <Text style={{fontSize:20}}>{item}</Text>
            }></SectionList>
        </View>
    )
}
export default Sectionlist