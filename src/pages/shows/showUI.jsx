import React, { Component } from 'react';
import Header from './../../components/header'
class ShowUI extends Component {
    render() {
        let {nm} = this.props.MoviesDate
        return (
            <div>
                <Header back name={nm} go={this.goback}></Header>
                <div className='page3'>
                            1312
                    {/* {this.props.location.state.params.movieId} */}
                </div>
            </div>
        );
    }
    componentDidMount(){
        let param = this.props.location.state.params
        console.log(this.props)
         this.props.setMoviesDate(param)
        
    }
    goback=()=>{
        this.props.history.goBack()
    }
}

export default ShowUI;