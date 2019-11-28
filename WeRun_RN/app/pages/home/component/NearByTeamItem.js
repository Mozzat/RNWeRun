import React, { Component } from 'react'
import {StyleSheet,Image,TouchableOpacity,View,Text} from 'react-native'

export default class NearByTeamItem extends Component {

    render() {
        return (
            <View style={styles.bageView}>
                <View style={styles.cellStyle}>
                    <TouchableOpacity onpress = {(index) => {
                        console.log(index)
                    }}
                    style={styles.contentStyle}>
                        <Image style={styles.headImage} source={require('../../../image/home/默认头像小豹子.png')}></Image>
                        <View style={styles.rightStyle}>
                            <Text style={styles.cellTitle}>{this.props.item.title}</Text>
                            <View style={styles.bottomStyle}>
                                <Image source={require('../../../image/home/等待运动中.png')} style={styles.stateImage}></Image>
                                <Text style={styles.stateTitle}>{this.props.item.name}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
            </View>
            </View>
        )
    }
}

const styles =StyleSheet.create(
    {   
        bageView:{
            backgroundColor:'#fff',
            paddingRight:10
        },
        cellStyle:{
            borderRadius:10,
            backgroundColor:'#f5f5f5',
            width:160,
            height:67,
            justifyContent:'center',
        },
        contentStyle:{
            flexDirection:'row',
            justifyContent:'center',
        },
        headImage:{
            marginLeft:10,
            width:48,
            height:48,
            borderRadius:24,
        },
        rightStyle:{
            flex:1,
            marginLeft:10,
            marginRight:10,
            overflow:'hidden'
        },
        cellTitle:{
            marginTop:6,
            fontWeight:'bold',
            fontSize:14,
        },
        bottomStyle:{
            marginTop:7,
            flexDirection:"row",
            flexDirection:'row'
        },
        stateImage:{
            width:7,
            height:12
        },
        stateTitle:{
            marginLeft:10,
            color:'#70DFA4',
            fontSize:12
        }
    }
)