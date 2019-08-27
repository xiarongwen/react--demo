// import { Link } from "react-router-dom";
import React, { Component } from 'react';
import './List.scss'
class List extends Component {
   
    constructor(props) {
        super(props);
        this.state={
            name:'123'
        }
    }
    
    render() {
        
        let btn ='';
        switch(this.props.listData.showst){
            case 1:
            btn = <div className='xk'>想看</div>
            break
            case 4:
            btn = <div className='ysBtb'>预售</div>
            break
            case 3:
            btn = <div className='buyNow'>购票</div>
            break
        }

        return (
            <div className='List border-bottom' onClick={()=>this.pathId()}>
                <div className='ListImg'>
                    <img src={this.props.listData.img} alt=""/>
                </div>

                <div className='main'>
                    <div className='title'>
                        <p>{this.props.listData.nm}</p>
                    </div>
                    <div className='content'>
                        <div className='content-top'>
                            <span className='Audience'>{this.props.listData.sc!=0?'观众评':'想看'}</span>
                            <span className='wish'>{this.props.listData.sc!=0?this.props.listData.sc:this.props.listData.wish}</span>
                        </div>

                        <div className='zhuyan'>
                            <span className='zhuyanName'>
                                主演：{this.props.listData.star}
                            </span>
                        </div>
                        <div className='zhuyan'>
                            <span className='zhuyanName'>
                            {this.props.listData.showInfo}
                            </span>
                        </div>


                        <div className='maxIcon'>
                            <img src={this.props.listData.version==='v3d imax' ? "./img/3dmax.png" :this.props.listData.version==='v3d'?'./img/v3d.png':""} alt=""/>
                        </div>
                        <div>{this.props.listData.preShow}</div>
                        <div>{btn}</div>
                    </div>
                </div>

            </div>
        );
    }
    pathId=()=>{
        console.log(this.props)
       this.props.history.push({pathname:"/movie/" + this.props.listData.id,state:{day:this.props.listData.rt}});
       
    }
}

export default List;