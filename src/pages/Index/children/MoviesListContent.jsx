import React, { Component } from 'react';

class MoviesListContent extends Component {
    render() {
        let {ListDate} = this.props
        return (
            <div>
                {ListDate.content.nm}
            </div>
        );
    }
}

export default MoviesListContent;