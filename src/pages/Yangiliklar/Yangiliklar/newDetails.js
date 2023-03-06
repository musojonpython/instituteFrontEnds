import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { NEWS_URL } from '../../../api/Urls';
import baseApi from '../../../api/baseApi';
import { CalendarToday } from '@mui/icons-material';

const Newdetails = () => {
    const { id } = useParams();
    const [news, setNews] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getNews = useCallback(
        async () => {
            baseApi.fetchAll(NEWS_URL)
                .then(response => {
                    setNews(response.data)
                    setisLoading(false);
                })
        }, []);

    useEffect(() => {
        getNews()
    }, [])

    return (
        <section className='text-section'>
            <div className='container-fluid pl-5 pr-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-name'>
                            <h3>Yangiliklar</h3>
                            <div className='text-title-line'></div>
                        </div>
                    </div>
                </div>
                <div className='row d-flex justify-content-center'>
                    {
                        isLoading ? <h5>Loading...</h5> : news.filter(item => item.created_at == id).map(card => (
                            <div key={card.created_at} className='col-9 mb-3'>
                                <div className="card mb-3">
                                    <div className=' p-3'>
                                        <p className="card-text text-right">
                                                <CalendarToday sx={{ fontSize: "18px", color: "gray" }} /> <small className="text-muted"> {card.created_at.slice(0, 10)} / {card.created_at.slice(11, 16)}</small>
                                        </p>
                                        <h5 className="card-title text-dark">{card.title}</h5>
                                    </div>
                                    <img style={{ objectFit: "cover", height: "430px" }} src={card.image} className="card-img-top" alt="image" />
                                    <div className="card-body">
                                        <p className="card-text">{card.content}</p>
                                        <h5 className='text-right'>{card.author}</h5>
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

export default Newdetails;
