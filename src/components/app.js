import React,{Component} from 'react'
import {render} from 'react-dom';
import axios from 'axios';
import MapData from './MapData';
import TableData from './TableData';

//App Class handles Api call and click Event
class App extends Component {

  constructor(props){
       super(props);
       this.state = {
           recentData:[],
           alltimeData:[],
           selectedSort: 'currentRecent',
       };
       this.handleClick = this.handleClick.bind(this);
   };

   //handleClick changes the state of selected sort based on what the user clicked
   handleClick(clickedSort) {
     if((clickedSort == 'clickedAlltime') && (this.state.selectedSort == 'currentRecent')){
       this.setState(prevState => ({
         selectedSort: 'currentAlltime'
      }));
    }
    else if((clickedSort == 'clickedRecent') && (this.state.selectedSort == 'currentAlltime')){
      this.setState(prevState => ({
        selectedSort: 'currentRecent'
     }));
   }
   }

   //Loading Recent Data
   loadRecent(){
     return axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/recent`);
   }

   //Loading Alltime Data
   loadAlltime(){
     return axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/alltime`);
   }

   //Set the state of recentData and alltimeData with API call
   componentDidMount() {
     axios.all([this.loadRecent(), this.loadAlltime()])
     .then(axios.spread((recentData, alltimeData) => {
       this.setState({
         recentData:recentData.data,
         alltimeData:alltimeData.data
        })
  }));
  };

  render(){
    return (
      <div>
        <h2>Camper LeaderBoard</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Profile Picture</th>
              <th>Username</th>
              <th><button type="button" onClick={() => this.handleClick('clickedRecent')}>Points In 30 Days </button></th>
              <th><button type="button" onClick={() => this.handleClick('clickedAlltime')}>All-Time Points</button></th>
            </tr>
         </thead>
         {(this.state.selectedSort == 'currentRecent') ? <MapData dataLoaded = {this.state.recentData}/>:<MapData dataLoaded = {this.state.alltimeData}/>}
       </table>
      </div>
    );
  }
}

export default App
