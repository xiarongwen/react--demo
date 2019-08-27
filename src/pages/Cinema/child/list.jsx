import React, { Component } from 'react';
import './list.scss'
class List extends Component {
    render() {
        let {ListDate} = this.props
        return (
            <>
                <div className='ListContent border-bottom' onClick={this.skip}>
                    <div className='title'>
                        <div className='title-content'>{ListDate.nm}</div>
                        <div className='moeny'>
                            <span>{ListDate.sellPrice}</span>元起
                        </div>
                    </div>
                    <div className='addr'>
                        <div className='addr-warp'>
                            <span>{ListDate.addr}</span>
                        </div>

                    <span className='km'>{ListDate.distance}</span>
                    </div>
                    {/* 折扣 */}
                    <div>

                    </div>


                    <div className='card'>
                        {ListDate.promotion.cardPromotionTag}
                    </div>
                </div>
            </>
            
        );
    }


    skip=()=>{
        this.props.goSkip()
    }
}

export default List;