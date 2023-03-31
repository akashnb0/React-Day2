import logo from './logo.svg';
import './App.css';
import ImageSlider from './Components/Slider';
import ImageCardSlider from './Components/CardSlider';
import OverButton from './Components/OverButton';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <header>
        <a href="#" className="logo">Volvo</a>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </header>
    <section className="banner">
    <OverButton/>
    </section>
    <div>
    <h1 className='Model'>All models</h1>
   <ImageCardSlider/>
   <ImageCardSlider/>
   <ImageCardSlider/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
