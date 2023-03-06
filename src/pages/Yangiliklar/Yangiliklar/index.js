import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { BASE_URL, NEWS_URL } from '../../../api/Urls';
import baseApi from '../../../api/baseApi';
import { useT } from '../../../custom/hooks/useT';
import { CalendarToday } from '@mui/icons-material';


const Yangiliklar = () => {

    const [news, setNews] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const { t, lang } = useT();

    const getNews = useCallback(
        async () => {
            baseApi.fetchAll(NEWS_URL)
                .then(response => {
                    setNews(response.data)
                    setisLoading(false);
                })
        }, []);

    useEffect(() => {
        getNews();
    }, []);

    return (
        <section className='text-section'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>{t(`Yangiliklar.${lang}`)}</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row pl-5 pr-5'>
                    {
                        isLoading ? <h5>Loading...</h5> : news.map((item) => (
                            <div key={item.created_at} className='col-lg-6 col-xl-4 mb-3'>
                                <div className="card mb-3" style={{minHeight: "500px"}}>
                                    <img style={{ objectFit: "cover", height: "300px" }} src={item.image} className="card-img-top" alt="image" />
                                    <div className="card-body">
                                        <p className="card-text text-right d-flex justify-content-start mb-2 m-0">
                                            <div>
                                                <CalendarToday sx={{ fontSize: "18px", color: "gray" }} />
                                                <small className="text-muted">
                                                    {item.created_at.slice(0, 10)} / {item.created_at.slice(11, 16)}
                                                </small>
                                            </div>
                                        </p>
                                        <div>
                                            <Link to={`${item.created_at}`} className="card-title text-dark hover-blue">
                                                <h5>{item.title}</h5>
                                            </Link>
                                        </div>
                                        {/* <p className="card-text">{item.content.slice(0, 150)}....</p> */}
                                        {/* <h5 className='text-right'>{item.author}</h5> */}
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

export default Yangiliklar;
