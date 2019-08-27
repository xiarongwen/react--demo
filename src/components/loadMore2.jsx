import React, { Component } from 'react';

class LoadMore2 extends Component {
    render() {
        let {className,children}= this.props
        return (
            <div className={`scroll-warp ${className}`} ref='scroll' style={{overflow:'hidden'}}>
            <div className='scroll'>
                {children}
            </div>
        </div>
        );
    }
    componentDidMount(){
        // 创建滚动视图
        let scroll = new window.IScroll(this.refs.scroll,{
                probeType: 3
        })

        scroll.on('beforeScrollStart', ()=>{
            // 刷新滚动视图
            scroll.refresh();
        })


        scroll.on('scroll', ()=>{
            // 滚动加载逻辑
            
            if(scroll.y <= scroll.maxScrollY){
                console.log('加载更多。。。。');
            }
        })

    };
}

export default LoadMore2;