import { useEffect } from 'react';
import './App.css';
import Api from './componets/api'

function App() {

  useEffect(() => {
    Api.getEmployee()
    .then(({data}) => {
      console.log(data.results);
    })
  })
  return (
    <div>
      <nav></nav>
      <main></main>
    </div>
  )};

export default App;
