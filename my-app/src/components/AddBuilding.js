import React from 'react';


class AddBuilding extends React.Component {
    constructor () {
        super();
        this.data = {
            code: '',
            name: '',
            address: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (param) {
        this.setState({ [param.target.code]: param.target.value})
    }
    
    render() {
            return (
                <form >
                    <input
                    className="buildingInput"
					type="text"
					ref={ (code => {this.myCode = code}) }
                    placeholder="Listing Code"
                    onChange={this.handleChange}
					 />
                    <input
                    className="buildingInput"
					type="text"
                    ref={ (buildingName => {this.myName = buildingName}) }
                    placeholder="Listing Name"
                    onChange={this.handleChange}
					 />
                    <input
                    className="buildingInput"
                    type="text"
                    ref={ (address => {this.myAddress = address})}
                    placeholder="Listing Address"
                    onChange={this.handleChange}
                    />
                    <button>Add Listing</button>
                </form>
            )
    }
}

export default AddBuilding