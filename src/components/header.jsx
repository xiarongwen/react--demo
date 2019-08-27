import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        let {name, back} = this.props;
        return (
            <div className='header-warp'>
                {back 
                 &&
                 <span  onClick={this.backAction} className='back'>返回</span>}
                <span className='name'> {name}</span>
            </div>
        );
    }
    backAction=()=>{
        this.props.go()
       
    }
}

export default Header;