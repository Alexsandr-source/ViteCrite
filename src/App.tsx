import { Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import OurTeam from './pages/OurTeam';
import PricingPlan from './pages/PricingPlan';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TemsAndConfitions from './pages/TemsAndConditions';
import FAQ from './pages/Faq';
import Products from './pages/Products';

export default function App() {
  return ( 
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/our-team' element={<OurTeam/>}/>
        <Route path='/pricing-plan' element={<PricingPlan/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/tems-and-conditions' element={<TemsAndConfitions/>}/>
        <Route path='/faq' element={<FAQ/>}/>
      </Routes>
    </>
  );
}

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Missing #root element')
ReactDOM.createRoot(rootElement).render(<App />)
