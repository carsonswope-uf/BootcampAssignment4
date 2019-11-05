import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import RemoveBuilding from './components/RemoveBuilding';
import AddBuilding from './components/AddBuilding';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: []
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    }
    ,//console.log(value)
    )
    //Here you will need to set the filterText property of state to the value passed into this function
  }

  selectedUpdate(id) {
    console.log('id to add to fav:', id-1)
    
    const currentSelection = this.state.selectedBuilding.concat([id-1])
    this.setState({
      selectedBuilding: currentSelection
    })
  }

  removeBuilding(id) {
    const resetArray = this.state.selectedBuilding.concat([])
    const deleteArray = resetArray.splice()
    this.setState({
      selectedBuilding: deleteArray
    })
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
          />
        <main>
          <p>click on a thing to look at it on the right</p>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    removeBuilding={this.state.removeBuilding}
                    
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                selectedBuilding={this.state.selectedBuilding}
                data={this.props.data}
              />
              <RemoveBuilding 
                data={this.RemoveBuilding}
                removeBuilding={this.removeBuilding.bind(this)}
                building={this.state.selectedBuilding}
               
                />
            </div>
          </div>
          <h1>Add a Listing</h1>
          <AddBuilding/>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
