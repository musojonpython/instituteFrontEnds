import React from 'react';
import './style.css';
import PhoneIcon from '@mui/icons-material/Phone';
import { changeLang, setLang, getLang } from '../../helpers';
import { useT } from '../../custom/hooks/useT';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const language = [
  {
    code: "en",
    name: "English",
    country_code: "en"
  },
  {
    code: "ru",
    name: "Pусский",
    country_code: "ru"
  },
  {
    code: "uz",
    name: "Uzbek",
    country_code: "uz"
  },
]

const handleChangeLng = (code) => {
  changeLang(code)
  setLang(code)
  window.location.reload();
}

const Banner = () => {
  const { t, lang } = useT()

  return (
    <section className='banner-section'> 
      <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className='logo d-flex align-items-center'>
          <Link className="navbar-brand" style={{marginLeft:"-80px"}} to="/">
              <img src='/img/logo.png' style={{marginRight:"10px"}} alt='Logo' />
            </Link>
            <font className='logo-title' style={{}}>{t(`welcomeP.${lang}`)}</font>
          </div>
          <div className='ummmm d-flex align-items-center'>
              <div className='phone d-flex align-items-center d-none d-lg-flex' style={{marginRight:"15px"}}>
                <PhoneIcon className='icon' sx={{ fontSize: 33 }} />
                <div className="m-2">
                  <span style={{color:'black', fontSize:"14px"}}>{t(`contactCenter.${lang}`)}</span>
                  <h6><a style={{color:'#03ae12'}} className='text-decoration-none' href="tel: +998 71 207-11-07">+998 71 207-11-07</a></h6>
                </div>
              </div>   

              <div className="dropdown language" style={{ zIndex: "999898989898898"}}>
                <button className="btn btn-outline-primary dropdown-toggle text-uppercase"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  {getLang()}
                </button>
                <ul id='langu' className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  {language.map(({ code, country_code }) => (
                      <li
                        onClick={() => handleChangeLng(code)}
                        key={country_code}>
                        <a className="dropdown-item" style={{color:"#03ae12"}} href="#">{country_code}</a>
                      </li>
                    ))}
                </ul>
              </div>        
          </div>
          <div className='phone d-flex align-items-center d-none d-lg-flex'>
              <a target={'_blank'} href='https://www.facebook.com/Uzecology/'> <FacebookIcon style={{fontSize:'30px', marginRight:'20px', color:'#03ae12'}} />  </a>
              <a target={'_blank'} href='https://www.instagram.com/ekologiyadavlatqomitasi/'> <InstagramIcon style={{fontSize:'30px', marginRight:'20px', color:'#03ae12'}} />  </a>
              <a target={'_blank'} href='https://t.me/ecogovuz'> <TelegramIcon style={{fontSize:'30px', marginRight:'20px', color:'#03ae12'}} />  </a>
              <a target={'_blank'} href='https://www.youtube.com/channel/UCiaUoLECuViPTHW1X72wsrw'> <YouTubeIcon style={{fontSize:'30px', marginRight:'20px', color:'#03ae12'}} />  </a>
          </div>
      </div>
      <div style={{paddingLeft: "40%", color: "red", marginBottom:"-18px"}}>
            <p>{t(`working.${lang}`)}</p>
          </div>
    </section>
  );
}

export default Banner;
