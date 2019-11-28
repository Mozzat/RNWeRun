import React, { Component } from 'react'
import {Image,StyleSheet,Text,View,TouchableOpacity} from 'react-native'
import HotTeamItem from './HotTeamItem'
import { kScreenWidth } from '../../../common/util/ScreenUtil'

const data = [{name:'11111'},{name:'11111'},{name:'11111'}]

export default class HotComponent extends Component {
    render() {

        let tabViews = data.map((item,index)=>{
            return <HotTeamItem showLine={index != data.length-1} item={item} key={index} index = {index}/>
        })

        return (
            <View style={style.container}>
                <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                        <Text style={style.titleText}>热门小队</Text>
                </View>
                {tabViews}
                <View style={style.btnStyle}>
                    <TouchableOpacity>
                        <Text style={style.btnTextStyle}>查看更多</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create(
    {
        container:{
            backgroundColor:'white',
            width:kScreenWidth,
            paddingBottom:30
        },
        titleText:{
            marginTop:30,
            marginLeft:20,
            fontSize:16,
            fontWeight:'bold',
        },
        btnStyle:{
            borderRadius:8,
            backgroundColor:'rgba(100,209,151,0.10)',
            marginLeft:20,
            marginRight:20,
            alignItems:'center',
            height:36,
            justifyContent:'center'
            
        },
        btnTextStyle:{
            fontSize:14,
            color:'#64D197',
            
        }
    }
)