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

const Sidebar = () => {
  const { t, lang } = useT();
  const {pathname} = useLocation();

  const setActiveClass = (path) => {
    if(pathname === path) {
      return "active"
    }
    return ""
  }

  return (

    <div>
      <div className='container-fluid d-flex w-100 p-0 my-4'>
        <div id='zindex' style={{ display: 'flex', overflow: 'scroll initial', zIndex: "21", borderRight: "1px solid rgb(197, 191, 191) ", height: "600px" }}>
          <CDBSidebar textColor="#000000" backgroundColor="#fff">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a className="text-decoration-none" style={{ color: 'inherit' }}>
                {t(`Malumotlar.${lang}`)}
              </a>
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
           
                <Link to="/datas">
                  <CDBSidebarMenuItem className={setActiveClass('/datas')} icon="users">{t(`Fidoiy.${lang}`)}</CDBSidebarMenuItem>
                </Link>
                <NavLink to="/datas/KorrupsiyagaQarshiKurash">
                  <CDBSidebarMenuItem className={setActiveClass('/datas/KorrupsiyagaQarshiKurash')} icon="user">{t(`korrupsiyaTitle.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/datas/RahbariyatMaruzalari">
                  <CDBSidebarMenuItem className={setActiveClass('/datas/RahbariyatMaruzalari')} icon="book">{t(`maruza.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/datas/Statistika">
                  <CDBSidebarMenuItem className={setActiveClass('/datas/Statistika')} icon="chart-line">{t(`Statistics.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                {/* <NavLink to="/datas/SuvXojalikFaoliyatiTogrisida">
                  <CDBSidebarMenuItem className={setActiveClass('/datas/SuvXojalikFaoliyatiTogrisida')} icon="table">{t(`faol.${lang}`)}</CDBSidebarMenuItem>
                </NavLink> */}
                {/* <NavLink to="/datas/RasmiyWebSahifa">
                  <CDBSidebarMenuItem className={setActiveClass('/datas/RasmiyWebSahifa')} icon="globe">{t(`web.${lang}`)}</CDBSidebarMenuItem>
                </NavLink> */}

                {/* <NavLink to="/datas/AxborotdanFoydalanuvchilarningSorovnomasi">
                  <CDBSidebarMenuItem className={setActiveClass('/datas/AxborotdanFoydalanuvchilarningSorovnomasi')} icon="file">{t(`sorovnoma.${lang}`)}</CDBSidebarMenuItem>
                </NavLink> */}
              </CDBSidebarMenu>
            </CDBSidebarContent>
          </CDBSidebar>
        </div>
        <div className="w-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
