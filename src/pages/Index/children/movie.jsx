import {connect} from 'react-redux'
import MovieUi from './movieUi'
import React from 'react';


import{
    setDetaDate,
    setDetaContent,
    setMoviesDate

}from '../../../store/mode/dateil'


const Index = (props)=>{
    return (
        <MovieUi {...props}/>
    )
}


const  mapStateToProps =(state)=>{
    return{
        dateilTopDate:state.dateil.detailDate,
        movieListImg:state.dateil.MovieImg,
        MovieContent:state.dateil.MovieContent,
        MoviesDate:state.dateil.testdate
    }

}
const mapActionToProps=(dispatch)=>{
    return{
         // 请求详情页的数据
         setDateilDate(id){
            let aciton = setDetaDate(id)
            dispatch(aciton)
        },
        setDateContentDate(params){
            let action = setDetaContent(params)
            dispatch(action)
        },
        requestMoviesDate(){
            let action = setMoviesDate()
            dispatch(action)
        }
    }
}



export default connect(mapStateToProps, mapActionToProps)(Index);