import React, { Component } from 'react'
import {StyleSheet,View,Image,Text} from 'react-native'
import { kScreenWidth } from '../../../common/util/ScreenUtil'

const imageWidth = (kScreenWidth - 2 * 20 - 2 * 10)/3.0

export default class CoachItem extends Component {
    render() {
        return (
            <View >
                <View style={styles.imageBox}>
                    <Image style={styles.imageStyle} source={require('../../../image/test/阳光帕萨特.png')}></Image>
                    <View style={styles.tagStyle}>
                        <Text style={{fontSize:10,color:'#373737'}}>#跑步</Text>
                    </View>
                    <View style={styles.pointView}>
                        <Image style={styles.pointImage} source={require('../../../image/home/坐标-白.png')}></Image>
                        <Text style={styles.pointAddress}>上海市</Text>
                    </View>
                </View>
                <View style={styles.bottonStyle}> 
                    <Text style={styles.nameStyle}>阳光帕萨特</Text>
                    <Image style={styles.sexStyle} source={require('../../../image/home/男生标志.png')}></Image>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {   
        imageBox:{
            position:'relative',
            marginTop:20,
            borderRadius:10,
            width:imageWidth,
            height:imageWidth,
            overflow:'hidden'
        },
        imageStyle:{
            width:imageWidth,
            height:imageWidth,
        },
        tagStyle:{
            position:"absolute",
            right:7,
            top:7,
            paddingTop:5,
            paddingBottom:5,
            paddingLeft:5,
            paddingRight:5,
            backgroundColor:'rgba(255,255,255,0.90)',
            borderRadius:4,
        },
        pointView:{
            position:"absolute",
            left:5,
            bottom:5,
            flexDirection:'row'
        },
        pointImage:{
            width:7,
            height:10
        },
        pointAddress:{
            color:'white',
            fontSize:10,
            marginLeft:5
        },
        bottonStyle:{
            flexDirection:'row',
            marginTop:5,
            justifyContent:'center',
        },
        nameStyle:{
            color:'#373737',
            fontSize:14,
            fontWeight:'bold'
        },
        sexStyle:{
            marginLeft:10,
            width:10,
            height:10
        }
    }
)