import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sec from './components/Sec'
import Third from './components/Third'
import PhoneSec from './components/phoneSec'
import Next from './components/Next'
import Fourth from './components/Fourth'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Sec/>
      <Third/>
      <PhoneSec/>
      <Next/>
      <Fourth/>
    </div>
  );
}

export default App;
