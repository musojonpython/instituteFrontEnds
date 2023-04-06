import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import {useT} from '../../custom/hooks/useT'
import './style.css';

const NavbarMain = () => {

    const { t, lang } = useT();

    return (
        <div className='Navbar'>
            <Navbar expand="lg">
                <Container>
                    <Link className="navbar-brand" to="/">
                        <HomeIcon sx={{ color: 'white' }} fontSize="large" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-link' to="/organisation">{t(`Boshqarma.${lang}`)}</Link>
                            <Link className='nav-link' to="/news">{t(`Yangiliklar.${lang}`)}</Link>
                            <NavDropdown title={t(`Mediagalereya.${lang}`)} id="basic-nav-dropdown">
                                <Link className='dropdown-item' to="/Fotogalereya">{t(`Fotogalereya.${lang}`)}</Link>
                                <Link className='dropdown-item' to="/VideoMaterial">{t(`VideoMaterial.${lang}`)}</Link>
                            </NavDropdown>
                            <Link className='nav-link' to="/datas">{t(`Malumotlar.${lang}`)}</Link>
                            <Link className='nav-link' to="/projects">{t(`Hujjatlar.${lang}`)}</Link>
                            <Link className='nav-link' to="/Interaktive">{t(`Interaktiv.${lang}`)}</Link>
                            {/* <Link className='nav-link' to="/Boglanish">{t(`Boglanish.${lang}`)}</Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarMain;
