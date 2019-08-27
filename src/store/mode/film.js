import api from '../../ajax/api'
import request from '../../ajax/request'



// type
 const SET_LOADING = 'set_loading';
const SET_PLAYING_MOVIE_IDS = 'set_playing_movie_ids';
const SET_PLAYING_MOVIE = 'set_playing_movie';

//初始state
const initialState = {
    playingMovies: [],
    moveID:[],
    loading:false
}


// render
export default (state=initialState,action)=>{
    switch (action.type) {

        // 设置loading状态
        case SET_LOADING:
                return{
                ...state,
                loading:action.value
            }

        case SET_PLAYING_MOVIE: 
            return {
                ...state,
                playingMovies: [...state.playingMovies, ...action.value],
            }
        case SET_PLAYING_MOVIE_IDS:
            return{
                ...state,
                moveID:action.value
            }
       
        default:
            return state;
    }
}

//action
export const setInitMovieData = (params)=>{
        return{
            type:SET_PLAYING_MOVIE,
            value:params
        }
}

export const setMovieId= (params)=>{
    return{
        type:SET_PLAYING_MOVIE_IDS,
        value:params
    }
}

// 开关
export const setLoading = (params)=>{
    return{
        type:SET_LOADING,
        value:params
    }
}



// --------------------处理异步--------------------------------

// 初始数据
export const requestInitPlayingMovieData =()=>{

    return async(dispatch)=>{
        // 请求数据
        let data = await request.get(api.MOVIE_PLAYING_INIT_API)
        let moveID = data.movieIds
        let newData = data.movieList.map((item)=>{
            item.img = item.img.replace(/w.h/, '128.180');
            return item
        //请求图片
        });
        let pathId = data.movieList.id
        dispatch(setInitMovieData(newData))
        // id
        dispatch(setMovieId(moveID))
        console.log(data.movieList)
    }
   
}

// 更多
export const requestMorePlayingMovieData =(newIDs)=>{
    // console.log(newIDs)
    return async(dispatch)=>{
        let data = await request.get(api.MOVIE_PLAYING_MORE_API,{
            movieIds:newIDs
        })
         let newData = data.coming.map((item)=>{
            item.img = item.img.replace(/w.h/, '128.180');
            return item;
         })

         dispatch(setInitMovieData(newData))
    }
}
