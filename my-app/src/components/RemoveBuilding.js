import React from 'react';


class RemoveBuilding extends React.Component {
    removeBuilding(id) {
        this.props.removeBuilding(id);
        console.log('Removed Listings', id)
    }
    
    render() {
        const{building} = this.props
            return (
                <div>
                    {building && <button onClick={() => {
                    this.removeBuilding(building);
                    this.setState({state: this.state});
                    }}> Reset Listings
                    </button>
                    }
                </div>
            )
    }
}

export default RemoveBuilding