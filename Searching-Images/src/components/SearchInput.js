import React from 'react';
import logo from './res/favicon.ico'

class SearchInput extends React.Component {

    constructor(){
        super()
        // to bind the code so that we dont get error based on state
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    state = { entry : ''}

    onFormSubmit(event){
        event.preventDefault()
       this.props.onSearchSubmit(this.state.entry )
    }

    render() {
        return(
            <div className='ui header menu'>
                <img className="ui small logo" src={logo}></img>
                <div className='ui segment center menu'>
                    <form onSubmit={this.onFormSubmit} action="" className='ui form'>
                        <div className='field'>
                            <div className='ui massive icon input'>
                                <input 
                                    type='text' 
                                    placeholder='Search...' 
                                    // onChange={this.onInputChange} or
                                    onChange={(event) => this.setState({entry:event.target.value})}
                                    value={this.state.entry}
                                />
                                <i className='search icon'></i>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchInput;