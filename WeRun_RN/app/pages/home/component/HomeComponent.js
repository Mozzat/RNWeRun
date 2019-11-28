import React, { Component } from 'react'
import {StyleSheet,View,ScrollView} from 'react-native'
import { kScreenWidth } from '../../../common/util/ScreenUtil'
import NearByTeam from './NearByTeam'
import FoundCoachComponent from './FoundCoachComponent'
import HotComponent from './HotComponent'


export  class HomeComponent extends Component {
    render() {
        return (
            <ScrollView>
                <View style={style.constainer}>
                    <NearByTeam/>
                    <FoundCoachComponent style={style.coachStyle}></FoundCoachComponent>
                    <HotComponent style={style.hotTeamStyle} />
                </View>
            </ScrollView>
        )
    }
}

const style = StyleSheet.create(
    {
        constainer:{
            flex:1,
            width:kScreenWidth,
            backgroundColor:'white'
        },
        coachStyle:{
            marginTop:30,
            width:kScreenWidth,
        },
        hotTeamStyle:{
            marginTop:20,
        }
    }
)

