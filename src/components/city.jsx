import React, { Component } from 'react';
import Header from './../components/header'
class City extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        let cityListArr = ['深圳','九江','吉安','永丰']
        let cityList = cityListArr.map((item,index)=>{
            return(
                <li key={index}>{item}</li>
            )
        })
        return (
            <div>
            <Header name='选择城市' back history={this.props.history} go={this.goback}></Header>
            <div className='page others'>
                
               {cityList}
            </div>
            </div>
            
        );
    }

    goback=()=>{
        // console.log(this.props)
        this.props.history.goBack()
    }
}

export default City;