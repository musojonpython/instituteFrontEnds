import React from 'react';
import { Link } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import RoomIcon from '@mui/icons-material/Room';
import './style.css';
import {useT} from '../../custom/hooks/useT';

const Footer = () => {

    const { t, lang } = useT();

    return (
        <footer className='main-footer'>
            <div className="container ptb">
                <div className='row justify-content-between'>
                    <div className='col-lg-3 col-md-6'>
                        <h4 className='footer-title'>{t(`footerSmap.${lang}`)}</h4>
                        <ul>
                            <li>
                                <Link to="organisation">{t(`bHaqidaTitle1.${lang}`)}</Link>
                            </li>
                            <li>
                                <Link to="news">{t(`Yangiliklar.${lang}`)}</Link>
                            </li>
                            <li>
                                <Link to="Fotogalereya">{t(`Mediagalereya.${lang}`)}</Link>
                            </li>
                            <li>
                                <Link to="datas">{t(`Malumotlar.${lang}`)}</Link>
                            </li>
                            <li>
                                <Link to="projects">{t(`Hujjatlar.${lang}`)}</Link>
                            </li>
                            <li>
                                <Link to="Interaktive">{t(`Interaktiv.${lang}`)}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-5 col-md-6 mt-4 mt-lg-0'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2997.6486414220926!2d69.2254687!3d41.2947508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b62ad6c0735%3A0x2260c74fb009b861!2z0I7Qt9Cx0LXQutC40YHRgtC-0L0g0KDQtdGB0L_Rg9Cx0LvQuNC60LDRgdC4INCt0LrQvtC70L7Qs9C40Y8g0LLQsCDQsNGC0YDQvtGEINC80YPSs9C40YLQvdC4INC80YPSs9C-0YTQsNC30LAg0pvQuNC70LjRiCDQtNCw0LLQu9Cw0YIg0pvRntC80LjRgtCw0YHQuA!5e0!3m2!1sen!2s!4v1682565479652!5m2!1sen!2s"
                         title="This is a unique title"   width="100%" height="100%"  style={{ border: "0", minHeight: "270px" }} allowFullScreen loading="lazy"></iframe>
                    </div>
                    <div className='col-lg-3 col-md-6 mt-5 mt-md-0'>
                        <h4 className='footer-title'>{t(`Boglanish.${lang}`)}</h4>
                        <ul>
                            <li>
                                <a href='tel:998 73 542 21 28'> <PhoneIcon /> +998 71 207-11-07</a>
                            </li>
                            <li>
                                <a href='#'> <EmailIcon /> info@eco.gov.uz</a>
                            </li>
                            <li>
                                <a href='#'> <TelegramIcon /> (+99871) 207-07-70 (5001#)7</a>
                            </li>
                            <li>
                                <RoomIcon /> {t(`tAddress.${lang}`)}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          
        </footer>
    );
}

export default Footer;
