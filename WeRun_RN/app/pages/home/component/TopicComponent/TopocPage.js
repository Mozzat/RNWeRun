import React, { Component } from 'react'
import {StyleSheet,View,FlatList} from 'react-native'
import TopicHeadComponent from './TopicHeadComponent'
import TopicItem from './TopicItem'
import FetchRequest from '../../../../common/Fetch/FetchRequest'
import API from '../../../../common/Fetch/API'
import { kScreenWidth } from '../../../../common/util/ScreenUtil'

export default class TopocPage extends Component {

    state={
        titleArr:[],
        data:[],
        isRefresh:false,
        currentPage:1,
        totalPage:1
    }

    listHead =() =>{
        
        return (
            <TopicHeadComponent data={this.state.titleArr}/>
        )

    }

    getTitleData = () => {
        
        const parameter = {
            pageNum:1,
            pageSize:50
        }

        FetchRequest.requestDataWithType(API.Label_SelectPage_API,'POST',parameter,(responseJson)=>{

            console.log(responseJson)
            this.setState({
                titleArr:responseJson.data.data.records,
            })

        },(responseJson)=>{

        });
        
    }

    getTopicData = (labelId) => {

        const parametr = {
            pageNum:this.state.currentPage,
            pageSize:API.kPageSize,
            labelId : labelId
        }

        FetchRequest.requestDataWithType(API.Subject_SelectPage_API,'POST',parametr,(response)=>{
            console.log('话题数据')
            console.log(response)
            this.setState({
                data:response.data.data.records,
            })

        },(response)=>{

        })

    }

    _renderItem = (item,index) => {
        return <TopicItem {...item} key={index} />
    }

    componentDidMount() {
        this.getTitleData()
        this.getTopicData('1')
    }

    render() {

        // if (this.state.titleArr) {
        //     return (
        //         <View style={style.container}>
        //             {/* {this.listHead()} */}
        //         </View>
        //     )
        // }

        return (
            <View style={style.container}>
                <FlatList 
                    ListHeaderComponent={this.listHead()}
                    data={this.state.data}
                    renderItem={this._renderItem}
                    extraData={this.state}
                    onRefresh={}
                    >

                </FlatList>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        width:kScreenWidth,
        flex:1
    }
})