import React, { Component } from 'react';
import './MovieList.scss'
import './../../Cinema/style/style.scss'
import LoadMore2 from './../../../components/loadMore2'
import ListContent from '../../Cinema/child/list'
class MoiveList extends Component {
    constructor(props) {
        super(props);
        this.state={
            setAction:false,
        }
    }
    
    render() {
        // 背景图
        const bg ={
            backgroundImage:'url('+this.props.ListDate.movieListImg+')'
        }
        // 头部内容
        let changeTop = this.props.ListDate.MovieContent.map((item)=>{
            return(<div className='listDate' onClick={()=>this.showHidin()}>{item.name} {item.count}</div>)
         })


        let topBtn =['全城','品牌','特色'].map((item)=>{
            return(
                <div  className='ListBtn border-bottom' onClick={this.showHidin}>{item}</div>
            )  
        })

        // 内容
        let content = this.props.ListDate.MoviesDate.map((item)=>{
            return (
                <ListContent ListDate={item} goSkip={()=>this.skip(item.id)}></ListContent>
            )
        })
        return (
            <>
            {/* 头部 */}
            <div>
                <div className='header' onClick={this.skip}>
                     {/* 背景部分 */}
                    <div className='mask'>
                        <div className='bgDiv' style={bg} >
                        </div>
                    </div>

                    {/* 内容部分 */}
                    <div className='header-content'>
                        <div className='pic'>
                            <img src={this.props.ListDate.movieListImg} alt=""/>
                        </div>
                        <div className='content'>
                            <div className='title'>
                                <div className='title-cn'>{this.props.ListDate.dateilTopDate.nm}</div>
                                <div className='title-en'>{this.props.ListDate.dateilTopDate.enm}</div>
                            </div>
                            <div className='score'>
                                <div className='scoreNub'>{this.props.ListDate.dateilTopDate.sc}</div>
                                <div className='scorePeople'>( {this.props.ListDate.dateilTopDate.snum}人评)</div>
                            </div>
                            <div className='classification fl'>
                            {this.props.ListDate.dateilTopDate.cat}
                            </div>
                            <div className='classification time fl'>
                                <div className='city'>
                                    {this.props.ListDate.dateilTopDate.fra} /
                                </div>
                                <div className='time'>
                                    {this.props.ListDate.dateilTopDate.episodeDur}分钟
                                </div>
                            </div>

                            <div className='classification cn-time'>
                            {this.props.ListDate.dateilTopDate.pubDesc}
                            </div>
                        </div>
                    </div>
                </div>    
            </div> 

            {/* 选择导航栏 */}
            <div className='changesBar'>
                <div className='pageTop movies'>
                    {topBtn}
                </div>
                {/* 品牌选择 */}
                <>
                { this.state.setAction? <div className='changes'>{changeTop}</div>:""}
                </>
            </div>

            {/* 内容 */}

            <div>
                <LoadMore2 className='page2 ListTop'>
                    {content}
                </LoadMore2>
               
            </div>
            </>
        );

        
    }
    componentDidMount(){
        let value = {
            time:this.props.ListDate.location.state.day,
            id:this.props.ListDate.match.params.id
        }
       
        this.props.ListDate.setDateContentDate(value)
        console.log(this.props)
         console.log(this.props)
        this.props.ListDate.requestMoviesDate()


    }
    showHidin=()=>{
        this.setState({setAction:!this.state.setAction})
    }
    skip=(id)=>{
        let params = {
            cinemaId:id,
            movieId:this.props.ListDate.match.params.id
        }
        console.log(this.props.ListDate.history)
        this.props.ListDate.history.push({pathname:`/movies/${this.props.ListDate.match.params.id}/`,state:{params:params}})
        
    }
}

export default MoiveList;