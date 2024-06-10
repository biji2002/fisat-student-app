import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import ViewStudent from './components/ViewStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path ='/' element={<AddStudent/>}/>
        <Route  path ='/SearchStudent' element={<SearchStudent/>}/>
        <Route  path ='/ViewStudent' element={<ViewStudent/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
