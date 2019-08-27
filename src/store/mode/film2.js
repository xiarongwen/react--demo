import api from '../../ajax/api'
import request from '../../ajax/request'



const initState ={
    initDate:[],
    MoreParams:0,
    moreBannerDate:[],
    initListDate:[],
    loadingComing:false,
    newID :[]
}


// type

const INITDATEMOIVE = 'requestDate'
const MOREUNMB = 'requsetParams'
const MOREBANNERDATE ='requsetBannerDate'
const INITLISTDATE = 'requestInitDate'
const LOADINGCHANGE = 'changeLoading'
const COMINGID = 'comingid'
// rander

export default (state =initState,action)=>{
    switch (action.type) {
        case INITDATEMOIVE:
            return{
                ...state,
                initDate:[...state.initDate,...action.value]
            }
        case MOREUNMB:
            return{
                ...state,
                MoreParams:(state.MoreParams=30? state.MoreParams=30: state.MoreParams+10)
            }
        case MOREBANNERDATE:
            return{
                ...state,
                moreBannerDate:action.value
            }
        case INITLISTDATE:
            return{
                ...state,
                initListDate:[...state.initListDate,...action.value]
            }
        case LOADINGCHANGE:{
            return{
                ...state,
                loadingComing:action.value
            }
        }
        case COMINGID:{
            return{
                ...state,
                newID:action.value
            }
        }
        default:
        return state
    }
   
}


//处理同步 action

export const setInit = (params)=>{
    return{
        type:INITDATEMOIVE,
        value:params
    }
} 
export const Morenumb = (params)=>{
    return{
        type:MOREUNMB,
        value:params
    }
}
export const MoreBannerDate =(params)=>{
    return{
        type:MOREBANNERDATE,
        value:params
    }
}
export const InitListDate = (params)=>{
    return{
        type:INITLISTDATE,
        value:params
    }
}
export const ComngLoading = (params)=>{
    return{
        type:LOADINGCHANGE,
        value:params
    }
}
//id
export const ComingId = (params)=>{
    return{
        type:COMINGID,
        value:params
    }
}
//处理异步 

// 初始数据
export const setInitDate = ()=>{
    return async(dispatch)=>{
         let data = await request.get(api.COMING_MOVIE_BANNER)
        let newDate = data.coming.map((item)=>{
            item.img = item.img.replace(/w.h/, '128.180');
            return item
        })

        // console.log(data)
        // 数据
        dispatch(setInit(newDate))
        // id
        let dataId = data.paging
    }
}

// 更多数据
export const setMoreDate = (params)=>{

    return async(dispatch)=>{
        let data = await request.get(api.COMING_MOVIE_BANNER,{
            ci:30,
            limit:10,
            offset:params
        })
        let newDate = data.coming.map((item)=>{
            item.img = item.img.replace(/w.h/, '128.180');
            return item
        })
        console.log(newDate)
        dispatch(setInit(newDate))

    }
}


//内容的初始数据

export const setMoreListDate = ()=>{
    return async (dispatch)=>{
        let date = await request.get(api.COMING_MOVIE_LIST,{
            ci:30,
            limit:30
        })
        let newID = date.movieIds
        let newDate = date.coming.map((item)=>{
            item.img = item.img.replace(/w.h/, '128.180')
            return{
               item
            }
        });
        dispatch(ComingId(newID))
        dispatch(InitListDate(newDate))
    }
}


//更多
export const setInitListDate = (newID)=>{
    return async (dispatch)=>{
        let date = await request.get(api.MORELIST,{
            ci:30,
            limit:10,
            token:'',
            movieIds:newID
        })
    
        let newDate2 = date.coming.map((item)=>{
            item.img = item.img.replace(/w.h/, '128.180')
            return{
               item
            }

            
        });
        console.log(newID)
        dispatch(InitListDate(newDate2))
    }
}
