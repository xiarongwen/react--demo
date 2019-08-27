import {connect} from 'react-redux'
import IndexUl from './IndexUI'
import React from 'react';
// import thunk from 'redux-thunk' //可以让redux接受一个函数
import {
    requestInitPlayingMovieData ,
    requestMorePlayingMovieData,
    setLoading,
} from '../../store/mode/film'

import{
    setInitDate,
    setMoreDate,
    Morenumb,
    setMoreListDate,
    ComngLoading,
    setInitListDate
} from '../../store/mode/film2'



const Container = (props)=>{
    return (
        <IndexUl {...props}/>
    )
}

// 相当于vue中的mut/将全局状态转成组件的props
const  mapStateToProps = (state)=>{
    return{
        moveDate:state.films.playingMovies,
        moveid:state.films.moveID,
        loading:state.films.loading,
        comimgDate:state.film2.initDate,
        moreBannerDate:state.film2.moreBannerDate,
        moreBannerDateParams:state.film2.MoreParams,
        commingListDate:state.film2.initListDate,
        comingLoading:state.film2.loadingComing,
        comingId:state.film2.newID,
        setInitListDate
    }
}
//异步操作 
const  mapActionToProps = (dispatch)=>{
    return{
        //开关
        requsetLoading(value){
            dispatch(setLoading(value));
        },
        // 请求原始数据
        requestData(){
            let action = requestInitPlayingMovieData();
            dispatch(action)
        },
        //更多
        requsetMoreData(newIDs){
            let action = requestMorePlayingMovieData(newIDs);
            dispatch(action);
        },



        // 即将上映数据请求
        requsetComingDate(){
            let action = setInitDate()
            dispatch(action)
        },

        requsetComingMoreDate(params){
            let action = setMoreDate(params)
            dispatch(action)
        },
            //参数
        requsetMoreParams(value){
            dispatch(Morenumb(value))
        },



        //即将上映下面初始List的数据
        requsetComingListDate(){
            let action = setMoreListDate()
            dispatch(action)
        },
        //开关2
        setLoadingComing(value){
            dispatch(ComngLoading(value))
        },

        // gengduo
        setMoreComingListDate(newID){
            let action =setInitListDate(newID)
            dispatch(action)
        },



       
    }
}
export default connect(mapStateToProps, mapActionToProps)(Container);