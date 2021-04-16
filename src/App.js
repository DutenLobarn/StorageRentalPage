// Import css
import './App.css';
// import components
import Booking from './components/Booking';
import Nav from "./components/Nav";
import Hero from './components/Hero';
import FirstSection from './components/FirstSection';
import SmallSection from './components/SmallSection';
import MediumSection from './components/MediumSection';
import BigSection from './components/BigSection';
import Questions from './components/Questions';
import Info from './components/Info';
import InfoPoppers from './components/InfoPoppers';
import Footer from './components/Footer';
// Import redux
import { useSelector} from 'react-redux'; 

function App() {
      // redux useSelector
      const toggleReducer = useSelector(state => state.toggleReducer);

  return (
    <main className="App">

      {toggleReducer ? <Booking/> :'' }

      <Nav/>
      
      <Hero/>

      <FirstSection/>

      <SmallSection/>
      <MediumSection/>
      <BigSection/>

      <Questions/>

      <Info/>

      <InfoPoppers/>

      <Footer/>
    
    </main>
  );
}

export default App;
