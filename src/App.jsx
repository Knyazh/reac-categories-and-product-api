import './App.css';
import { BrowserRouter, Routes as KNYAZ, Route } from 'react-router-dom'
import HomePage from './pages/Index/HomePage';
import About from './pages/About/About';
import Product from './pages/Product/Product';
import { NotFound } from './pages/NotFound/NotFound';
import Header from './components/Header/Header';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>
        <KNYAZ>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/products' element={<Product/>} />
          <Route path='*' element={<NotFound/>} />
        </KNYAZ>
      </BrowserRouter>
    </div>
  );
}

export default App;
