import api from '../../ajax/api'
import request from '../../ajax/request'


const initState = {
    detailDate:[],
    MovieImg:[],
    MovieContent:[],
    testdate:[]
}

// type
const DATETOPDATE= 'datetopdate'
const MOVIELISTIMG='img'
const MOVIESCONTENT ='content'
const MOVIESDATE ='moviesdate'
// rander
export default (state =initState,action)=>{
    switch (action.type) {
        case DATETOPDATE:
            return{
                ...state,
                detailDate:action.value
            }
        case MOVIELISTIMG:
            return{
                ...state,
                MovieImg:action.value
            }
        case MOVIESCONTENT:
            return{
                ...state,
                MovieContent:action.value
            }
        case MOVIESDATE:
            return{
                ...state,
                testdate:action.value
            }
         default:
        return state
    }
   
}

// 处理同步
export const DetailDate=(params)=>{
    return{
        type:DATETOPDATE,
        value:params
    }
}
export const movieListImg=(params)=>{
    return{
        type:MOVIELISTIMG,
        value:params
    }
}
export const MoivesContent=(params)=>{
    return{
        type:MOVIESCONTENT,
        value:params
    }
}
export const requestMoivesDate=(params)=>{
    return{
        type:MOVIESDATE,
        value:params
    }
}
// 处理异步
export const setDetaDate=(id)=>{
    return async (dispatch)=>{
        let date = await request.get(api.DATECIL_TOP_API,{
            movieId:id
        })
        let newDate = date.detailMovie
        let newImg = date.detailMovie.img.replace(/w.h/, '128.180')
        console.log(date)
        dispatch(DetailDate(newDate))
        dispatch(movieListImg(newImg))
    }
}

export const setDetaContent=(params)=>{
    return async (dispatch)=>{
        let date = await request.get(api.DATECIL_CONTENT_API,{
            movieId:params.id,
            day:params.time
        })
       let newDate = date.brand.subItems
       console.log(date)
        dispatch(MoivesContent(newDate))
    }
}

export const setMoviesDate = ()=>{
    return async (dispatch)=>{
        let date = await request.post(api.MOVIES_CONTENT_API)
        let newDate = date.cinemas
        console.log(newDate)
        dispatch(requestMoivesDate(newDate))
    }
}