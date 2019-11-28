import React, { Component } from 'react'
import {Image,StyleSheet,Text,View} from 'react-native'
import { kScreenWidth } from '../../../common/util/ScreenUtil'

const num1 = require('../../../image/home/第1.png')
const num2 = require('../../../image/home/第2.png')
const num3 = require('../../../image/home/第3.png')
export default class HotTeamItem extends Component {
    render() {
        console.log(this.props.index)
        return (
            <View>
                <View style={style.container}>
                    <View style={style.leftStyle}>
                        <Image style={style.numImage} source={this.props.index < 2 ? this.props.index ==0 ?num1 : num2 : num3}></Image>
                        <Image style={style.headImage} source={require('../../../image/home/默认头像小豹子.png')}></Image>
                        <Text style={style.teamTitle}>浦江跑步小分队</Text>
                    </View>
                    <View style={style.rightStyle}>
                        <Image style={style.hotImage} source={require('../../../image/home/火热图标.png')}></Image>
                        <Text style={style.hotTitle}>热度</Text>
                        <Text style={style.hotCountLab}>727</Text>
                    </View>
                </View>
                <View style={{marginLeft:58,marginTop:15,marginRight:0,height:0.5,backgroundColor:this.props.showLine?'#EBEBEB':'white'}}></View>
            </View>
        )
    }
}

const style = StyleSheet.create(
    {
        container:{
            paddingTop:20,
            flexDirection:'row',
            width:kScreenWidth,
        },
        leftStyle:{
            marginLeft:20,
            flexDirection:'row',
            alignItems:'center'
        },
        rightStyle:{
            marginRight:10,
            flexDirection:'row',
            alignItems:'center'
        },
        numImage:{
            width:27,
            height:27,  
        },
        headImage:{
            width:48,
            height:48,
            marginLeft:13,
            borderRadius:6,
        },
        teamTitle:{
            color:'#373737',
            fontSize:14,
            marginLeft:10
        },
        hotImage:{
            width:12,
            height:16,
        },
        hotTitle:{
            color:'#4a4a4a',
            fontSize:10,
            marginLeft:4,
        },
        hotCountLab:{
            color:'#64D197',
            fontSize:20,
            marginLeft:8,
        }
        
    }
)
