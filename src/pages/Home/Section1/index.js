import React from 'react';
import './style.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useT } from '../../../custom/hooks/useT'

const HomeSection1 = () => {

    const { t, lang } = useT();

    return (
        <section className='about-section ptb w-100'>
            <div className='container'>
                <div className='row main-title text-center'>
                    <div className='col'>
                        <h1>{t(`welcome.${lang}`)}</h1>
                        <p style={{maxWidth: "700px", fontWeight: "500"}} className='text-black'>{t(`welcomeP.${lang}`)}</p>
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col-md-7 mb-3 mb-md-0'>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/OtihphpWeGM" title="Tabiatni muhofaza qilish va bioxilma-xillikni saqlash | Biologiya" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='col-md-5'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src='/img/1.png' />
                            <Card.Body>
                                <Card.Title className='text-dark'>{t(`AboutUs.${lang}`)}</Card.Title>
                                <Card.Text>
                                    {t(`bHaqida.${lang}`).slice(0,400)}...
                                </Card.Text>
                                <Link to="boshqarma"><Button variant="primary">{t(`ReadMore.${lang}`)}</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default HomeSection1;
