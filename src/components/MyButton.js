import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'

const MyButton = props => {
    return (
        <TouchableOpacity 
            style = {styles.buttonContainer}
            onPress={props.myPress}>
              <Text style={styles.textStyle}>{props.myTitle}</Text>
        </TouchableOpacity> 
    )

}
const styles = StyleSheet.create({

    textStyle: {
        color: 'white',
        fontWeight: 'bold'
    
      },
      buttonContainer: {
        backgroundColor: '#546e7a',
        width: Dimensions.get("window").width/2,
        alignSelf: 'center',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        margin: 5
      }
    


}

)

export default MyButton