import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicRoustes from './routes/PublicRoustes';

function App() {
  return (
    <div >
      <BrowserRouter>
        <PublicRoustes />
      </BrowserRouter>
    </div>
  );
}

export default App;
