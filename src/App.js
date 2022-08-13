import {Routes,Route} from 'react-router-dom';
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import Header from './components/Header';
import Footer from './components/Footer'
import BrowseOptions from './pages/BrowseOptions.js';
import './App.css';



function App() {

  return (
      <div className="app">

      <Header />

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='browse' element={<BrowseOptions/>} />
          <Route path='contact' element={<ContactPage/>}/>
          

        </Routes>

      <Footer />
      </div>
  );
}

export default App;
