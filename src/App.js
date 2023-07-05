import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Login from './Login.js';
import Annul from './Annul.js';
import Slider from './Slider';

function App() {
  return (
    <div className="App">
      <div class="container-xxl">
        <div class="row">
          <div class="col-12">
            <Nav/>
            
          </div>

          <div class="col-12">
            <div class="content">
              <Slider/>
            </div>
          </div>

          <div class="col-12 mt-5">
            <div class="content-lower">
              {/* <Login/> */}

              <Annul/>
            </div>
          </div> 

          <div class="col-12">
            <div class="footer">
              <Footer/>
            </div>
          </div> 

            
          
        </div>
      </div>
    </div>
  );
}

export default App;
