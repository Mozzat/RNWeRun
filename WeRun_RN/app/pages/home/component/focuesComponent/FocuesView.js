import React, { Component } from 'react'
import {StyleSheet,View,FlatList} from 'react-native'
import { kScreenWidth } from '../../../../common/util/ScreenUtil'
import API from '../../../../common/Fetch/API'
import FetchRequest from '../../../../common/Fetch/FetchRequest'
import FocuesItem from './FocuesItem'

export default class FocuesView extends Component {

    state={
        isRefresh:false,
        data:[],
        totalPages:1,
        currentPage:1
    }

    getNewData = ()=> {

        const parameter = {
            userNo:'98091218742804480',
            type:'follow',
            pageNum:this.state.currentPage,
            pageSize:API.kPageSize
        }

        FetchRequest.requestDataWithType(API.Community_Trends_SelectPage_API,'POST',parameter,(response) => {

            console.log('社区关注数据')
            console.log(response)
            this.setState({
                totalPage:response.data.data.pages,
                isRefresh:false,
                data:response.data.data.records,
                // currentPage:currentPage < totalPage ? currentPage+1 : currentPage 
            })
            
        },(response)=> {

        })
    }

    _renderItem = (item,index) => {

        return <FocuesItem 
            {...item}
            key={index}
            />

    }

    _keyExtrator = (item,index) => {
        return `follow${index}`
    }

    componentDidMount() {
        this.getNewData();
    }

    render() {
        return (
            <View style={style.contain}>
                <FlatList 
                    style={style.flatListStyle}
                    data={this.state.data}
                    keyExtractor={this._keyExtrator}
                    renderItem={this._renderItem}
                    />
            </View>
        )
    }
}

const style = StyleSheet.create({
    contain:{
        backgroundColor:'#f5f5f5',
    },
    flatListStyle:{
        flex:1,
        width:kScreenWidth
    }
})

