import React from 'react'
import axios from 'axios';
import SearchInput from './SearchInput';
import ImageList from './ImageList';


class App extends React.Component {

    state = {  images: []  }

    onSearchSubmit = async(entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=35163023-5717dc6a4ecda760bd5a8edf7&q=${entry}&image_type=photo&per_page=50`)
        console.log(response.data.hits);
        this.setState({images:response.data.hits})
    }

    render() { 
        return ( 
            
            <div className='ui container' style={{marginTop:'10px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit}/>
                we have {this.state.images.length} images.
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}
 
 
export default App; 