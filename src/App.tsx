import octoLogo from './assets/octonautslogo.png'
import './App.css'

function App() {

  return (
    <>
      <div className='header'>
        <h1 className='title'>Renton Octonauts</h1>
        <a href="#" className='shop'><h2>Shop</h2></a>
        <a href="#"><h2 className='info'>i</h2></a>
      </div>
      <div id="root">
        <a href="#">
          <img src={octoLogo} className="logo" alt="Octonauts Logo logo" />
        </a>
      </div>
      <div>
        {/* <a href="#" className='shop'><h2>Shop</h2></a> */}
      </div>
    </>
  )
}

export default App
