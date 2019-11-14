import React, { Component } from 'react'
import {StyleSheet,View} from 'react-native'
import { kScreenWidth } from '../../../common/util/ScreenUtil'
import NearByTeam from './NearByTeam'

export  class HomeComponent extends Component {
    render() {
        return (
            <View style={style.constainer}>
                <NearByTeam/>
            </View>
        )
    }
}

const style = StyleSheet.create(
    {
        constainer:{
            flex:1,
            width:kScreenWidth,
            backgroundColor:'blue'
        }
    }
)

