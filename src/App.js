import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Rooms from './components/Rooms/Rooms';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import SeeDo from './components/See&Do/See&Do';
import GuestReview from './components/GuestReview/GuestReview';
import Contact from './components/Contact/Contact';
import Footbar from './components/Footbar/Footbar';
import Map from './components/Map/Map';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Rooms />
      <Services />
      <Gallery />
      <SeeDo />
      <GuestReview />
      <Contact />
      <Map />
      <Footbar />
    </div>
  );
}

export default App;
