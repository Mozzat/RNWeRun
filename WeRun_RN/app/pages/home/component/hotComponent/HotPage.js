import React, { Component } from 'react'
import {View,StyleSheet,Text} from 'react-native'
import MasonryList from '../../../../common/component/MasonryList'
import API from '../../../../common/Fetch/API'
import FetchRequest from '../../../../common/Fetch/FetchRequest'
import { kScreenWidth } from '../../../../common/util/ScreenUtil'
import HotCompItem from '../hotComponent/HotCompItem'

export default class HotPage extends Component {
    state = {
        currentPage:1,
    //     data:[{authorImage:"http://192.168.100.150:8686/werun/files/image/user/2019/5/29/1559117979313_image_1.jpg",
    //            authorName:"涩谷时光",
    //            authorNo:"98091218742804480",
    //            content:"公司的环境",
    //            height:1280,
    //            id:13,
    //            imagePath:"http://192.168.100.150:8686/werun/files/image/trends/2019/8/2/1564745331564_image_1.jpg",
    //            like:false,
    //            likeNum:2,
    //            type:"VIDEO",
    //            width:720
    //         },
    //     {
    //            authorImage:"http://192.168.100.150:8686/werun/files/image/user/2019/5/31/1559297229522_image_1.jpg",
    //            authorName:"不行不行吧",
    //            authorNo:"95253826038136832",
    //            content:"werun代码",
    //            height:1280,
    //            id:15,
    //            imagePath:"http://192.168.100.150:8686/werun/files/image/trends/2019/8/5/1564985559214_image_1.jpg",
    //            like:false,
    //            likeNum:2,
    //            type:"IMAGE",
    //            width:720
    //     },
    //     {
    //            authorImage:"http://192.168.100.150:8686/werun/files/image/user/2019/5/31/1559297229522_image_1.jpg",
    //            authorName:"不行不行吧",
    //            authorNo:"95253826038136832",
    //            content:"今天很开心",
    //            height:600,
    //            id:15,
    //            imagePath:"http://192.168.100.150:8686/werun/files/image/trends/2019/8/2/1564742247114_image_1.jpg",
    //            like:false,
    //            likeNum:2,
    //            type:"IMAGE",
    //            width:800
    //     },
    //     {
    //            authorImage:"http://192.168.100.150:8686/werun/files/image/user/2019/5/31/1559297229522_image_1.jpg",
    //            authorName:"不行不行吧",
    //            authorNo:"95253826038136832",
    //            content:"是不是感觉萌萌哒！朋友们都说跟我本人很像啊",
    //            height:600,
    //            id:15,
    //            imagePath:"http://192.168.100.150:8686/werun/files/image/trends/2019/8/2/1564742510839_image_1.jpg",
    //            like:false,
    //            likeNum:2,
    //            type:"IMAGE",
    //            width:800
    //     },
    //     {authorImage:"http://192.168.100.150:8686/werun/files/image/user/2019/5/29/1559117979313_image_1.jpg",
    //            authorName:"涩谷时光",
    //            authorNo:"98091218742804480",
    //            content:"公司的环境",
    //            height:1280,
    //            id:13,
    //            imagePath:"http://192.168.100.150:8686/werun/files/image/trends/2019/8/2/1564745331564_image_1.jpg",
    //            like:false,
    //            likeNum:2,
    //            type:"VIDEO",
    //            width:720
    //         },
    //     {
    //            authorImage:"http://192.168.100.150:8686/werun/files/image/user/2019/5/31/1559297229522_image_1.jpg",
    //            authorName:"不行不行吧",
    //            authorNo:"95253826038136832",
    //            content:"werun代码",
    //            height:1280,
    //            id:15,
    //            imagePath:"http://192.168.100.150:8686/werun/files/image/trends/2019/8/5/1564985559214_image_1.jpg",
    //            like:false,
    //            likeNum:2,
    //            type:"IMAGE",
    //            width:720
    //     },
    //     {
    //            authorImage:"http://192.168.100.150:8686/werun/files/image/user/2019/5/31/1559297229522_image_1.jpg",
    //            authorName:"不行不行吧",
    //            authorNo:"95253826038136832",
    //            content:"今天很开心",
    //            height:600,
    //            id:15,
    //            imagePath:"http://192.168.100.150:8686/werun/files/image/trends/2019/8/2/1564742247114_image_1.jpg",
    //            like:false,
    //            likeNum:2,
    //            type:"IMAGE",
    //            width:800
    //     },
    //     {
    //            authorImage:"http://192.168.100.150:8686/werun/files/image/user/2019/5/31/1559297229522_image_1.jpg",
    //            authorName:"不行不行吧",
    //            authorNo:"95253826038136832",
    //            content:"是不是感觉萌萌哒！朋友们都说跟我本人很像啊",
    //            height:600,
    //            id:15,
    //            imagePath:"http://192.168.100.150:8686/werun/files/image/trends/2019/8/2/1564742510839_image_1.jpg",
    //            like:false,
    //            likeNum:2,
    //            type:"IMAGE",
    //            width:800
    //     }    
    // ],
        data:[],
        isRefresh:false,
        totalPage:1
    }
    //加载最新数据
    getNewData = () => {

        this.setState({
            isRefresh:true,
            currentPage:1
        })

        const parameter = {
            userNo:'98091218742804480',
            type:'hot',
            pageNum:this.state.currentPage,
            pageSize:10,
        }

        FetchRequest.requestDataWithType(API.Community_Trends_SelectPage_API,'POST',parameter,(responseJson)=>{
            //成功回调
            this.setState({
                totalPage:responseJson.data.data.pages,
                isRefresh:false,
                data:responseJson.data.data.records,
                // currentPage:currentPage < totalPage ? currentPage+1 : currentPage 
            })

        },(response)=>{
            //失败回调
            console.log('错误日志')

        })
    }

    ///渲染item
    _renderItem = (item,index) => {
        return <HotCompItem key={index} {...item}/>
    }

    _keyExtractor = (item,index) => {
        return `hot${index}`
    }

    _getHeightForItem = (item) => {
        const  itemWidth = (kScreenWidth - 40)/2.0;
        return itemWidth / item.width * item.height
    }

    componentDidMount() {
        //获取最新的动态数据
        this.getNewData()
    }
    render() {
        return (
            <View style={style.constainer}>
                
                <MasonryList 
                    numColumns={2}
                    data={this.state.data}
                    renderItem={this._renderItem}
                    refreshing={this.state.isRefresh}
                    onRefresh={this.getNewData}
                    keyExtractor={this._keyExtractor}
                    getHeightForItem={this._getHeightForItem}
                    />

            </View>
        )
    }
}


const style = StyleSheet.create(
    {
        constainer:{
            flex:1,
            width:kScreenWidth,
            backgroundColor:'#f5f5f5',
        },
        
    }
)
