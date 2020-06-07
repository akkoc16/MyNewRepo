import React from 'react'
import { View, Text, StyleSheet, SafeAreaView , Button, Dimensions, TextInput, FlatList} from 'react-native'
import {MyButton} from './components'

class State extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            entry: "",
            list: []

        }
        
    }

    updateCounter = () => {
        this.setState(
            {
                counter: this.state.counter + 1
            }
        ) 
        let newCounter = this.state.counter + 1

    }

    componentDidMount() {
        console.log("component did mount")
    }

    changeText = (text) => {
        this.setState({entry: text})
    }

    addToList = () => {
        let newList = [...this.state.list]
        newList.push({myEntry: this.state.entry})
        this.setState({list: newList})

    }
    

    render(){
        
        return(
            <SafeAreaView style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                
                <FlatList
                    keyExtractor= {(item,index)=>index.toString()}
                    data={this.state.list}
                    renderItem={({item}) => <Text>{item.myEntry}</Text>}/>




                <View style={styles.inputContainer}>
                    <TextInput 
                        onChangeText={this.changeText} ></TextInput>
                </View>
                <MyButton myTitle="Kaydet" myPress={this.addToList}></MyButton>

            </SafeAreaView>
        )
    }

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

export default State