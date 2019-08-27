import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './../style/tab.scss'

class Tabs extends Component {



    render() {
        let arr =[
            {name:'电影',path:'/index',icon:'icon'},
            {name:'影院',path:'/cinema',icon:'icon'},
            {name:'我的',path:'/mine',icon:'icon'}
        ]
        let link = arr.map((item,index)=>{
           return (
            <NavLink to={item.path} key={index} className='tabs'>
                <span className='icon'>{item.icon}</span>
                <span className='tab'>{item.name}</span>
            </NavLink>
           )
        })
        return (
                <nav className='tabs-warp border-top'>
                  {link}
                </nav>
        );
    }
}

export default Tabs;