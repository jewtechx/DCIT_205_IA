import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer';
import HomeLayout from './pages/home/homeLayout';
import AboutLayout from './pages/about/aboutLayout';
import Teams from './pages/teams/teams';
import ResearchGroups from './pages/research groups/researchGroups';
import Faq from './pages/faq/faq';
import NotFound from './pages/404';
import Contact from './pages/contact/contact';
import Sotd from './pages/sotd/sotd';
import Resources from './pages/resources/resources';
import Events from './pages/events/events';
import TipsLayout from './pages/tips/tipsLayout';

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
           <Route path='/resources' element={<Resources />}/>
           <Route path='/events' element={<Events />}/>
           <Route path='/tips&info' element={<TipsLayout />}/>
           <Route path='/site-of-the-day' element={<Sotd />}/>
           <Route path='/contact' element={<Contact />}/>
           <Route path='/faq' element={<Faq />}/>
           <Route path='*' element={<NotFound />}/>
         </Routes>
         <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
