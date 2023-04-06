import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useT } from '../../custom/hooks/useT';

const Sidebar = () => {
  const {pathname} = useLocation();
  const { t, lang } = useT();
  
  const setActiveClass = (path) => {
    if(pathname === path) {
      return "active"
    }
    return ""
  }

  return (
    <div>
      <div className='container-fluid d-flex w-100 p-0 my-4'>
        <div id='zindex' style={{ display: 'flex', overflow: 'scroll initial', zIndex: "21", borderRight: "1px solid rgb(197, 191, 191) ", height: "900px", width: "450px"}}>
          <CDBSidebar textColor="#000000" backgroundColor="#fff" style={{width:"100%"}}>
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a className="text-decoration-none" style={{ color: 'inherit' }}>
                {t(`Malumotlar.${lang}`)}
              </a>
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu  style={{ fontSize:"14px" }}> 
                <NavLink to="/datas">
                  <CDBSidebarMenuItem className={setActiveClass('/datas')} icon="columns">{t(`faoliyat1.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/datas/activity2">
                  <CDBSidebarMenuItem className={setActiveClass('/datas/activity2')} icon="laptop">{t(`faoliyat2.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/datas/activity3">
                  <CDBSidebarMenuItem className={setActiveClass('/datas/activity3')} icon="book">{t(`faoliyat3.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/datas/activity4">
                  <CDBSidebarMenuItem className={setActiveClass('/datas/activity4')} icon="globe">{t(`faoliyat4.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/datas/activity5">
                  <CDBSidebarMenuItem className={setActiveClass('/datas/activity5')} icon="table">{t(`faoliyat5.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/datas/activity6">
                  <CDBSidebarMenuItem className={setActiveClass('/datas/activity6')} icon="school">{t(`faoliyat6.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/datas/activity7">
                  <CDBSidebarMenuItem className={setActiveClass('/datas/activity7')} icon="trash">{t(`faoliyat7.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/datas/activity8">
                  <CDBSidebarMenuItem className={setActiveClass('/datas/activity8')} icon="address-book">{t(`faoliyat8.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/datas/activity9">
                  <CDBSidebarMenuItem className={setActiveClass('/datas/activity9')} icon="water">{t(`faoliyat9.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/datas/activity10">
                  <CDBSidebarMenuItem className={setActiveClass('/datas/activity10')} icon="calendar">{t(`faoliyat10.${lang}`)}</CDBSidebarMenuItem>
                </NavLink>
                <NavLink to="/datas/activity11">
                  <CDBSidebarMenuItem className={setActiveClass('/datas/activity11')} icon="tree">{t(`faoliyat11.${lang}`)}</CDBSidebarMenuItem>
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
