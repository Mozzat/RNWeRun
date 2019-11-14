"use strict";

import React, { Component } from 'react'
import {StyleSheet,View,TouchableOpacity, FlatList,Image,Text} from 'react-native'
import { kScreenWidth } from '../../../common/util/ScreenUtil'

export default class NearByTeam extends Component {

    state={
        data:[{title:'1111',name:'ssssss',head:'1111'}]
    }

    

    componentDidMount(){
        this.test()
    }

    render() {
        return (
            <View style={style.container}>
                <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                    <Text style={style.titleText}>TA们在小队中</Text>
                    <TouchableOpacity style={style.rightBtn}>
                        <Image  source={require('../../../image/home/向右的箭头.png')} style={{width:20,height:20,resizeMode:'contain'
                    }}></Image>
                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal={true}>

                </FlatList>
            </View>
        )
    }

    test(){
        console.log('11111')
    }
}

const style = StyleSheet.create(
    {
        container:{
            backgroundColor:'white'
        },
        titleText:{
            marginTop:20,
            marginLeft:20,
            fontSize:16,
            fontWeight:'bold',
        },
        rightBtn:{
            marginTop:20,
            marginRight:20,
            width:20,
            height:20
        },
        flatListStyle:{
            marginTop:10,
            paddingLeft:20,
            paddingRight:20,
            height:67,
            width:kScreenWidth
        },
        cellStyle:{
            backgroundColor:'#f5f5f5',
            width:160,
            height:67,
        },
        headImage:{
            width:48,
            height:48,
            borderRadius:24,
        },
        cellTitle:{
            fontWeight:'bold',
            fontSize:14,
        },
        stateTest:{
            color:'#70DFA4',
            fontSize:12
        }
    }
)
