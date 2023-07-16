import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FoodPage from './pages/FoodPage';
// import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';
import MDPage from './pages/MDPage';

function App() {
  return <Router>
         <Routes>
             <Route path="/" element={<MainPage />} />
             <Route path="/FoodPage" element={<FoodPage />} />
             <Route path="/MDPage" element={<MDPage />} />
         </Routes>
     </Router>;
}

export default App;
