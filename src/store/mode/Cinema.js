import api from '../../ajax/api'
import request from '../../ajax/request'
import { async } from 'q';



// type
const SETINITDATE = 'setinitdate'
const TOPDATE='topdate'
const SETID = 'setid'
const MOVIES = 'movies'
const initState ={
    initDate:[],
    topDate:[],
    contentId:-1,
    MoviesDate:[]
}

export default (state=initState,action)=>{
    switch(action.type){
        case SETINITDATE:
        return{
            ...state,
            initDate:action.value
        }
        case TOPDATE:
        return{
            ...state,
            topDate:action.value
        }
        case SETID:
        return{
            ...state,
            contentId:action.value
        }
        case MOVIES:
        return{
            ...state,
            MoviesDate:action.value
        }
        default:
            return state
    }
}


//处理同步
export const setCinemaInitDate=(params)=>{
    return{
        type:SETINITDATE,
        value:params
    }
}
export const setCinemaTopDate=(params)=>{
    return{
        type:TOPDATE,
        value:params
    }
}
export const setContentIdName=(params)=>{
    return{
        type:SETID,
        value:params
    }
}
export const setMoviesDate=(params)=>{
    return{
        type:MOVIES,
        value:params
    }
}
//处理异步

// 头部
export const requestTopDate=()=>{
    return async (dispatch)=>{
        let date = await request.get(api.CINEMA_TOP_API)
        let newDate = date.brand.subItems
        console.log(date)
        dispatch(setCinemaTopDate(newDate))
    }
}


// 内容
export const requestCinemaDate=()=>{
    return async (dispatch)=>{
        let data = await request.get(api.CINEMA_API,{
            day: '2019-05-25',
                offset: '0',
                limit: '20',
                districtId: '-1',
                lineId: '-1',
                hallType: '-1',
                brandId: '-1', //这个是要换的id,初始为-1
                serviceId: '-1',
                areaId: '-1',
                stationId: '-1',
        })
        let newDate = data.cinemas
        dispatch(setCinemaInitDate(newDate))
    }
}

// 更换
export const requestCinemaChangesDate=(id)=>{
    return async (dispatch)=>{
        let data = await request.get(api.CINEMA_API,{
            day: '2019-05-25',
                offset: '0',
                limit: '20',
                districtId: '-1',
                lineId: '-1',
                hallType: '-1',
                brandId: id, //这个是要换的id,初始为-1
                serviceId: '-1',
                areaId: '-1',
                stationId: '-1',
        })
        let newDate = data.cinemas

        console.log(newDate)
        dispatch(setCinemaInitDate(newDate))
    }
}


// CINEMADETAIL

export const requestCinemaDate2 = (params)=>{
    return async (dispatch)=>{
        let date = await request.get(api.CINEMADETAIL,{
                cinemaId: params.cinemaId,
                movieId: params.movieId
        })
        let newDate =date.cinemaData
        console.log(newDate)
        dispatch(setMoviesDate(newDate))
    }
}