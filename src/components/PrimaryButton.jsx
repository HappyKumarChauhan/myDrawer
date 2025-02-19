import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
const PrimaryButton = ({title,handler}) => {

    return (
        <TouchableOpacity
            onPress={handler}
            style={[styles.button]}
        >
            <Text style={[styles.buttonText]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    button: {
        width:'100%',
        marginTop: 30,
        backgroundColor: 'black',
        height: 48,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})