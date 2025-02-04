import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DoctorSearch from './pages/DoctorSearch';
import PharmacySearch from './pages/PharmacySearch';
import Appointments from './pages/Appointments';
import HospitalDesc from './components/HospitalDesc';
import Doctors from './pages/Doctors';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<DoctorSearch />} />
            <Route path="/pharmacies" element={<PharmacySearch />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/hospital/:id" element={<HospitalDesc />} />
            <Route path="/hospital/:id/:dep" element={<Doctors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}