import React ,{useState} from "react"
import {StyleSheet, Text,View,Button,Modal} from "react-native"

const modal=()=>{
    const [showModal,setshowModal]=useState(false)
    return(
        <View style={styles.main}>
            <View style={styles.buttonview}>
                <Button title="Open Modal" onPress={()=>setshowModal(true)}></Button>
            </View>

            <Modal transparent={true} visible={showModal} animationType="fade">

            <View style={styles.centeredview}>
                <Text style={styles.texts}>Hello Code Step by Step</Text>
                <View style={{marginTop:60}}>
                    <Button title="Close Modal" onPress={()=>setshowModal(false)}></Button>
                </View>
            </View>
            </Modal>
        </View>
        
    )
}
const styles=StyleSheet.create({
    buttonview:{
        justifyContent:"flex-end",
    },
    centeredview:{
        marginTop:200,
        shadowColor:"black",
        shadowOpacity:1,
        elevation:3,
        padding:10,
        borderRadius:5
    },
    texts:{
        fontSize:30,
        marginTop:10
    }
})
export default modal