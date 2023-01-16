import './App.css';
import UserDetails from './components/UserDetails';

function App() {
  
  const peoples = [

    {id: 1, name: 'Alison', age: 22, job: 'Dev' },
    {id: 2, name: 'Alison II', age: 25, job: 'Dev' },
    {id: 3, name: 'Alison III', age: 12, job: 'Dev' },

  ]
  
  return (

    <div className="App">

      {
        peoples.map((person) => {
          return <UserDetails name = {person.name} age = {person.age} job = {person.job}></UserDetails>
        })
      }

    
    </div>
  );
}

export default App;
