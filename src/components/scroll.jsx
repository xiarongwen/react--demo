import React, { Component } from 'react';

class Scroll extends Component {
    render() {
        let {className,children}= this.props
        return (
            <div className={`scroll-warp ${className}`} ref='scroll' style={{overflow:'hidden'}}>
                <scroll className='scroll'>
                    {children}
                </scroll>
            </div>
        );
    }


    componentDidMount(){
        // 创建滚动视图
        let scroll = new window.IScroll(this.refs.scroll,{
           
        })

        scroll.on('beforeScrollStart', ()=>{
            // 刷新滚动视图
            scroll.refresh();
        })
    };
   
}

export default Scroll;