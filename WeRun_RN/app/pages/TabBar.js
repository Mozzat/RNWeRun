import React,{Component} from 'react'
import {Image} from 'react-native'
///导入页面模块
import Home from './home/Home'
import Found from './found/Found'
import Sport from './sport/Sport'
import Plane from './plane/Plane'
import Me from './me/Me'

///导入底部barbar库
import {createBottomTabNavigator} from 'react-navigation-tabs'

const Tabbar = createBottomTabNavigator(
    {
        Home:{
            screen:Home,
            navigationOptions:{
                tabBarLabel:'社区',
                tabBarIcon:({focused}) => {
                    let img = !focused ?  require('../image/tabbar/社区.png'): require('../image/tabbar/社区-选中.png');
                    return <Image source={img} style={{width:26,height:26,resizeMode:'contain'}}></Image>
                }
            }
        },
        Found:{
            screen:Found,
            navigationOptions:{
                tabBarLabel:'发现',
                tabBarIcon:({focused}) => {
                    let img = !focused ?  require('../image/tabbar/发现.png'): require('../image/tabbar/发现-选中.png');
                    return <Image source={img} style={{width:26,height:26,resizeMode:'contain'}}></Image>
                }
            }
        },
        Sport:{
            screen:Sport,
            navigationOptions:{
                tabBarLabel:'运动',
                tabBarIcon:({focused}) => {
                    let img = !focused ?  require('../image/tabbar/运动.png'): require('../image/tabbar/运动-选中.png');
                    return <Image source={img} style={{width:26,height:26,resizeMode:'contain'}}></Image>
                }
            }
        },
        Plane:{
            screen:Plane,
            navigationOptions:{
                tabBarLabel:'计划',
                tabBarIcon:({focused}) => {
                    let img = !focused ?  require('../image/tabbar/计划.png'): require('../image/tabbar/计划-选中.png');
                    return <Image source={img} style={{width:26,height:26,resizeMode:'contain'}}></Image>
                }
            }
        },
        Me:{
            screen:Me,
            navigationOptions:{
                tabBarLabel:'我的',
                tabBarIcon:({focused}) => {
                    let img = !focused ?  require('../image/tabbar/我的.png'): require('../image/tabbar/我的-选中.png');
                    return <Image source={img} style={{width:26,height:26,resizeMode:'contain'}}></Image>
                }
            }
        }
    },{
        tabBarOptions:{
            //当前tabbar的文本颜色和图标颜色
            activeTintColor:'#70DFA4',
            inactiveTintColor:'#B9B9B9',
            showIcon:true,
            style:{
                backgroundColor:'#fff',
                paddingBottom:1,
                borderTopWidth:0.2,
                paddingTop:1,
                
            },
            labelStyle:{
                fontSize:11,
                margin:1,
            },
            tabStyle:{
                height:49
            }
        },
        //是否懒加载
        lazy:true,
        initialRouteName:'Home'
    }
)

export default Tabbar