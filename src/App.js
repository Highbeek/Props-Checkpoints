import './App.css';
import Profile from './profile/Profile'


const  App = () => {
  return (
    <div className="App">
      <Profile 
        name="ibk"
        bio='Gomycode'
        profession='Designer'>
        <img src="./pic/pic.jpg" alt='picss'/>
      </Profile>
    </div>
  );
}

export default App;
