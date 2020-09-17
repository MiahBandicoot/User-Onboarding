import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Form from './form'

function App() {
  const [list, setList] = useState([])

//   const getData = () => {
//     axios
//       .get('https://reqres.in/api/users')
//       .then(response => {
//       console.log(response)
//         setList(response.data.data)
//       })
//       .catch(error => {
//       console.error('Server Error', error);
//   })
//   }
// useEffect(()=>{
//   getData()
// },[list.length])
  return (
    <div className="App">
      
      <Form list = {list} setList = {setList}/>
      {list.map(member => {
        return(
          <div>
            <h1>{member.name}</h1>
            <h2>{member.email}</h2>
            <h2>{member.password}</h2>
          </div>
        )
      })}
    </div>
  );
}

export default App;
