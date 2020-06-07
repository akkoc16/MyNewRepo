
import React, {Component, version} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import {MyButton} from './components'

const App = () => {
    const onText = (text) =>{
      console.log(text)
    }

    const onLogin = () => {
      console.log("Login Pressed")
    }
    const onSign = () => {
      console.log("Sign Pressed")
    }


    return (

      <SafeAreaView style={{flex : 1}}>
        <View style={styles.container}>
          <Image 
            source={require("./assets/motorcycle.png")}
            style = {styles.imageStyle}>
            
          </Image>
          <View style={styles.inputContainer}>
            <TextInput 
              keyboardType="email-address" 
              autoCapitalize="none"
              placeholder="E-mail"
              onChangeText={onText}
              ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <TextInput 
              secureTextEntry={true}
              autoCapitalize="none"
              placeholder="Password"
              onFocus={(event) => {return (console.log("Focused"))}}></TextInput>
          </View>  
          <MyButton 
            myTitle={"Login"}
            myPress={onLogin}></MyButton>
          <MyButton 
            myTitle={"Sign-Up"}
            myPress={onSign}></MyButton>
        </View>
  
      </SafeAreaView>
    ) 
}

const styles = StyleSheet.create ( { 
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightblue'
  },
  inputContainer: {
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    width: Dimensions.get("window").width/1.5,
    alignSelf: 'center' 
  },
  imageStyle: {
    width: Dimensions.get("window").width/2,
    height: Dimensions.get("window").height/2,
    resizeMode: 'contain',
    alignSelf: 'center',
    backgroundColor: 'lightblue'
  }

})


export default App;
