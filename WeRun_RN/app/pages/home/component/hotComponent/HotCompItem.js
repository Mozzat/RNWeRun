import React, { Component } from 'react'
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native'
import { kScreenWidth } from '../../../../common/util/ScreenUtil'

export default class HotCompItem extends Component {

    render() {
        return (
            <View style={style.container}>
                <View style={style.imageBox}>
                    <Image style={{width:(kScreenWidth-30)/2.0,height:((kScreenWidth-30)/2.0)*this.props.item.height/this.props.item.width}} source={{uri:this.props.item.imagePath}} />
                    
                    {this.props.item.type == 'VIDEO' ? <TouchableOpacity style={style.videoBtn}>
                                                            <Image source={require('../../../../image/home/视频播放标识.png')} style={{width:27,height:27}} />
                                                       </TouchableOpacity>  : null }
                </View>
                <Text numberOfLines={2} style={style.contentText}>{this.props.item.content}</Text>
                <View style={style.bottoStyle}>
                    <View style={style.leftBtmStyle}>
                        <Image style={style.leftBtmHead} source={{uri:this.props.item.authorImage}}></Image>
                        <Text style={style.leftBtmName}>{this.props.item.authorName}</Text>
                    </View>
                    <TouchableOpacity style={style.rightBtmStyle}>
                            <Image style={style.rightImageStyle} source={require('../../../../image/home/点赞.png')}></Image>
                            <Text style={style.rightCountStyle}>{this.props.item.likeNum}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        // marginLeft:15,
        // marginRight:15,
        marginTop:15,
        borderRadius:10,
        width:(kScreenWidth-40)/2.0,
        backgroundColor:'white',
        overflow:'hidden',
        
    },
    imageBox:{
        position:'relative',
        backgroundColor:'red'
    },
    videoBtn:{
        position:'absolute',
        top:10,
        right:10,
    },
    contentText:{
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        fontSize:13,
        fontWeight:'bold'
    },
    bottoStyle:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10
    },
    leftBtmStyle:{
        marginLeft:10,
        flexDirection:'row',
        alignItems:'center',
    },
    leftBtmHead:{
        width:27,
        height:27,
        borderRadius:13.5,
    },
    leftBtmName:{
        marginLeft:10,
        fontSize:10,
        color:'#4a4a4a'
    },
    rightBtmStyle:{
        marginRight:10,
        flexDirection:'row',
        alignItems:'center'
    },
    rightImageStyle:{
        height:12,
        width:14,
        
    },
    rightCountStyle:{
        marginLeft:10,
        fontSize:10,
        color:'#4a4a4a'
    }

})