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
    FlatList,
  } from 'react-native';
import {ListItem} from './components'


const mockData = [
    {id: 0, todo: "Ev temizlenecek", isDone: false},
    {id: 1, todo: "Çöp atılacak", isDone: false},
    {id: 2, todo: "Alışveriş yapılacak", isDone: true}

]

const List = props => {
    return (
        <SafeAreaView style = {{flex: 1}}>
            
            <View style={{flex:1}}>

                <FlatList
                    keyExtractor = {(item, index) => index.toString()} 
                    data = {mockData}
                    renderItem = {({ item }) => <ListItem myData={item} />}>
                </FlatList>

            </View>
          
        </SafeAreaView>
    )

}
export default List