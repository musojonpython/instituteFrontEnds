import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useT } from '../../custom/hooks/useT';
import '../Boshqarma/style.css'
// import { Link } from "react-scroll";

const Sidebar = () => {

  const { t, lang } = useT();
  const { pathname } = useLocation();

  const setActiveClass = (path) => {
    if(pathname === path) {
      return "active";
    }
    return ""
  }

  return (
    <div className=' w-100'>
      <div className='container-fluid d-flex p-0 my-4'>
        <div id='zindex' style={{ display: 'flex', overflow: 'scroll initial', zIndex: "21", borderRight: "1px solid rgb(197, 191, 191) ", height: '380px' }}>
          <CDBSidebar textColor="#000000" backgroundColor="#fff">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a className="text-decoration-none" style={{ color: 'inherit' }}>
                {t(`Interaktiv.${lang}`)}
              </a>
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <Link to="/Interaktive">
                  <CDBSidebarMenuItem className={setActiveClass("/Interaktive")} icon="users">{t(`Jismoniy.${lang}`)}</CDBSidebarMenuItem>
                </Link>
                <NavLink to="/Interaktive/MurojatYollash">
                  <CDBSidebarMenuItem className={setActiveClass("/Interaktive/MurojatYollash")} icon="user">{t(`murojat.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/Interaktive/TarjimaiHol">
                  <CDBSidebarMenuItem className={setActiveClass("/Interaktive/TarjimaiHol")} icon="address-card">{t(`tarjimaiy.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/Interaktive/IshTartibi" spy={true} smooth={true} offset={50} duration={500}>
                  <CDBSidebarMenuItem className={setActiveClass("/Interaktive/IshTartibi")} icon="calendar">{t(`ishTartib.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>

              </CDBSidebarMenu>
            </CDBSidebarContent>
          </CDBSidebar>
        </div>
        <div className='container w-100'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
