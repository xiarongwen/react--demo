
import React from 'react';
import {connect} from 'react-redux'
import IndexUl from './IndexUl'


import {
    requestCinemaDate,
    requestTopDate,
    setContentIdName,
    requestCinemaChangesDate
} from '../../store/mode/Cinema.js'

const Container2 = (props)=>{
    return (
        <IndexUl {...props}/>
    )
}

const mapStateToProps = (state)=>{
    return{
        initDate:state.Cinema.initDate,
        topDate:state.Cinema.topDate,
        initId:state.Cinema.contentId
        
    }
}

// 处理异步  派发请求
const  mapActionToProps = (dispatch)=>{
    return{
        requestInitDate(){
            let action = requestCinemaDate()
            dispatch(action)
        },
        requestCinameTopDate(){
            let action = requestTopDate()
            dispatch(action)
        },

        requestContentId(params){
            console.log(params)
            let action =setContentIdName(params)
            dispatch(action)
        },
        requestChangeDate(id){
            let action = requestCinemaChangesDate(id)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapActionToProps)(Container2);