import React, { Component } from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image,ScrollView,Button} from 'react-native'
import {kNavBarHeightIOS,kScreenWidth} from '../../common/util/ScreenUtil'
import {HomeComponent} from './component/HomeComponent'

const titleArr = [
    {name:'运动圈'},
    {name:'最热'},
    {name:'关注'},
    {name:'话题'}
]

export default class Home extends Component {

    ///滑动停止时
    scrollEnd= (e)=> {
        var offsetX = e.nativeEvent.contentOffset.x;
        var currentPage = Math.floor(offsetX/kScreenWidth);
        this.setState({
          selectTag:currentPage,
        })
      }

    state={
        selectTag:0
    }
    render() {
        let btnArr = titleArr.map((item,index) => {
            return <View key={index} style={this.state.selectTag == index ? style.btnSelectStyle:style.btnStyle}>
                        <TouchableOpacity
                            onPress={() => this.setState({
                                selectTag:index
                            })}
                            >
                            <Text style={this.state.selectTag == index ? {color:'white',fontSize:16,}:{color:'#373737',fontSize:16,} }>{item.name}</Text>
                        </TouchableOpacity>
                   </View>
        })
        return (
            <View style={style.container}>
                <View style={style.topView}>
                    <View style={style.topSearchView}>
                        <TouchableOpacity style={style.searchBtn}>
                            <Image source={require('../../image/home/搜索.png')} style={{resizeMode:'stretch',marginLeft:10,width:18,height:18}}></Image>
                            <Text style={{fontSize:14,color:'#b9b9b9',marginLeft:10}}>搜索</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.addFriend}>
                            {/* <Image></Image> */}
                            <Image source={require('../../image/home/添加好友.png')} style={{resizeMode:'stretch',width:30,height:20}}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.middleView}>
                    {btnArr}
                </View>
                <ScrollView 
                    style={style.scrollViewStyle}
                    horizontal={true}
                    pagingEnabled={true}
                    bounces={false}
                    onMomentumScrollEnd ={(e)=> this.scrollEnd(e)}
                    showsHorizontalScrollIndicator>

                    <HomeComponent/>
                    <View style={style.subView}><Text style={{fontSize:30}}>1</Text></View>
                    <View style={style.subView}><Text style={{fontSize:30}}>2</Text></View>
                    <View style={style.subView}><Text style={{fontSize:30}}>3</Text></View>
                    <View style={style.subView}><Text style={{fontSize:30}}>4</Text></View>
                </ScrollView>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        width:kScreenWidth
    },
    topView:{
        width:kScreenWidth,
        height:kNavBarHeightIOS,
    },
    topSearchView:{
        flexDirection:'row',
        marginTop:kNavBarHeightIOS-44,
        height:44,
        width:kScreenWidth,
        alignItems:'center',
    },
    searchBtn:{
        flexDirection:'row',
        marginLeft:20,
        marginRight:20,
        flex:1,
        height:35,
        borderRadius:17.5,
        backgroundColor:'#f5f5f5',
        alignItems:'center'
    },
    addFriend:{
        marginRight:20,
        width:30,
        height:20,
        alignItems:'center'
    },
    middleView:{
        flexDirection:'row',
        width:kScreenWidth,
        height:49,
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20
    },
    btnStyle:{
        backgroundColor:'white',
        color:'#70DFA4',
        fontSize:16,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:15,
        paddingRight:15,
        borderRadius:18,
    },
    btnSelectStyle:{
        backgroundColor:'#70DFA4',
        color:'white',
        fontSize:16,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:15,
        paddingRight:15,
        borderRadius:18,
    },
    scrollViewStyle:{
        flexDirection:'row',
        flex:1,
        backgroundColor:'red'
    },
    subView:{
        width:kScreenWidth,
        flex:1,
        backgroundColor:'yellow'
    }
})