import React, { Component } from 'react'
import {View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native'
import { kScreenWidth } from '../../../common/util/ScreenUtil'
import CoachItem from './CoachItem'

const data=[{name:'1'},{name:'1'},{name:'1'},{name:'1'},{name:'1'},{name:'1'}]
export default  class FoundCoachComponent extends Component {


    render() {

        let tableView = data.map((item,index)=>{
            return <CoachItem {...item} key={index}
                   style={{position:"absolute",}}>
                    
            </CoachItem>
        })

        return (
            <View >
                <View style={style.container}>
                    <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                        <Text style={style.titleText}>发现教练</Text>
                        <TouchableOpacity style={style.rightBtn}>
                            <Image  source={require('../../../image/home/向右的箭头.png')} style={{width:5,height:10,resizeMode:'contain',marginRight:20
                        }}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={style.cocoaBox}>
                        {tableView}
                    </View>
                
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create(
    {
        container:{
            width:kScreenWidth
        },
        titleText:{
            marginTop:20,
            marginLeft:20,
            fontSize:16,
            fontWeight:'bold',
        },
        rightBtn:{
            flexDirection:'row-reverse',
            marginTop:20,
            marginRight:20,
            width:20,
            height:20
        },
        cocoaBox:{
            marginTop:-5,
            paddingLeft:20,
            paddingRight:20,
            flexDirection:'row',
            width:kScreenWidth,
            flexWrap:'wrap',
            justifyContent:'space-between'
        },
        
    }
)

