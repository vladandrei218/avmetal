import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Home from './pages/Home'
import PortiAluminiu from './pages/PortiAluminiu'
import PortiMetalice from './pages/PortiMetalice'
import BalustradeMetalice from './pages/BalustradeMetalice'
import PortiZincate from './pages/PortiZincate'
import UsiGaraj from './pages/UsiGaraj'
import FerestreTermopan from './pages/FerestreTermopan'
import AutomatizariBFT from './pages/AutomatizariBFT'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/porti-aluminiu" element={<PortiAluminiu />} />
        <Route path="/porti-metalice" element={<PortiMetalice />} />
        <Route path="/balustrade-metalice" element={<BalustradeMetalice />} /> 
        <Route path="/porti-garduri-zincate" element={<PortiZincate />} />
        <Route path="/usi-garaj" element={<UsiGaraj />} />
        <Route path="/ferestre-usi-termopan" element={<FerestreTermopan />} />
        <Route path="/automatizari-bft" element={<AutomatizariBFT />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App