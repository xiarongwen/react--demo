import React, { Component } from 'react';
import './list2.scss';
import List from './List';
class List2 extends Component {

    render() {
        let bannerListDate = this.props.initDate.map((item)=>{
            return(

                <li key={item.nm} className='bannerList' ref='list'>
                    <span className='IMG'><img src={item.img} alt=""/></span>
                    <span className='title'>{item.nm}</span>
                </li>
            )
        })
        return (
            <div className='pages'>
                <div className='top'>
                    <div>
                        <p>最近最受期待</p>
                    </div>
                    <div className='scroll-warp bannerWarp' ref='scroll' >
                        <ul className='scroll bannerNav'>
                            {bannerListDate}
                        </ul>
                    </div>
                </div>

                {/* 电影列表 */}
                
            </div>
        );
    }




    componentDidMount(){
        //请求数据
        this.props.creatDate()



        // 创建滚动视图
        let scroll = new window.IScroll(this.refs.scroll,{
            scrollX: true,
            scrollY: false,
            probeType: 3
        })

        scroll.on('beforeScrollStart', ()=>{
            // 刷新滚动视图
            
            scroll.refresh();
            console.log('5656')
        })



        scroll.on('scroll', ()=>{
            
            // console.log(scroll.y);
            // console.log(scroll.maxScrollY);
            if((scroll.x <= scroll.maxScrollX)){
               this.props.requestMoreDate()
            }
        })
    }
    
}

export default List2;