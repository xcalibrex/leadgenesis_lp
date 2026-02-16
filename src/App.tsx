import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AICaller } from './pages/AICaller';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Leads } from './pages/Leads';
import { Data } from './pages/Data';

function App() {
  const location = useLocation();
  const hideFooterOn = ['/about', '/leads', '/data'];
  const showFooter = !hideFooterOn.includes(location.pathname);

  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-cyan/30 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/data" element={<Data />} />
          <Route path="/ai-caller" element={<AICaller />} />
        </Routes>
      </main>

      {showFooter && <Footer />}
    </div>
  )
}

export default App
