import {connect} from 'react-redux'
import ShowUI from './showUI'
import React from 'react';
import{
    requestCinemaDate2
}from '../../store/mode/Cinema'
const Index = (props)=>{
    return (
        <ShowUI {...props}/>
    )
}


const  mapStateToProps =(state)=>{
    return{
       MoviesDate:state.Cinema.MoviesDate
    }

}
const mapActionToProps=(dispatch)=>{
    return{
       setMoviesDate(params){
           let action = requestCinemaDate2(params)
           dispatch(action)
       }
    }
}





export default connect(mapStateToProps, mapActionToProps)(Index);

