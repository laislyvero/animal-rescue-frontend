import './App.css';
import './header.css';
import './home.css';
import './css-files/about.css'
import NewAnimal from './components/newanimal';
import Home from './components/home';
import ContactUs from './components/contactus';
import AboutUs from './components/aboutus';
import Adopt from './components/adopt';

function App() {
  return (
    <div className="App">
     <NewAnimal/>
     <Home/>
    <ContactUs/>
    <AboutUs/>
    <Adopt/>
    
     
    </div>
  );
}

export default App;
