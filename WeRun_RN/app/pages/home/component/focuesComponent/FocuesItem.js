import React, { Component } from 'react'
import {View,StyleSheet,TouchableOpacity,Image,Text} from 'react-native'
import { kScreenWidth } from '../../../../common/util/ScreenUtil'
import { MomentDateFilter } from '../../../../common/util/Util'

export default class FocuesItem extends Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.topBarStyle}>
                    <View style={{flexDirection:'row',paddingTop:20}}>
                        <Image style={style.topBarHeadStyle} source={{uri:this.props.item.authorImage}} ></Image>
                        <View style={style.titleViewStyle}>
                            <Text style={style.nameStyle}>{this.props.item.authorName}</Text>
                            <Text style={style.timeStyle}>{MomentDateFilter('YYYY/MM/DD',this.props.item.createTime)}</Text>
                        </View>
                    </View>
                    <View style={style.focuesBtn}>
                        <Text onPress={()=>{console.log('1')}} style={{fontSize:14,color:'white'}}>关注</Text>
                    </View>
                </View>
                <View>
                    <Text style={style.contentStyle}>{this.props.item.content}</Text>
                    <Image style={style.mainImageStyle} source={{uri:this.props.item.imagePath}}></Image>
                    {/* <View style={style.tagStyle}>
                        <Image style={style.tagImageStyle} source={require('../../../../image/home/添加话题标签.png')}></Image>
                        <Text style={style.tagNameStyle}>111</Text>
                    </View> */}
                    <View style={style.munuStyle}>
                        <View style={{flexDirection:"row"}}>
                            <View style={style.menuItemStyle}>
                                <Image style={style.menuItemImageStyle} source={this.props.item.like ? require('../../../../image/home/已点赞.png'): require('../../../../image/home/点赞.png')}></Image>
                                <Text style={style.menuItemTextStyle}>{this.props.item.likeNum}</Text>
                            </View>
                            <View style={style.menuItemStyle}>
                                <Image style={style.menuItemImageStyle} source={require('../../../../image/home/评论.png')}></Image>
                                <Text style={style.menuItemTextStyle}>{this.props.item.readNum}</Text>
                            </View>
                            <View style={style.menuItemStyle}>
                                <Image style={style.menuItemImageStyle} source={this.props.item.collect ? require('../../../../image/home/收藏.png'): require('../../../../image/home/收藏选中.png')}></Image>
                                <Text style={style.menuItemTextStyle}>{this.props.item.collectNum}</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Image style={style.shareBtn} source={require('../../../../image/home/分享.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {/* sdf */}
                    </View>
                    <Text style={style.lookAllComp}>查看全部评论</Text>
                    <View style={style.lineStyle}></View>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        backgroundColor:'#ffffff'
    },
    topBarStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    topBarHeadStyle:{
        width:36,
        height:36,
        borderRadius:18,
        marginLeft:20,
        backgroundColor:'blue'
    },
    titleViewStyle:{
        marginTop:5,
        marginLeft:10,
    },
    nameStyle:{
        color:'#4a4a4a',
        fontWeight:'bold',
        fontSize:16
    },
    timeStyle:{
        color:'#B9B9B9',
        marginTop:2,
        fontSize:10
    },
    focuesBtn:{
        marginTop:22,
        marginRight:20,
        width:80,
        height:32,
        borderRadius:16,
        backgroundColor:'#70DFA4',
        justifyContent:'center',
        alignItems:'center'
    },
    contentStyle:{
        color:'#4a4a4a',
        marginTop:20,
        marginLeft:20,
        marginRight:20
    },
    mainImageStyle:{
        marginTop:20,
        marginLeft:20,
        width:kScreenWidth-40,
        resizeMode:'cover',
        height:200,
    },
    tagStyle:{
        marginLeft:20,
        marginTop:20,
        height:28,
        borderRadius:14,
        backgroundColor:'#E2F9ED',
        flexDirection:'row',
        // justifyContent:'center'
        alignItems:'center'
    },
    tagImageStyle:{
        marginLeft:15,
        height:20,
        width:20,
    },
    tagNameStyle:{
        marginLeft:5,
        color:'#70DFA4',
        marginRight:15,
        backgroundColor:'black'
    },
    munuStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
    },
    menuItemStyle:{
        flexDirection:'row'
    },
    menuItemImageStyle:{
        marginLeft:20,
        width:19,
        height:18,
    },
    menuItemTextStyle:{
        marginLeft:10,
        color:'#4a4a4a',
        fontSize:14
    },
    shareBtn:{
        marginRight:20,
        width:21,
        height:18
    },
    lookAllComp:{
        marginTop:20,
        marginLeft:20,
        color:'#b9b9b9',
        fontSize:14
        
    },
    lineStyle:{
        marginTop:15,
        color:'#f5f5f5',
        backgroundColor:'#fafafa',
        height:10,
        width:kScreenWidth
    }
})