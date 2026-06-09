import octoLogo from './assets/octonautslogo.png'
import shopLogo from './assets/Shopping cart.svg'
import hamburg from './assets/Menu.svg'
import Carousel from './Carousel';
import './App.css'

function App() {

  return (
    <>
      <div className='header'>
        <h1 className="title">Renton Octonauts</h1>
          <a href="#" className="shop"><img src={shopLogo} alt="Shopping cart logo"/></a>
          <a href="#" className="info"><img src={hamburg} alt="hamburger menu"/></a>
      </div>
      <div id="root">
        <a href="#">
          <img src={octoLogo} alt="Octonauts Logo logo" className="logo"/>
        </a>
      </div>
      <div>
          <Carousel/>
      </div>
    </>
  )
}

export default App
