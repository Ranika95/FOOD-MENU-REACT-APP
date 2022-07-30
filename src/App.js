import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/details' element={<Details></Details>}></Route>
        </Routes>
      </BrowserRouter>
      <Header></Header>
      <Menu></Menu>
    </div>
  );
}

export default App;
