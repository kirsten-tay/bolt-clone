import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sec from './components/Sec'
import Third from './components/Third'
import PhoneSec from './components/PhoneSec'
import Next from './components/Next'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Sec/>
      <Third/>
      <PhoneSec/>
      <Next/>
    </div>
  );
}

export default App;
