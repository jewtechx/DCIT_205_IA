import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import HomeLayout from './pages/home/homeLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
         <Routes>
           <Route path='/' element={<HomeLayout />}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
