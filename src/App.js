
import './App.css';
import Navbar from './Navbar';

import About from './About';
import Aboutnext from './Aboutnext';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';


function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Aboutnext/>
      <About/>
      <div className='container my-5'>
      <Header/>
      <Form
      
      />
       </div>
       <Footer/>
    </div>
  );
}

export default App;
