import octoLogo from './assets/octonautslogo.png'
import shopLogo from './assets/Shopping cart.svg'
import hamburg from './assets/Menu.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='header'>
        <h1>Renton Octonauts</h1>
          <a href="#"><img src={shopLogo} alt="Shopping cart logo"/></a>
          <a href="#"><img src={hamburg} alt="hamburger menu"/></a>
      </div>
      <div id="root">
        <a href="#">
          <img src={octoLogo} alt="Octonauts Logo logo" />
        </a>
      </div>
      <div>
        {/* <a href="#" className='shop'><h2>Shop</h2></a> */}
      </div>
    </>
  )
}

export default App
