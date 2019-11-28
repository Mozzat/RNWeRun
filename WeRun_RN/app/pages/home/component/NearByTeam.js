"use strict";

import React, { Component } from 'react'
import {StyleSheet,View,TouchableOpacity, FlatList,Image,Text} from 'react-native'
import { kScreenWidth } from '../../../common/util/ScreenUtil'
import  NearByTeamItem from './NearByTeamItem'

export default class NearByTeam extends Component {

    state={
        data:[{title:'艾薇儿',name:'等待瑜伽中',head:'1111'},
        {title:'汤姆克鲁斯',name:'等待瑜伽中',head:'1111'},
        {title:'艾薇儿',name:'等待瑜伽中',head:'1111'},
        {title:'汤姆克鲁斯',name:'等待瑜伽中',head:'1111'}]
    }

    _renderItem =(item,index) => {
        return <NearByTeamItem {...item} key={index} key={index}>

        </NearByTeamItem>
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
                    style={style.flatListStyle}
                    horizontal={true}
                    data={this.state.data}
                    renderItem={this._renderItem}
                    showsHorizontalScrollIndicator={false}
                    >
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
