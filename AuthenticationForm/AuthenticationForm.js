import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Pressable,
} from 'react-native';

const AuthenticationForm = () => {
  const [users, setUsers] = useState({
    studentName : {
      name: '',
      isValid: false,
    },
    studentEmail : {
      email: '',
      isValid: false,
    },
    studentPassword : {
      password: '',
      isValid: false,
    },
});

const signUpHandler=()=>{
  console.log(users)
}
const loginHandler=()=>{
  console.log("hello")
}

  return (
    <View style={styles.box}>
      <Text
        style={{
          fontSize: 20,
          color: 'blue',
          marginVertical: 10,
          alignSelf: 'center',
        }}>
        LOGIN/SIGNUP
      </Text>
      <View style={styles.innerContainer}>
        <View style={styles.inputTextContainer}>
          <Text style={styles.text}>Name : </Text>
          <TextInput
            style={styles.inputTextField}
            value={users.studentName.name}
            onChangeText={text => setUsers(prev=>({...prev,studentName: {...prev.studentName,name:text}}))}
          />
          <View style={{height:16}}>
            {users.studentName.isValid? <Text style={styles.isValidText}>Invalid Name</Text>:null}
          </View>
        </View>
        <View style={styles.inputTextContainer}>
          <Text style={styles.text}>Email : </Text>
          <TextInput
            style={styles.inputTextField}
            value={users.studentEmail.email}
            onChangeText={text =>  setUsers(prev=>({...prev,studentEmail: {...prev.studentEmail,email:text}}))}
          />
          <View style={{height:16}}>
            {users.studentEmail.isValid? <Text style={styles.isValidText}>Invalid Email</Text>:null}
          </View>
        </View>
        <View style={styles.inputTextContainer}>
          <Text style={styles.text}>Password : </Text>
          <TextInput
            style={styles.inputTextField}
            secureTextEntry={true}
            value={users.studentPassword.password}
            onChangeText={text => setUsers(prev=>({...prev,studentPassword: {...prev.studentPassword,password:text}}))}
          />
          <View style={{height:16}}>
            {users.studentPassword.isValid? <Text style={styles.isValidText}>Password is incorrect</Text>:null}
          </View>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:20}}>
          <Pressable
            style={({pressed}) => pressed && styles.pressed}
            onPress={loginHandler}>
            <View style={styles.buttonBox}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>
                Login
              </Text>
            </View>
          </Pressable>
          <Pressable
            style={({pressed}) => pressed && styles.pressed}
            onPress={signUpHandler}>
            <View style={styles.buttonBox}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 17}}>
                SignUp
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#e4e7ed',
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.75,
    padding: 20,
    marginTop: 40,
    marginHorizontal:10
  },
  innerContainer: {
    marginVertical: 10,
  },
  inputTextField: {
    borderWidth: 0.75,
    borderRadius: 5,
    height: 45,
    width: '100%',
    backgroundColor: '#edeff2',
    opacity: 0.75,
    elevation: 1,
    fontSize: 20,
  },
  inputTextContainer: {
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    // alignSelf:"center"
  },
  buttonBox: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginVertical: 20,
  },
  pressed: {
    opacity: 0.75,
  },
  isValidText: {
    color: 'red',
  },
});
export default AuthenticationForm;
