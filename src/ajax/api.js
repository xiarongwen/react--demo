// const HOST = 'http://m.maoyan.com';
const HOST = 'http://localhost:3000';
/*
正在热映的初始请求
method： GET
*/
const MOVIE_PLAYING_INIT_API = HOST + '/ajax/movieOnInfoList';

/*
正在热映的更多请求
method： GET
params: movieIds
*/
const MOVIE_PLAYING_MORE_API = HOST + '/ajax/moreComingList';




const COMING_MOVIE_BANNER = HOST+'/ajax/mostExpected'


// 初始的
// ci=30
// limit=30
const COMING_MOVIE_LIST = HOST +'/ajax/comingList'

// 更多
const MORELIST = HOST + '/ajax/moreComingList'



// 影院
// day
//offset: 一次加20
// day: 2019-05-25
// offset: 40
// limit: 20
// districtId: -1
// lineId: -1
// hallType: -1
// brandId: -1
// serviceId: -1
// areaId: -1
// stationId: -1
const CINEMA_API = HOST + '/ajax/cinemaList'


//头部ci=30
const CINEMA_TOP_API = HOST + '/ajax/filterCinemas'



// 电影详情接口 movieId
const DATECIL_TOP_API = HOST + '/ajax/detailmovie'


// movieId   day
const DATECIL_CONTENT_API = HOST + '/ajax/filterCinemas'

const MOVIES_CONTENT_API = HOST +'/ajax/movie'


// 电影购票cinemaId: 23768
// movieId: 1207959
const CINEMADETAIL = HOST + '/ajax/cinemaDetail'
export default {
    MOVIE_PLAYING_INIT_API,
    MOVIE_PLAYING_MORE_API,
    COMING_MOVIE_BANNER,
    COMING_MOVIE_LIST,
    MORELIST,
    CINEMA_API,
    CINEMA_TOP_API,
    DATECIL_TOP_API,
    DATECIL_CONTENT_API,
    MOVIES_CONTENT_API,
    CINEMADETAIL
}