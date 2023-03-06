import React, { useCallback, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import baseApi from '../../../api/baseApi';
import { NEWS_URL } from '../../../api/Urls';
import { useT } from '../../../custom/hooks/useT';

const Section2 = () => {

    const { t, lang } = useT();
    const [news, setNews] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getNews = useCallback(
        async () => {
            baseApi.fetchAll(NEWS_URL)
                .then(response => {
                    setNews(response.data);
                    setisLoading(false);
                })
        }, [])

    useEffect(() => {
        getNews();
    })

    return (
        <section className='ptb w-100'>
            <div className="container">
                <div className='row main-title text-center'>
                    <div className='col'>
                        <h1 className='mb-5'>{t(`LatestNews.${lang}`)}</h1>
                    </div>
                </div>
                <div className='row'>
                    {
                        isLoading ? <h5>Loading...</h5> : news.slice(0, 3).map(item => (
                            <div className='col-md-6 col-lg-4 mb-4'>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img style={{
                                        height: '250px',
                                        width: '100 %',
                                        objectFit: 'cover'
                                        }} variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title className='text-dark'>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.content.slice(0, 200)}...
                                        </Card.Text>
                                        <Link to={`News/${item.created_at}`}><Button variant="primary">{t(`ReadMore.${lang}`)}</Button></Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    }
                </div>
                <div className='row'>
                    <div className='col text-center'>
                        <Link to="news"><Button variant="outline-primary">{t(`AllNews.${lang}`)}</Button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section2;
