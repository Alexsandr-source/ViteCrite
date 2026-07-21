import { Routes, Route } from 'react-router-dom';
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

function App() {
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
        <Route path='/tems-and-conditions' element={<TemsAndConfitions/>}/>
        <Route path='/faq' element={<FAQ/>}/>
      </Routes>
    </>
  );
}

export default App;
