import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class Found extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text>Home</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    }
})