import React, { Component } from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class Me extends Component {
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
        justifyContent:'center'
    }
})