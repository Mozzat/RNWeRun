import React, { Component } from 'react'
import {View,StyleSheet,Image,Text,TouchableOpacity} from 'react-native'
import { kScreenWidth } from '../../../../common/util/ScreenUtil'

export default class TopicItem extends Component {
    render() {
        console.log(this.props.item)

        return (
            <TouchableOpacity activeOpacity={1} onPress={()=>{
                console.log('点击了')
            }}>
                <View style={style.container}>
                    <View style={style.topBarStyle}>
                        {/* 顶部 */}
                        <View style={style.leftTopBarStyle}>
                            <Image style={style.leftTopImageStyle} source={require('../../../../image/home/添加话题标签.png')}></Image>
                        <Text style={style.leftTextStyle}>{this.props.item.subjectName}</Text>
                        </View>
                        <View style={style.rightBarStyle}>
                            <Text style={style.rightTextStyle}>{this.props.item.readNum}人围观</Text>
                            <Image style={style.rightImageStyle} source={require('../../../../image/home/向右的箭头.png')}></Image>
                        </View>
                        
                    </View>
                    {/* 中间 */}
                    <View style={style.middleBarStyle}>
                        <View style={style.middleLeftBarStyle}>
                            <Text style={style.middleBarText} numberOfLines={2} >{this.props.item.content}</Text>
                            <View style={style.middleLeftBottomStyle}>
                                <Text style={style.bottomLeftText}>{this.props.item.authorName}</Text>
                                <Text style={style.bottomLeft2Text}>2019/6/30</Text>
                            </View>
                        </View>
                        <Image style={style.middleBarImage} source={{uri:this.props.item.imagePath}}></Image>
                    </View>
                    {/* 底部线条 */}
                    <View style={{backgroundColor:'#ebebeb',height:0.5,width:kScreenWidth,marginTop:20}} />
                </View>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    container:{
        backgroundColor:'#fff'
    },
    topBarStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        alignItems:'center'
    },
    leftTopBarStyle:{
        alignItems:'center',
        marginLeft:20,
        flexDirection:'row'
    },
    leftTopImageStyle:{
        height:25,
        width:25,
    },
    leftTextStyle:{
        marginLeft:10,
        color:'#4a4a4a',
        fontSize:16
    },
    rightBarStyle:{
        marginRight:20,
        flexDirection:'row'
    },
    rightTextStyle:{
        color:'#9B9B9B',
        fontSize:12
    },
    rightImageStyle:{
        width:5,
        height:10,
        marginLeft:10
    },
    middleBarStyle:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    middleBarImage:{
        flex:0,
        width:84,
        height:82,
        marginRight:20,
        backgroundColor:'red',
        borderRadius:6,
        resizeMode:'cover'
    },
    middleLeftBarStyle:{
        flex:1,
        marginLeft:20,
        marginRight:40
    },
    middleBarText:{
        color:'#4a4a4a',
        fontSize:14,
        lineHeight:24,
    },
    middleLeftBottomStyle:{
        marginTop:10,
        flexDirection:'row'
    },
    bottomLeftText:{
        fontSize:12,
        color:'#4a4a4a'
    },
    bottomLeft2Text:{
        marginLeft:10,
        fontSize:12,
        color:'#9B9B9B'
    },
})