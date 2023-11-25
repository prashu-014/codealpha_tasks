import {BrowserRouter,Routes,Route} from 'react-router-dom'


import Home from './compoenent/Home';
import Navigation from './pages/Navigation/Navigation';

import About from './pages/About/About'
import View from './pages/Cele_View/View'
import Contact from './pages/Contact/Contact'
import Login from './pages/Login/Login';



function App() {
  return (
   <>
   <BrowserRouter>
   
   <Navigation button="Login"/>
 
   <Routes>
   <Route path='/' element={<Home />}></Route>
   <Route path='about' element={<About />}></Route>
   <Route path='calenderView' element={<View />}></Route>
   <Route path='contactUs' element={<Contact />}></Route>
   <Route path='login' element={<Login />}></Route>
   
   </Routes>
   
  
   </BrowserRouter>

  
   
   
   </>
  );
}

export default App;
