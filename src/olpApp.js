import React, { useEffect } from 'react'
import {Route, Routes, useLocation } from 'react-router-dom';
import Banner from './pages/Banner';
import NavbarMain from './pages/Navbar';
import Home from './pages/Home';
import './App.css';

import Boshqarma from './pages/Boshqarma'
import BoshqarmaHaqida from './pages/Boshqarma/BoshqarmaHaqida';
import Rahbariyat from './pages/Boshqarma/Rahbariyat';
import FunksiyaVazifalar from './pages/Boshqarma/FunksiyaVazifalar';
import BoshqarmaNizomi from './pages/Boshqarma/BoshqarmaNizomi';
import BoshqarmaTuzilmasi from './pages/Boshqarma/BoshqarmaTuzilmasi';
// import SuvBolimlari from './pages/Boshqarma/SuvBolimlari';
import MarkaziyApparat from './pages/Boshqarma/MarkaziyApparat';
import ByudjetQonun from './pages/Boshqarma/ByudjetQonun';
import OchiqMalumot from './pages/Boshqarma/OchiqMalumot';
import BoshIshOrnlari from './pages/Boshqarma/BoshIshOrnlari';
import Tadbirlar from './pages/Boshqarma/Tadbirlar';

import News from './pages/Yangiliklar'
import Yangiliklar from './pages/Yangiliklar/Yangiliklar';
import AxborotXizmati from './pages/Yangiliklar/AxborotXizmati';
import Elonlar from './pages/Yangiliklar/Elonlar';
import Fotogalereya from './pages/Mediagalereya/Fotogalereya';
import VideoMaterial from './pages/Mediagalereya/VideoMaterial';

import Datas from './pages/Malumotlar'
import Faoliyat1 from './pages/Malumotlar/Faoliyat1';
import Faoliyat2 from './pages/Malumotlar/Faoliyat2';
import Faoliyat3 from './pages/Malumotlar/Faoliyat3';
import Faoliyat4 from './pages/Malumotlar/Faoliyat4';
import Faoliyat5 from './pages/Malumotlar/Faoliyat5';
import Faoliyat6 from './pages/Malumotlar/Faoliyat6';
import Faoliyat7 from './pages/Malumotlar/Faoliyat7';
import Faoliyat8 from './pages/Malumotlar/Faoliyat8';
import Faoliyat9 from './pages/Malumotlar/Faoliyat9';
import Faoliyat10 from './pages/Malumotlar/Faoliyat10';
import Faoliyat11 from './pages/Malumotlar/Faoliyat11';

import Hujjatlar from './pages/Hujjatlar';
import PlannedProjects from './pages/Hujjatlar/PlannedProjects';
import DoingProjects from './pages/Hujjatlar/DoingProjects';
import FinishedProjects from './pages/Hujjatlar/FinishedProjects';

import Interaktive from './pages/InteraktivXizmatlar'
import JismoniyVaYuridikShaxslarMurojati from './pages/InteraktivXizmatlar/JismoniyVaYuridikShaxslarMurojati';
import MurojatYollash from './pages/InteraktivXizmatlar/MurojatYollash';
import TarjimaiHol from './pages/InteraktivXizmatlar/TarjimaiHol';
import IshTartibi from './pages/InteraktivXizmatlar/IshTartibi';
import JournalFiles from './pages/Journal/JournalFiles'
import Journal from './pages/Journal'

import FooterPages from './pages/Footer';
import Newdetails from './pages/Yangiliklar/Yangiliklar/newDetails';
import History from './pages/Boshqarma/YoshlargaOidYangiliklar/history';
import Today from './pages/Boshqarma/YoshlargaOidYangiliklar/today';
import FotoDetails from './pages/Mediagalereya/Fotogalereya/fotoDetails';
import VideoDetails from './pages/Mediagalereya/VideoMaterial/videoDetails';
import SuvXojalikBoshqarmasi from './pages/Boglanish/SuvXojalikBoshqarmasi';
import MurojatYollashBoglanish from './pages/Boglanish/MurojatYollash';
import Boglanish from './pages/Boglanish/index';
import { fallbackLng, languages } from './constants';
import i18next from 'i18next';


function App() {
  
  const {pathname} = useLocation();

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  },[pathname])


  useEffect(() => {
    let currentLang = localStorage.getItem("langu");

    if (!currentLang) {
      localStorage.setItem("langu", fallbackLng);
    } else if (languages.includes(currentLang)) {
      i18next.changeLanguage(currentLang);
    };
  }, [i18next]);

  return (
    <div className="App p-0">
      <Banner />
        <NavbarMain />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='organisation' element={<Boshqarma />}>
            <Route index element={<BoshqarmaHaqida />} />
            <Route path='history' element={<History />} />
            <Route path='today' element={<Today />} />
            <Route path='cheif' element={<Rahbariyat />} />
            <Route path='functionduty' element={<FunksiyaVazifalar />} />
            <Route path='boshqarmaNizomi' element={<BoshqarmaNizomi />} />
            <Route path='organisation' element={<BoshqarmaTuzilmasi />} />
            {/* <Route path='suvBolimlari' element={<SuvBolimlari />} /> */}
            <Route path='central' element={<MarkaziyApparat />} />
            {/* <Route path='rulefinance' element={<ByudjetQonun />} /> */}
            <Route path='opendata' element={<OchiqMalumot />} />
            <Route path='vacansy' element={<BoshIshOrnlari />} />
            <Route path='events' element={<Tadbirlar />} />
          </Route>

          <Route path='news' element={<News />}>
            <Route index element={<Yangiliklar />} />
            <Route path=':id' element={<Newdetails />} />
            <Route path='servicedata' element={<AxborotXizmati />} />
            <Route path='announce' element={<Elonlar />} />
          </Route>

            <Route path='Fotogalereya' element={<Fotogalereya />} />
            <Route path='Fotogalereya/:id' element={<FotoDetails />} />
            <Route path='VideoMaterial' element={<VideoMaterial />} />
            <Route path='VideoMaterial/:id' element={<VideoDetails />} />

          <Route path='datas' element={<Datas />}>
            <Route index element={<Faoliyat1 />} />
            <Route path='activity2' element={<Faoliyat2 />} />
            <Route path='activity3' element={<Faoliyat3 />} />
            <Route path='activity4' element={<Faoliyat4 />} />
            <Route path='activity5' element={<Faoliyat5 />} />
            <Route path='activity6' element={<Faoliyat6 />} />
            <Route path='activity7' element={<Faoliyat7 />} />
            <Route path='activity8' element={<Faoliyat8 />} />
            <Route path='activity9' element={<Faoliyat9 />} />
            <Route path='activity10' element={<Faoliyat10 />} />
            <Route path='activity11' element={<Faoliyat11 />} />
          </Route>

          <Route path='projects' element={<Hujjatlar />}>
            <Route path='doingprojects' element={<DoingProjects />} />
            <Route path='plannedprojects' element={<PlannedProjects />} />
            <Route path='finishedprojects' element={<FinishedProjects />} />
          </Route>

          <Route path='Interaktive' element={<Interaktive />}>
            <Route index element={<JismoniyVaYuridikShaxslarMurojati />} />
            <Route path='sendmessage' element={<MurojatYollash />} />
            <Route path='biography' element={<TarjimaiHol />} />
            <Route path='worktime' element={<IshTartibi />} />
            <Route path='journal' element={<JournalFiles />} />
          </Route>

          <Route path='Boglanish' element={<Boglanish />} >
            <Route index element={<SuvXojalikBoshqarmasi />} />
            <Route path='murojat' element={<MurojatYollashBoglanish />} />
          </Route>
        </Routes>
        <FooterPages />
    </div>
  );
}

export default App;
