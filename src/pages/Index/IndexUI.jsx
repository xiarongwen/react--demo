import React, { Component } from 'react';
import Header from './../../components/header';
import { Link } from "react-router-dom";
import './style/style.scss';
import ListC from './children/List'
import LoadMore from './../../components/loadMore'
import List2 from './children/List2'
// import LoadMore2 from './../../components/loadMore2'
class IndexUl extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectIndex:0,          //0表示是正在热映，1是即将上映
            name:null,
            isLoadFinish: false,
            isLoadFinish2:false
        }
    }
    
    render() {
       let navDom1 = this.navDom()
       let pageDom = this.state.selectIndex===0?this.hotDom():this.commingDom()
        return (
            <div>
                 {/* 头部 */}
                <Header name='猫眼电影'/>
                <div className='cityChoice border-bottom'>
                        <Link className='city' to='/index/city' >
                            <span className='gps' >定位</span> 
                        </Link>

                        <div className='hot-item'>
                                {navDom1}
                        </div>
                        <div className='search'>
                            <span>搜索</span>
                        </div>
                </div>


                {/* 内容 */}
                <LoadMore className='page' ref='content' LoadMoreId={this.requestId} LoadComingMoreId={this.requsetComingID}
                    loadingL={!(this.props.loading)} loadingC={!(this.props.comingLoading)}
                >
                    {pageDom}
                </LoadMore>


            </div>
        );
    }


    navDom =()=>{
        return(
            ['正在热映','即将上映'].map((item,index)=>{
                return(
                    <li className={'hot'+ (this.state.selectIndex===index?' active':" ")} key={index} onClick={()=>this.setIndex(index)}>{item}</li>
                )
            })
        )
    }
    setIndex=(index)=>{
        this.setState({selectIndex:index})
    }
    
    // 正在上映dom
    hotDom = ()=>{
        // console.log(this.props.moveDate)
        let List = this.props.moveDate.map((item,index)=>{
            return(
                <ListC key={index} listData={item} className='listC' {...this.props}></ListC>
            )
        })
       return(
           <div>{List}
           {this.state.isLoadFinish && <p>爷是底线的</p>}
           </div>
           
       )
    }


    //即将上映DOM
    commingDom=()=>{
        let ListDate = this.props.comimgDate.map((item)=>{
           
            return(
               item
            )
        })
        let contentDate = this.props.commingListDate.map((item,index)=>{
            return(
                    <ListC key={index} listData={item.item} className='listC'></ListC>
            )
        })
        // console.log(this.props.comimgDate)
        return(
            <div>
                <div><List2 requestMoreDate={this.moreDate} initDate={ListDate} creatDate={this.requestDate}></List2></div>
                <div>
                    {contentDate}

                    {this.state.isLoadFinish2 && <p>爷是底线的</p>}
                </div>
            </div>
        )
    }
    
    componentDidMount(){
        //请求初始数据
        // console.log(this.props)
        this.props.requsetLoading(true);
        this.props.requestData();
       

        //请求即将上映的初始数据

        this.props.requsetComingDate();

        //开关
        
        
    }
    // 请求即将上映更多数据
    moreDate=()=>{
        let numb = 10
        this.props.requsetMoreParams(numb)


        this.props.requsetComingMoreDate(this.props.moreBannerDateParams)
        console.log(this.props.moreBannerDate)
    }

    componentDidUpdate(old){
        // console.log(old.moveDate!=this.props.moveDate)
       if(old.moveDate != this.props.moveDate){
            //  console.log('更新')
            this.props.requsetLoading(false);

      } 
      if(old.commingListDate != this.props.commingListDate){
             this.props.setLoadingComing(false)
      }


    }
    requestId=()=>{
        this.props.requsetLoading(true);
        let ids = [...this.props.moveid]
        let length = this.props.moveDate.length;
        let newIDs = ids.splice(length, 10).join(',');


        if (length===this.props.moveid.length) {
            this.setState({ isLoadFinish: true });
        }else{
            // 发送请求
            this.props.requsetMoreData(newIDs);
          }
    }



    requsetComingID=()=>{
         this.props.setLoadingComing(true);
        let id = [...this.props.comingId]
        let length = this.props.commingListDate.length;
        let newID = id.splice(length, 10).join(',');
        console.log(newID)
        if (length === this.props.comingId.length) {
             this.setState({isLoadFinish2:true})
        }else{
            this.props.setMoreComingListDate(newID)
        }
    }

    // 请求comingList的数据
    requestDate=()=>{
        this.props.setLoadingComing(true)
        this.props.requsetComingListDate()
    }
   


}

export default IndexUl;