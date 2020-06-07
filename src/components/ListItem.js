import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ShadowPropTypesIOS} from 'react-native'
import List from '../List'

const ListItem = props => {
    return (
        <View style={[styles.container, {backgroundColor: props.myData.isDone ? '#dcedc8' : '#ff8a65'}]}>
            <View style= {{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.dot}></View>
                <Text style = {styles.text}>{props.myData.todo}</Text>
            </View>
            
            <Text>
                {
                    props.myData.isDone ? "Yapıldı!" : "Yapılmadı!"
                }
            </Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dcedc8',
        margin: 5,
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 20,
        marginLeft: 10,
    },
    dot: {
        width: 10,
        height: 10,
        backgroundColor: 'black',
        borderRadius: 20
    }

})

export {ListItem}