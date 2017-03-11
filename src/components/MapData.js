import React, { Component } from 'react';
import TableData from './TableData'

//MapData gets props and maps the data
class MapData extends Component {
  render(){
    return (
         <tbody>
           {this.props.dataLoaded.map((person, index) =>
             <TableData key={index} rank={index+1} profilePicture={person.img}
               username={person.username} recent={person.recent} alltime={person.alltime} />
           )}
        </tbody>
    );
  }
}

MapData.propTypes = {
  dataLoaded: React.PropTypes.array
}

export default MapData
