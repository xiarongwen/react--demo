import React, { Component } from 'react';
import Header from './../../components/header'
import './style/style.scss'
import List from './child/list'
import LoadMore2 from './../../components/loadMore2'
class IndexUl extends Component {
    constructor(props) {
        super(props);
        this.state={
            setAction:false
        }
    }
   
    render() {
        let {topDate,initDate} = this.props
        let changeTop = topDate.map((item)=>{
           return(<div className='listDate' onClick={()=>this.sendId(item)}>{item.name} {item.count}</div>)
        })
        let InitContentDate = initDate.map((item)=>{
            return(
                <List key={item.nm} ListDate={item}></List>
            )
        })

        let topBtn =['全城','品牌','特色'].map((item)=>{
            return(
                <div  className='ListBtn border-bottom' onClick={this.showHidin}>{item}</div>
            )  
        })
        // let 
        return (
            <>
                <Header name='影院'></Header>
                <div className='pageTop'>
                        {topBtn}
                </div>

                {/* 选择 */}
               { this.state.setAction? <div className='changes'>{changeTop}</div>:""}


                <LoadMore2 className='page2'>
                    {InitContentDate}
                </LoadMore2>
            </>
        );
    }

    sendId=(item)=>{
        console.log()
        this.props.requestContentId(item.id) //发送id
        // 请求
        this.props.requestChangeDate(item.id)

        this.setState({setAction:!this.state.setAction})
    }

    componentDidMount(){
        this.props.requestInitDate()
        this.props.requestCinameTopDate()

    }

    showHidin=()=>{
        console.log(this.state.setAction)
       
         this.setState({setAction:!this.state.setAction})
    }
}

export default IndexUl;