import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Argonautes from './pages/Argonautes';
import Argo from './pages/Argo';
import Embarquement from './pages/Embarquement';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/argonautes" element={<Argonautes />} />
            <Route path="/embarquement" element={<Embarquement />} />
            <Route path="/argo/:id" element={<Argo editMode={true} />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
