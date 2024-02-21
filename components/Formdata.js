import React, { useState } from "react"
import {Text,View,Button, TextInput, StyleSheet} from "react-native"

const Formdata=()=>{
    const [display,setdisplay]=useState(false)

    const [formdata,setformdata] = useState({name:'',email:"",pass:""})

    const cleardetails=()=>{
        setformdata({name:"",email:"",pass:""})
        setdisplay(false)
    }

    return(
        <View>
            <Text style={{fontSize:30, marginBottom:30}}>Simple Form in React Native</Text>

            <TextInput placeholder="Name" style={styles.textBox} value={formdata.name} onChangeText={(text)=>setformdata(prev=>({...prev,name:text}))}></TextInput>
            <TextInput placeholder="Email" style={styles.textBox} value={formdata.email} onChangeText={(text)=>setformdata(prev=>({...prev,email:text}))}></TextInput>
            <TextInput placeholder="Password" style={styles.textBox} value={formdata.pass} onChangeText={(text)=>setformdata(prev=>({...prev,pass:text}))} secureTextEntry={true}></TextInput>
            <View>
                <Button title="Print Details" onPress={()=>setdisplay(true)} color={"green"}></Button>
            </View>
            <View style={{marginTop:10}}>
                <Button title="Clear Details" onPress={cleardetails}></Button>
            </View>
            
            {
                display? <View style={{marginTop:30}}>
                <Text style={styles.printBox}>Name is : {formdata.name}</Text>
                <Text style={styles.printBox}>Email is : {formdata.email}</Text>
                <Text style={styles.printBox}>Password is : {formdata.pass}</Text>
            </View> : null
            }
        </View>
    )
}

const styles=StyleSheet.create({
    textBox:{
        borderColor:"black",
        fontSize:25,
        borderWidth:2,
        marginBottom:15
    },
    printBox:{
        fontSize:20,
        marginBottom:5
    }
})

export default Formdata