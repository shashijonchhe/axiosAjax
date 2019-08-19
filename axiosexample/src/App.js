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
        {users.map(user=>
          <div>

          <h5>Name:{user.name}</h5>
          
          <p>Email:{user.email}</p>
          <span>Contact:{user.phone}</span>
          <hr></hr>
      
          </div>
         )}


      </div>
    )
  }
}



export default App;
