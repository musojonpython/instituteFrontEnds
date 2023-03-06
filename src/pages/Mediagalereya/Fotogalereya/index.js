import { CalendarToday } from '@mui/icons-material';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import baseApi from '../../../api/baseApi';
import { PHOTO_URL } from '../../../api/Urls';
import { useT } from '../../../custom/hooks/useT';
import './style.css'


const Fotogalereya = () => {

    const [photos, setphotos] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const { t, lang } = useT();

    const getPhotos = useCallback(
        async () => {
            baseApi.fetchAll(PHOTO_URL)
            .then(response => {
                setphotos(response.data);
                setisLoading(false)
            })
        }, []);

    useEffect(() => {
        getPhotos();
    }, [])

    return (
        <section className=' my-4'>
            <div className='container-fluid bg-white'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`Fotogalereya.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                    <div className='row'>
                        {
                            isLoading ? <h5>Loading...</h5> : photos.map((item) => (
                                <div key={item.created_at} className='col-md-6 col-lg-4 mb-4'>
                                    <div className="card">
                                        <img src={item.detail[0].image} className="card-img-top" alt={item.title} />
                                        <div className="card-body">
                                            <div className='d-flex justify-content-between flex-wrap'>
                                            <Link to={`${item.created_at}`} className="card-title"><h5>{item.title}</h5></Link>
                                                <p className="card-text"><small className="text-muted"><CalendarToday sx={{fontSize: "18px", color: "gray"}} /> {item.created_at.slice(0,10)}</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            </div>
        </section>
    );
}

export default Fotogalereya;
