import React, { Component } from 'react';

//TableData renders rows of the Table
class TableData extends Component {
  render(){
    return (
      <tr>
        <td>{this.props.rank}</td>
        <td><img className="profilePicture" src={this.props.profilePicture}/></td>
        <td>{this.props.username}</td>
        <td>{this.props.recent}</td>
        <td>{this.props.alltime}</td>
      </tr>
    );
  }
}

TableData.propTypes = {
  rank: React.PropTypes.number,
  profilePicture: React.PropTypes.string,
  username: React.PropTypes.string,
  recent: React.PropTypes.number,
  alltime: React.PropTypes.number
}

export default TableData
