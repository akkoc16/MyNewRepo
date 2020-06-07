import React, {useState} from 'react'
import { SafeAreaView, Text, View, FlatList, StyleSheet,Dimensions, TextInput} from 'react-native'
import {MyButton} from './components'


const State_Hook = props => {
    const [counter, setCounter] = useState(0)
    
    const [list, setList] = useState([])
    const [user, setUser] = useState({
        name: "Enver",
        surname: "Akkoç",
        age: 27
    })

    changeText = (text) => {
        setEntry(text)
    }

    addToList = () => {
        let newList = [...list]
        newList.push({ myEntry: entry })
        setList(newList)
    }

    updateObject = () => {
        let newuser = {...user}
        newuser.age = 35
        setUser(newuser)
    }

    return(
        <SafeAreaView style={{flex:1, justifyContent: "center", alignItems: "center"}}>
            <View style={{flex:1, padding: 10}}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={list}
                    renderItem={({item})=> <Text>{item.myEntry}</Text>}>
                </FlatList>
                <View style={styles.inputContainer}>
                        <TextInput 
                            textChange={changeText}></TextInput>
                </View>
                <MyButton myTitle="Write" myPress = {addToList}></MyButton>
                

            </View>
            <View style={{flex:1}}>
                <Text>Name: {user.name}</Text>
                <Text>Surname: {user.surname}</Text>
                <Text>Age: {user.age}</Text>
                <MyButton myTitle="Update" myPress = {updateObject}></MyButton>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create ( { 

    inputContainer: {
      backgroundColor: '#eceff1',
      padding: 10,
      margin: 5,
      borderRadius: 10,
      width: Dimensions.get("window").width/1.5,
      alignSelf: 'center' 
    }
})

export default State_Hook