import React, { Component } from 'react';
import Header from '../../../components/header'
import MovieList from './movieList'
class MovieUi extends Component {
    render() {
        return (
            <>
                <Header back go={this.goback} name={this.props.dateilTopDate.nm}></Header>
                <div className='page3'>
                    <MovieList ListDate={this.props}></MovieList>
                </div>
            </>
        );
    }
    componentDidMount(){
        console.log()
        this.props.setDateilDate(this.props.match.params.id)

    }
    // 返回上一页
    goback=()=>{
        this.props.history.goBack()
    }
}

export default MovieUi;