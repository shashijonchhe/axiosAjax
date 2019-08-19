import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      users:[]
    }
  }

  componentWillMount(){
    //let users=this.state.users
    axios("https://jsonplaceholder.typicode.com/users")
    .then(el=>this.setState({
      users:el.data
    })
    )
  }

  render(){
    let users=this.state.users
    return(
      <div>
        {users.map(user=><div>{user.address.geo.lat}</div>)}


      </div>
    )
  }
}



export default App;
