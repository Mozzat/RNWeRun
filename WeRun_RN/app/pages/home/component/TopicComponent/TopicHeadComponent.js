import React, { Component } from 'react'
import {StyleSheet,View,ScrollView,Text} from 'react-native'
import { kScreenWidth } from '../../../../common/util/ScreenUtil'

export default class TopicHeadComponent extends Component {

    state = {
        data:[{title:'推荐'},{title:'打卡'}],
        currentIndex:0,
    }

    render() {
        
        console.log(this.props.titleArr)

        const titleViewArray = this.state.data.map((item,index) => {
            return (
                <View style={this.state.currentIndex == index ? style.itemSelectStyle : style.itemStyle }>
                    <Text style={this.state.currentIndex == index ? style.itemSelectTextStyle : style.itemTextStyle }>{item.title}</Text>
                </View>
            )
        })

        return (
            <View style={style.container}>
                <ScrollView style={style.scrollViewStyle}
                            horizontal={true}
                            contentContainerStyle={{alignItems:'center'}}
                            bounces={false}>
                    {titleViewArray}
                </ScrollView>
            </View> 
        )
    }
}

const style=StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:kScreenWidth,
        height:60,
        
    },
    scrollViewStyle:{
        backgroundColor:'#ffffff',
        paddingRight:20
    },
    itemStyle:{
        justifyContent:'center',
        height:29,
        marginLeft:15,
        borderRadius:14,
        backgroundColor:'#f5f5f5'
    },
    itemSelectStyle:{
        justifyContent:'center',
        height:29,
        marginLeft:15,
        borderRadius:14,
        backgroundColor:'#70DFA4'
    },
    itemTextStyle:{
        paddingLeft:15,
        paddingRight:15,
        fontSize:12,
        color:'#4A4A4A'
    },
    itemSelectTextStyle:{
        paddingLeft:15,
        paddingRight:15,
        fontSize:12,
        color:'#ffffff'
    }
})