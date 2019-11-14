import React, { Component } from 'react'
import {StyleSheet,Image,TouchableOpacity,View} from 'react-native'

export default class NearByTeamItem extends Component {
    render() {
        return (
            <View style={styles.cellStyle}>
                <TouchableOpacity>
                    <Image style={styles.headImage}></Image>
                    <View style={styles.rightStyle}>
                        <Text style={styles.cellTitle}>爱跑步的卡卡</Text>
                        <View>
                            <Image source={require('../../../image/home/等待运动中.png')}></Image>
                            <Text style={style.stateTitles}>等待跑步中</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles =StyleSheet.create(
    {
        cellStyle:{
            backgroundColor:'#f5f5f5',
            width:160,
            height:67,
            flexDirection:"row"
        },
        headImage:{
            width:48,
            height:48,
            borderRadius:24,
            backgroundColor:'yellow'
        },
        rightStyle:{
            flex:1,
            marginLeft:10,
            marginRight:10
        },
        cellTitle:{
            fontWeight:'bold',
            fontSize:14,
        },
        stateTitle:{
            color:'#70DFA4',
            fontSize:12
        }
    }
)