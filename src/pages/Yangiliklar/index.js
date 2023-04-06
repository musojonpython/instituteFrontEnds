import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useT } from '../../custom/hooks/useT';
import '../Boshqarma/style.css'

const Sidebar = () => {

  const { t, lang } = useT();
  const { pathname } = useLocation();

  const setActiveClass = (path) => {
    if(path === pathname) {
      return "active"
    }
    return ""
  }

  return (
    <div>
      <div className='container-fluid d-flex w-100 p-0 my-4'>
      <div id='zindex' style={{ display: 'flex', overflow: 'scroll initial', zIndex: "21", borderRight: "1px solid rgb(197, 191, 191) ", height: "315px" }}>
        <CDBSidebar textColor="#000000" backgroundColor="#fff">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a className="text-decoration-none" style={{ color: 'inherit' }}>
              {t(`Yangiliklar.${lang}`)}
            </a>
          </CDBSidebarHeader>
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <Link to="/news">
                <CDBSidebarMenuItem className={setActiveClass('/news')} icon="newspaper">{t(`Yangiliklar.${lang}`)}</CDBSidebarMenuItem>
              </Link>
              <NavLink to="/news/servicedata">
                <CDBSidebarMenuItem className={setActiveClass('/news/servicedata')} icon="info">{t(`AXizmati.${lang}`)}</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/news/announce">
                <CDBSidebarMenuItem className={setActiveClass('/news/announce')} icon="bullhorn">{t(`Elonlar.${lang}`)}</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
        <div className='w-100'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
