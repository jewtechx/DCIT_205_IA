import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer';
import HomeLayout from './pages/home/homeLayout';
import AboutLayout from './pages/about/aboutLayout';
import Teams from './pages/teams/teams';
import ResearchGroups from './pages/research groups/researchGroups';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
         <Routes>
           <Route path='/' element={<HomeLayout />}/>
           <Route path='/about' element={<AboutLayout />}/>
           <Route path='/teams' element={<Teams />}/>
           <Route path='/research-groups' element={<ResearchGroups />}/>
         </Routes>
         <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
