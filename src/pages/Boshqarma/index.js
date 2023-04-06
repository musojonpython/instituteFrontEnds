import React from 'react';
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
} from 'cdbreact';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useT } from '../../custom/hooks/useT';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown } from 'react-bootstrap';
import PersonIcon from '@mui/icons-material/Person';

const Sidebar = () => {
  const {pathname} = useLocation();
  const { t, lang } = useT();
  const setActiveClass = (path) => {
    if (pathname === path) {
      return "active";
    }
    return ""
  }

  return (
    <div>
      <div className='container-fluid d-flex w-100 p-0 my-4'>
        <div style={{ display: 'flex', overflow: 'scroll initial', zIndex: "21", borderRight: "1px solid rgb(197, 191, 191) ", height: "1020px" }}>
          <CDBSidebar textColor="#000000" backgroundColor="#fff">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a className="text-decoration-none" style={{ color: 'inherit' }}>
                {t(`Boshqarma.${lang}`)}
              </a>
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
              <Dropdown style={{ paddingLeft: "18px" }}>
                  <Dropdown.Toggle className={setActiveClass("/organisation/history")} style={{ fontWeight: "500", outline: "none", border: "none" }} variant="white" id="dropdown-basic">
                    <PersonIcon style={{ marginRight: "15px" }} /> {t(`yoshlargaOid.${lang}`)}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <NavLink to="/organisation/history">
                      <Dropdown.Item href="#/action-1">{t(`normativeNavbar.${lang}`)}</Dropdown.Item>
                    </NavLink>
                    <NavLink to="/organisation/today">
                      <Dropdown.Item href="#/action-2">{t(`YangiliklarYoshlar.${lang}`)}</Dropdown.Item>
                    </NavLink>
                  </Dropdown.Menu>
                </Dropdown>
                {/* <NavLink to="/organisation">
                  <CDBSidebarMenuItem className={setActiveClass("/organisation")} icon="columns" > {t(`bHaqidaTitle1.${lang}`)}</CDBSidebarMenuItem>
                </NavLink> */}
                <NavLink to="/organisation/functionduty">
                  <CDBSidebarMenuItem className={setActiveClass("/organisation/functionduty")} icon="columns" > {t(`bfunksiyavazifa.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/organisation/cheif">
                  <CDBSidebarMenuItem className={setActiveClass("/organisation/cheif")} icon="user">{t(`rahbariyat.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                
                <NavLink to="/organisation/boshqarmaNizomi">
                  <CDBSidebarMenuItem className={setActiveClass("/organisation/boshqarmaNizomi")} icon="table">{t(`bNizomTitle1.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/organisation/organisation">
                  <CDBSidebarMenuItem className={setActiveClass("/organisation/organisation")} icon="id-card">{t(`bTuzilmaTitle1.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/organisation/central">
                  <CDBSidebarMenuItem className={setActiveClass("/organisation/central")} icon="cogs">{t(`Mapparat.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/organisation/rulefinance">
                  <CDBSidebarMenuItem className={setActiveClass("/organisation/rulefinance")} icon="table">{t(`Byudjetto’g’risidagiqonunchilik.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/organisation/opendata">
                  <CDBSidebarMenuItem className={setActiveClass("/organisation/opendata")} icon="database">{t(`Ochiqma'lumotlar.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/organisation/vacansy">
                  <CDBSidebarMenuItem className={setActiveClass("/organisation/vacansy")} icon="address-book">{t(`ishOrni.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/organisation/events">
                  <CDBSidebarMenuItem className={setActiveClass("/organisation/events")} icon="calendar">{t(`tadbir.${lang}`)}</CDBSidebarMenuItem>
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
